"use client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { signInApi } from "@/services/authService";
import { SIGN_IN } from "@/lib/react-query/query-key/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { SignInRequest } from "../../../../../types/auth";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});

interface IFormInputs {
  email: string;
  password: string;
}

const useSignIn = () => {
  const router = useRouter();
  
  const { handleSubmit, control } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const { mutate } = useMutation({
    mutationKey: SIGN_IN,
    mutationFn: async (args: SignInRequest) => {
      await signInApi(args);
    },
    onError: () => {
      toast.error("Something went wrong");
    },
    onSuccess: () => {
      router.push(`/`);
    },
  });

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    const { email, password } = data;
    mutate({ email, password });
  };

  return {
    handleSubmit,
    control,
    onSubmit,
  };
};

export default useSignIn;
