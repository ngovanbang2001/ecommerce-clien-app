import { Controller } from "react-hook-form";
import { useForm } from "../_hooks/useForm";
import Image from "next/image";
import { User } from "@/utils/types";

type Props = {
  user?: User;
};

const UserTab = ({ user }: Props) => {
  const { onSubmit, handleSubmit, control, handleChangeFile } = useForm({
    user,
  });

  return (
    <div>
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
        </div>
        <Controller
          name="name"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              className="w-full rounded-md p-2 col-span-3 border-[1px] border-gray-200"
            />
          )}
        />
        <div className="grid grid-cols-8 p-4 border-t-[1px] border-gray-100">
          <div className="flex items-center">
            <p className="font-medium text-gray-900">Phone number</p>
          </div>
          <Controller
            name="phoneNumber"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                className="w-full rounded-md p-2 col-span-3 border-[1px] border-gray-200"
              />
            )}
          />
        </div>
        <div className="grid grid-cols-8 p-4 border-t-[1px] border-gray-100">
          <div className="flex items-center">
            <p className="font-medium text-gray-900">Address</p>
          </div>
          <Controller
            name="address"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                className="w-full rounded-md p-2 col-span-3 border-[1px] border-gray-200"
              />
            )}
          />
        </div>
        <div className="grid grid-cols-8 p-4 border-t-[1px] border-gray-100">
          <div className="col-start-2">
            <button className="width-[fit-content] bg-green-600 px-4 py-2 text-white font-medium rounded-md">
              Save
            </button>
          </div>
        </div>
      </form>
      <div className="flex items-center border-l-[2px] border-gray-200 px-4">
        <label
          htmlFor="uploadFile1"
          className="bg-white text-gray-500 font-semibold text-base rounded max-w-md h-52 cursor-pointer border-2 border-gray-300 border-dashed mx-auto font-[sans-serif]"
        >
          <div className="px-[30px] flex flex-col items-center justify-center h-full gap-[8px]">
            <Image
              className="rounded-full"
              src={user?.avatar || "/assets/img/no-profile.jpg"}
              width={30}
              height={30}
              alt=""
            />
            Change avatar
            <input
              onChange={handleChangeFile}
              type="file"
              id="uploadFile1"
              className="hidden"
            />
          </div>
        </label>
        <button>Upload</button>
      </div>
    </div>
  );
};

export default UserTab;
