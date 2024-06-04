'use client'
import { yupResolver } from "@hookform/resolvers/yup"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import * as yup from "yup"

const schema = yup.object().shape({
  email: yup.string().email().required(),
});

interface IFormInputs {
  email: string
}


const NewsLetter = () => {
  const { handleSubmit, control } = useForm<IFormInputs>({
    resolver: yupResolver(schema)
  })

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    try {
      const { email } = data

      // const res = await signInApi({ email })
    } catch (error) {
      console.log({ error });
    }
  }

  return (
    <div className="py-[60px] flex justify-between items-center">
      <div className="flex flex-col gap-[10px]">
        <h1 className="text-heading">
          Newsletter
        </h1>
        <p className="text-gray">
          Get timely updates from your favorite products
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-[20px]">
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <input id="email" type="email" autoComplete="email" required
              className="appearance-none relative block w-full lg:w-[500px] px-3 py-2 border-b-[2px] border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Enter your email address" {...field} />}
          />
          <button type="submit"
            className="flex border-b-[2px] py-2 hover:border-yellow hover:text-yellow ease-in-out duration-300 text-sm font-semibold text-dark-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            SUBSCRIBE
          </button>
        </div>
      </form>
    </div>
  )
}

export default NewsLetter