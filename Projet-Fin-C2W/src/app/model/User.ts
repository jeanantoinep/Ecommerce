export interface User{
  username: string;
  token?: string;
  role: number;
}

export enum UserRole {
  ROLE_USER = 0,
  ROLE_ADMIN = 1
}
