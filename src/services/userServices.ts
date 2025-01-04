import axiosInstance from "@/apiClient";
import { User } from "../utils/types/common";

export function  getInfoApi(): Promise<{ user: User}> {
  return axiosInstance.get(`/user/info`);
}
