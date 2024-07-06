import { User } from "../../../../../../types/common"
import { Controller, useForm } from "react-hook-form"

type Props = {
    user?: User
}

const UserTab = ({ user }: Props) => {
    const {  onSubmit, handleSubmit, control } = useForm({ user })

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col">
                <div className="flex flex-col gap-[8px] py-4">
                    <h1 className="font-bold text-gray-800 text-[20px]">
                        User Profile
                    </h1>
                    <p className="text-gray-500 ">
                        This is some information about the user.
                    </p>
                </div>
                <div className="grid grid-cols-8 p-4 border-t-[1px] border-gray-100">
                    <div className="flex items-center">
                        <p className="font-medium text-gray-900">
                            Full name
                        </p>
                    </div>
                    <Controller
                        name="name"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => <input {...field} type="text" className="w-full rounded-md p-2 col-span-3 border-[1px] border-gray-200" />}
                    />

                </div>
                <div className="grid grid-cols-8 p-4 border-t-[1px] border-gray-100">
                    <div className="flex items-center">
                        <p className="font-medium text-gray-900">
                            Phone number
                        </p>
                    </div>
                    <Controller
                        name="phoneNumber"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => <input {...field} type="text" className="w-full rounded-md p-2 col-span-3 border-[1px] border-gray-200" />}
                    />

                </div>
                <div className="grid grid-cols-8 p-4 border-t-[1px] border-gray-100">
                    <div className="flex items-center">
                        <p className="font-medium text-gray-900">
                            Address
                        </p>
                    </div>
                    <Controller
                        name="address"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => <input {...field} type="text" className="w-full rounded-md p-2 col-span-3 border-[1px] border-gray-200" />}
                    />

                </div>
                <div className="grid grid-cols-8 p-4 border-t-[1px] border-gray-100">
                    <div className="col-start-2">
                        <button className="width-[fit-content] bg-green-600 px-4 py-2 text-white font-medium rounded-md">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default UserTab