import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { signUp } from "../action";

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

  const { handleSubmit, control, formState: { errors }
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });


  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    const { email, password, name, phoneNumber } = data;
    await signUp({ email, password, name, phoneNumber })
    toast.success('Signed Up Successfully')
    router.push('/auth/sign-in')
  };

  return {
    handleSubmit,
    control,
    onSubmit,
    errors
  };
};

export default useSignUp;
