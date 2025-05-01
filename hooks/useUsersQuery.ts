import { Config } from '@/Config';
import { DENY_LIST } from '@/constants/denyList';
import { makeRequest, QueryKey, QueryMethod } from '@/networking';
import { User, UsersResponse } from '@/types/user';
import { useQuery } from '@tanstack/react-query';

// This function fetches users based on the search term
// It uses the makeRequest function to send a request to the API
// The API URL & Stale time is defined in the Config file
// It usee React Query to manage the state of the request and cache the response
// It makes a GET request to the API and returns the list of users
// The search term is passed as a query parameter
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
  const isAllowed = searchTerm.length >= 2 && !DENY_LIST.has(searchTerm.toLowerCase());
  console.log('searchTerm:', searchTerm, 'isAllowed:', isAllowed);

  
  return useQuery<User[]>({
    queryKey: [QueryKey.Users,searchTerm ],
    queryFn: () => fetchUsers(searchTerm),
    enabled: isAllowed,
    staleTime: Config.defaultStaleTime,
  });
};
