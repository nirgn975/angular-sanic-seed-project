export interface User {
  url: string;
  username: string;
  email: string;
  groups: Array<string>;
}

export interface UserResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: User[];
}
