import Link from "next/link"
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

type HeaderProps = {
}

export default function Header({ }: HeaderProps) {
  return (
    <header className={`h-[96px] fixed top-0 w-full bg-[#FFF] drop-shadow-sm z-[1000]`}>
      <div className="flex justify-between container h-full mx-auto">
        <div>
          <ul className="flex h-full">
            <li className="px-[22px] my-auto">
              <Link href="/" className="text-header uppercase border-b-[1px] hover:border-yellow hover:text-yellow ease-in-out duration-300">
                Home
              </Link>
            </li>
            <li className="px-[22px] my-auto">
              <Link href="#" className="text-header uppercase  border-b-[1px] hover:border-yellow hover:text-yellow ease-in-out duration-30">
                Shop
              </Link>
            </li>
            <li className="px-[22px] my-auto">
              <Link href="#" className="text-header uppercase  border-b-[1px] hover:border-yellow hover:text-yellow ease-in-out duration-30">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="h-full">
          <div className="h-full flex items-center">
            <Link href="#" className="text-2xl font-bold tracking-[0.4rem]">
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
