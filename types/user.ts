export interface User {
    avatar_url: string;
    display_name: string;
    id: string;
    username: string;
}

export interface UsersResponse {
    ok: boolean;
    users: User[];
  }