"use client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { signUpApi } from "@/services/authService";
import { SIGN_UP } from "@/lib/react-query/query-key/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { SignUpRequest } from "../../../../../types/auth";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
  rePassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match').required(),
  phoneNumber: yup.string().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone number is not valid').required()
})

interface IFormInputs {
  name: string
  email: string
  password: string
  rePassword: string
  phoneNumber: string
}
const useSignUp = () => {
  const router = useRouter();

  const { handleSubmit, control } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const { mutate } = useMutation({
    mutationKey: SIGN_UP,
    mutationFn: async (args: SignUpRequest) => {
      await signUpApi(args)
    },
    onError: () => {
      toast.error('Something went wrong')
    },
    onSuccess: () => {
      router.push(`/auth/sign-in`)
    },
  })

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    const { email, password, name, phoneNumber } = data;

    mutate({ email, password, name, phoneNumber });
  };

  return {
    handleSubmit,
    control,
    onSubmit,
  };
};

export default useSignUp;
