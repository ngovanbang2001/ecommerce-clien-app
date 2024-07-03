import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { signIn } from "../action";

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

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    const { email, password } = data;
    await signIn({ email , password })
    toast.success("Logged in successfully!");
    router.push('/')
  };

  return {
    handleSubmit,
    control,
    onSubmit,
    errors
  };
};  

export default useSignIn;
