import { ChangeEvent, useEffect } from "react";
import { SubmitHandler, useForm as useReactForm } from "react-hook-form";
import { updateProfile, uploadFile } from "../action";
import { toast } from "react-toastify";
import { User } from "@/utils/types";

type Props = {
    user?: User
}

interface IFormInputs {
    name: string
    phoneNumber: string
    address: string
}

export const useForm = ({ user }: Props ) => {
    const { handleSubmit, control, reset, setValue, getValues } = useReactForm<IFormInputs>({
    })

    console.log({ user });


    const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data)

    useEffect(()=> {
        setValue('name', user?.name || "")
        setValue('phoneNumber', user?.phoneNumber || "")
        setValue('address', user?.address || "")
    }, [JSON.stringify(user)])

    const handleChangeFile = async(e: ChangeEvent<HTMLInputElement>) => {
        const avatar = e.target?.files?.[0]
        const formData = new FormData()
        formData.append("avatar", avatar || '');
        const res = await uploadFile(formData)
        const data = await res.json()
        await updateProfile({ avatar: data?.url || ""})
        toast.success("Update Profile successfully!");
    }

    return {
        onSubmit,
        handleSubmit,
        control,
        handleChangeFile,
        reset,
    }
}