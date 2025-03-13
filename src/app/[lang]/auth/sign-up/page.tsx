"use client";
import React from 'react'
import { Controller } from 'react-hook-form'
import useSignUp from './_hooks/useSignUp'
import Image from 'next/image';

const SignUp = ({ params: { lang } }: { params: { lang: string } }) => {
  const { handleSubmit, control, onSubmit, errors } = useSignUp()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create an account</h2>
          <p className="mt-2 text-center text-sm text-gray-600 max-w">
            <span className="mx-2">Or</span>
            <a href="/auth/sign-in" className="font-medium text-blue-600 hover:text-blue-500">
              Sign in to your account
            </a>
          </p>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div className="gap-2 flex flex-col mt-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <div className="mt-1">
                <Controller
                  name="name"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      aria-invalid={errors.name ? "true" : "false"}
                      className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Enter your name"
                      {...field}
                    />
                  )}
                />
                {errors.name?.message && (
                  <p className="text-sm text-red-700 my-1">{errors.name?.message}</p>
                )}
              </div>
            </div>

            <div className="gap-2 flex flex-col mt-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <Controller
                  name="email"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <input
                      id="email"
                      type="text"
                      autoComplete="email"
                      aria-invalid={errors.email ? "true" : "false"}
                      className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Enter your email address"
                      {...field}
                    />
                  )}
                />
                {errors.email?.message && (
                  <p className="text-sm text-red-700 my-1">{errors.email?.message}</p>
                )}
              </div>
            </div>

            <div className="gap-2 flex flex-col mt-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <Controller
                  name="password"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <input
                      id="password"
                      type="password"
                      autoComplete="password"
                      className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Enter your password"
                      {...field}
                    />
                  )}
                />
                  {errors.password?.message && (
                  <p className="text-sm text-red-700 my-1">{errors.password?.message}</p>
                )}
              </div>
            </div>

            <div className="gap-2 flex flex-col mt-2">
              <label htmlFor="re-password" className="block text-sm font-medium text-gray-700">
                Re-enter your password
              </label>
              <div className="mt-1">
                <Controller
                  name="rePassword"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <input
                      id="re-password"
                      type="password"
                      className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Enter your re-password"
                      {...field}
                    />
                  )}
                />
                {errors.rePassword?.message && (
                  <p className="text-sm text-red-700 my-1">{errors.rePassword?.message}</p>
                )}
              </div>
            </div>

            <div className="gap-2 flex flex-col mt-2">
              <label htmlFor="re-password" className="block text-sm font-medium text-gray-700">
                  Phone number
              </label>
              <div className="mt-1">
                <Controller
                  name="phoneNumber"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <input
                      id="phoneNumber"
                      type="text"
                      className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Enter your Phone number"
                      {...field}
                    />
                  )}
                />
                {errors.phoneNumber?.message && (
                  <p className="text-sm text-red-700 my-1">{errors.phoneNumber?.message}</p>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between py-4">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="/auth/forgot-your-password" className="font-medium text-blue-600 hover:text-blue-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign up
              </button>
            </div>
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-100 text-gray-500">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <div>
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                  >
                    <Image layout="fill" className="h-5 w-5" src="https://www.svgrepo.com/show/512120/facebook-176.svg" alt="" />
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                  >
                    <Image layout="fill" className="h-5 w-5" src="https://www.svgrepo.com/show/513008/twitter-154.svg" alt="" />
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                  >
                    <Image layout="fill" className="h-6 w-6" src="https://www.svgrepo.com/show/506498/google.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default SignUp
