import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

type Props = {
  dict: any
}

const Social: FC<Props> = ({ dict }) => {
  return (
        <div className={`xs:h-[360px] xl:h-[400px] relative`}>
          <Image className="ease-in-out duration-300 h-full !w-[100vw]" layout='fill' objectFit='cover' src="/assets/img/h1_banner-4.webp" alt="" />
          <div className={`absolute z-1 flex flex-col gap-[15px] p-[24px] bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 items-center`}>
            <h1 className="text-heading-slider">
              Our Social
            </h1>
            <p className="text-description text-gray-800">
              Follow our store on Instagram
            </p>
            <Link href="#" className="text-description font-bold border-b-[2px] border-slate-900 w-[fit-content] hover:border-yellow-600 hover:text-yellow-600 ease-in-out duration-300">
              Follow us
            </Link>
          </div>
        </div>
  )
}

export default Social