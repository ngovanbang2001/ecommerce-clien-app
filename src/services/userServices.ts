import axiosInstance from "@/apiClient";

export function  getInfoApi() {
  return axiosInstance.get(`/user/info`);
}
