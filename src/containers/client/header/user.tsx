'use client'
import Image from "next/image"
import Link from "next/link"
import { FaCircleUser } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { useInfo } from "./_hooks/useInfo";
import { PiSignOut } from "react-icons/pi";

type Props = {
}

const User = ({ }: Props) => {
  const { user, handleSignOut } = useInfo()

  return user ? (
    <Link href='/profile' className="flex justify-center items-end gap-[12px]">
      {user?.avatar ? <Image className="rounded-full" width={25} height={25} src={user.avatar} alt="" /> :
        (
          <div className="group relative">
            <div className="flex flex-row gap-[12px]">
            <FaCircleUser size={25} />
            <p className="">{user?.name}</p>
            </div>
            <div className="z-10 hidden ease-in-out duration-300 absolute top-10 left-0 group-hover:block bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 before:content-[''] before:absolute before:top-[-20px] before:left-0 before:w-full before:h-[20px] ">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                  <a href="/profile" className="ease-in-out duration-300 hover:font-bold block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</a>
                </li>
                <li>
                  <a href="#" className=" ease-in-out duration-300 hover:font-bold block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                </li>
                <li>
                  <div className="ease-in-out duration-300 hover:font-bold px-4 py-2 flex items-center flex-row gap-[8px] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={handleSignOut}>
                    <PiSignOut />
                    Sign out
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )}
    </Link>
  ) :
    <Link href="/auth/sign-in" className="text-header uppercase">
      <CiUser size={25} />
    </Link>
}


export default User 