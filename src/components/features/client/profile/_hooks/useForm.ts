import { useEffect, useState } from "react";
import { User } from "../../../../../../types/common";
import { SubmitHandler, useForm as useReactForm } from "react-hook-form";
import { updateProfile } from "../_action";
import { toast } from "react-toastify";

type Props = {
    user?: User
}

interface IFormInputs {
    name: string
    phoneNumber: string
    address: string
}

export const useForm = ({ user }: Props ) => {
    const { handleSubmit, control, reset } = useReactForm<IFormInputs>({
        defaultValues: {
            name: user?.name,
            phoneNumber: user?.phoneNumber,
            address: user?.address
        },
    })

    const onSubmit: SubmitHandler<IFormInputs> = async(data) => {
        await updateProfile(data)
        toast.success("Update Profile successfully!");
    }

    return {
        onSubmit,
        handleSubmit,
        control,
        reset
    }
}