import { Role } from "../enums/common";

export type SignUpRequest = {
  email: string;
  password: string;
  name: string;
  phoneNumber: string;
}

export type SignInRequest = {
  email: string;
  password: string;
}


export type User =  {
  id: string,
  phoneNumber?: string,
  email?: string,
  fullName?: string,
  createdAt: string,
  name: string
  avatar?: string
  address?: string
  icon: React.ReactNode
  content:  React.ReactNode
  isActive?: boolean,
  role: Role
}
