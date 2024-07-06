import { useEffect, useState } from "react";
import { User } from "../../../../../../types/common";
import { SubmitHandler, useForm as useReactForm } from "react-hook-form";

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

    const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data)

    return {
        onSubmit,
        handleSubmit,
        control
    }
}