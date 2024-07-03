'use client'
import axios, { AxiosRequestConfig } from 'axios'
import { useRouter } from 'next/navigation'

const config: AxiosRequestConfig = {
   baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
   withCredentials: true,
   headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
   }
}

const axiosInstance = axios.create(config)

axiosInstance.interceptors.request.use(
   async (config) => {
      return config;
   },
   (error) => Promise.reject(error),
);

const refreshToken = () => {
   return axiosInstance.post('/refresh-token')
}

axiosInstance.interceptors.response.use(
   (response) => {
      return response.data
   },
   async function (error) {
      const originalRequest = error?.config
      const router = useRouter()
      if (error?.response?.status === 401 && !originalRequest?._retry) {
         try {
            await refreshToken()
         } catch (error) {
            router.push('/auth/sign-in')
         }
      }

      if (error.response.status === 419) {
         router.push('/auth/sign-in')
      }

      if (error.response.data && error.response.data.error) {
         return Promise.reject(error.response.data.error)
      }

      if (error.response.status === 403) {
         return Promise.reject({
            message: 'Not Enough Permission'
         })
      }

      if (error.response.status === 500) {
         return Promise.reject({
            message: 'Error From Server'
         })
      }

      return Promise.reject({
         message: 'Unhandled Error'
      })
   })

export default axiosInstance