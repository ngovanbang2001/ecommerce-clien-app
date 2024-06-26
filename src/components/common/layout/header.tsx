'use client'
import { GET_USER } from "@/lib/react-query/query-key/client";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link"
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { getInfoApi } from "@/services/userServices";

type HeaderProps = {
}

export default function Header({ }: HeaderProps) {
  const { data } = useQuery({
    queryKey: GET_USER,
    queryFn: getInfoApi,
  })

  console.log(data );

  return (
    <header className={`h-[96px] fixed top-0 w-full bg-[#FFF] drop-shadow-sm z-[1000]`}>
      <div className="flex justify-between container h-full mx-auto">
        <div>
          <ul className="flex h-full">
            <li className="px-[22px] my-auto">
              <Link href="/" className="text-header py-2 uppercase border-b-[1px] border-black hover:border-yellow-600 hover:text-yellow-600 ease-in-out duration-300">
                Home
              </Link>
            </li>
            <li className="px-[22px] my-auto">
              <Link href="#" className="text-header py-2 uppercase  border-b-[1px] border-black hover:border-yellow-600 hover:text-yellow-600 ease-in-out duration-300">
                Shop
              </Link>
            </li>
            <li className="px-[22px] my-auto">
              <Link href="#" className="text-header py-2 uppercase  border-b-[1px] border-black hover:border-yellow-600 hover:text-yellow-600 ease-in-out duration-300">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="h-full">
          <div className="h-full flex items-center">
            <Link href="#" className="text-3xl font-bold tracking-[0.4rem]">
              DEPOT
            </Link>
          </div>
        </div>
        <div>
          <ul className="flex h-full">
            <li className="px-[20px] my-auto">
              <Link href="#" className="text-header uppercase">
              <CiShoppingCart size={25}/>
              </Link>
            </li>
            <li className="px-[20px] my-auto">
              <Link href="/auth/sign-in" className="text-header uppercase">
                <CiUser size={25}/>
              </Link>
            </li>
            <li className="px-[20px] my-auto">
              <Link href="/search" >
                <CiSearch size={25} />
              </Link>
            </li>
          </ul>
        </div>
      </div>

    </header>
  )
}
