import { Config } from '@/Config';
import { DENY_LIST } from '@/constants/denyList';
import { makeRequest, QueryKey, QueryMethod } from '@/networking';
import { User, UsersResponse } from '@/types/user';
import { useQuery } from '@tanstack/react-query';

const fetchUsers = async (searchTerm: string): Promise<User[]> => {
  const response = await makeRequest<UsersResponse>({
    method: QueryMethod.GET,
    url: Config.apiUrl,
    params: {
      query: searchTerm,
    },
  });

  return response.data.users;
};

export const useUsersQuery = (searchTerm: string) => {
  const isAllowed = !DENY_LIST.has(searchTerm.toLowerCase());
  console.log('searchTerm:', searchTerm, 'isAllowed:', isAllowed);

  
  return useQuery<User[]>({
    queryKey: [QueryKey.Users,searchTerm ],
    queryFn: () => fetchUsers(searchTerm),
    enabled: isAllowed,
    staleTime: Config.defaultStaleTime,
  });
};
