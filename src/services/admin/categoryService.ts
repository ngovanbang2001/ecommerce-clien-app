import axiosInstance from "@/apiClient";
import { CreateCategoryRequest } from "../../../types/admin/category";
import { BASE_ADMIN_URL } from ".";

export function createCategoryApi(formData: CreateCategoryRequest) {
  return axiosInstance.post(`${BASE_ADMIN_URL}`, formData , {
    headers: {
      'Content-Type':'multipart/form-data'
    }
  });
}