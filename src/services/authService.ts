import axiosInstance from "@/apiClient/axios";
import { SignInRequest, SignUpRequest } from "../../types/auth";

export function signUpApi({email, password, name, phoneNumber }: SignUpRequest) {
  return axiosInstance.post(`/sign-up`, { email, password, name, phoneNumber });
}

export function  signInApi({email, password }: SignInRequest) {
  return axiosInstance.post(`/sign-in`, { email, password });
}
