export interface User {
  age: string;
  date_joined: number;
  dirty_fields?: Array<string>;
  email: string;
  id: number;
  name: string;
}

export interface UsersResponse {
  _message: string;
  users: User[];
}
