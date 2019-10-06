export interface User {
  _id?: string;
  updatedAt?: string;
  createdAt?: string;
  email: string;
  username: string;
  password?: string;
  auth: string;
  role: string;
  active: boolean;
  firstName: string;
  lastName: string;
  __v?: number;
}

export interface UsersResponse {
  _message: string;
  users: User[];
}
