import Image from "next/image"
import Link from "next/link"
import React, { FC } from "react"

interface Props {
  dict: any
}

const NewArrival: FC<Props> = ({ dict }) => {

  return (
      <div className="relative group cursor-pointer xs:h-[360px] xl:h-[620px]">
        <Image className="object-cover group-hover:blur-sm ease-in-out duration-300 w-full h-full" src="/assets/img/h1_banner-3_1296x.webp" alt="" layout="fill" objectFit='cover' />
        <div className={`absolute z-2 flex items-center flex-col gap-[24px] p-[24px] bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2`}>
          <h3 className="text-heading-card">
            NEW ARRIVALS
          </h3>
          <h1 className="text-heading-slider">
            lassical Decor
          </h1>
          <Link href="#" className="px-[40px] py-[20px] hover:border-yellow-600 hover:text-yellow-600  border-[2px] border-slate-900 mt-[30px] w-[fit-content] ease-in-out duration-300 text-lg font-semibold">
            Order Now
          </Link>
        </div>
      </div>
  )
}

export default NewArrival