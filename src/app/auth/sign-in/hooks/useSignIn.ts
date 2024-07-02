import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
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
  
  const { handleSubmit, control, formState: {  errors } } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  
async function getProviders() {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/providers`);

  if (!res.ok) {
    throw new Error("Failed to fetch providers");
  }

  return res.json();
}




  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    const { email, password } = data;
    const resp: ReturnType<typeof getProviders> = (await getProviders()) || {};
  };

  return {
    handleSubmit,
    control,
    onSubmit,
    errors
  };
};  

export default useSignIn;
