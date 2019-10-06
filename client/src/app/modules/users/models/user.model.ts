export interface User {
  _id?: number;
  name: string;
  age: string;
  email: string;
  date_joined: number;
  dirty_fields: Array<string>;
}

export interface UsersResponse {
  _message: string;
  users: User[];
}
