'use client'

import { CollectionData } from "@/utils/types/home"
import Image from "next/image"
import Link from "next/link"

const CollectionCard = () => {
  const collectionsData: CollectionData[] = [
    {
      id: 1,
      url: "/assets/img/collection-1.webp",
      alt: "",
      title: "Lorem Ipsum",
    },
    {
      id: 2,
      url: "/assets/img/collection-2.webp",
      alt: "",
      title: "Lorem Ipsum",
    },
    {
      id: 3,
      url: "/assets/img/collection-2.webp",
      alt: "",
      title: "Lorem Ipsum",
    },
  ]

  return (
    <div className="grid grid-cols-3 gap-4 pt-[60px]">
      {collectionsData.map(({ id, title, url, alt }) => (
        <div className="relative group cursor-pointer" key={id}>
          <Image className="!relative object-contain group-hover:blur-sm ease-in-out duration-300 h-full w-full" src={url} alt={alt} layout='fill' objectFit='cover' />
          <div className={`absolute z-2 flex flex-col gap-[20px] p-[40px] bottom-0 left-0`}>
            <h1 className="text-heading-card">
              {title}
            </h1>
            <Link href="#" className="text-description border-b-[1px] font-semibold border-dark w-[fit-content] hover:border-yellow hover:text-yellow ease-in-out duration-300">
              View All
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CollectionCard