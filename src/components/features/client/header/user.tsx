'use client'
import { GET_USER } from "@/lib/react-query/query-key/client"
import { getInfoApi } from "@/services/userServices"
import Image from "next/image"
import Link from "next/link"
import { FaCircleUser } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";


type Props = {
}

const User = ({ }: Props)=> {
  const data = {}
  
  return data?.user ? (
      <Link href='/profile' className="flex justify-center items-end gap-[12px]">
        {data?.user?.avatar ? <Image className="rounded-full h-25 w-25" src={data.user.avatar} alt=""/> : <FaCircleUser size={25} /> }
        <p className="">{data.user?.name}</p>
      </Link>
    ) : 
    <Link href="/auth/sign-in" className="text-header uppercase">
      <CiUser size={25}/>
    </Link>}
  

export default User 