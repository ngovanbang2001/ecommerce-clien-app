'use client'
import { BannerImage } from "@/utils/types/home"
import { useState } from "react"
import { POSITION } from "./core/types"
import Image from "next/image"
import Link from "next/link"

const datas: BannerImage[] = [
  {
    id: 1,
    url: "/assets/img/slide10.webp",
    position: POSITION.LEFT,
    alt: "",
    headText: "Lorem Ipsum",
    descriptionText: "Lorem Ipsum"
  },
  {
    id: 2,
    url: "/assets/img/slide131.webp",
    position: POSITION.CENTER,
    alt: "",
    headText: "Lorem Ipsum",
    descriptionText: "Lorem Ipsum"
  },
  {
    id: 3,
    url: "/assets/img/slide2.webp",
    position: POSITION.RIGHT,
    alt: "",
    headText: "Lorem Ipsum",
    descriptionText: "Lorem Ipsum"
  },
]

const Slider = () => {
  const [selectedSlider, setSelectedSlider] = useState(0)
  const handleSelectSlider = (index: number) => {
    setSelectedSlider(index)
  }

  const { url, id, alt, headText, descriptionText, position } = datas[selectedSlider]

  const positionContent = (index: number) => {
    switch(index){
      case POSITION.LEFT: 
        return 'top-[50%] left-[85px]'
      case POSITION.RIGHT: 
        return 'top-[50%] right-[85px]'
      case POSITION.CENTER: 
        return 'top-[0] right-[50%] translate-x-1/2'
      default:
        return 
    }
  }

  return (
    <div className="relative">
      <div key={id} className={`w-full xs:h-[360px] xl:h-[670px] transition`}>
        <div className={`h-full w-full relative`}>
          <Image className="ease-in-out duration-300 h-full w-full" layout='fill' objectFit='cover' src={url} alt={alt} />
          <div className={`absolute z-1 flex flex-col gap-[24px] p-[24px] ${positionContent(position)}`}>
            <h1 className="text-heading-slider">
              {headText}
            </h1>
            <Link href="#" className="text-description font-bold border-b-[2px] border-dark-200 w-[fit-content] hover:border-yellow hover:text-yellow ease-in-out duration-300">
              Shop now
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute my-auto left-[-50px] top-10 flex flex-col z-1">
        {datas.map(({ id }, index) => (
          <div className="flex py-[10px] gap-[5px] justify-start items-center cursor-pointer" key={id} onClick={() => handleSelectSlider(index)}>
            <h3 className={`text-slider ${selectedSlider === index ? 'text-dark' : 'text-gray'}`}>
              {`0${index + 1}`}
            </h3>
            <div className={`${selectedSlider === index ? "w-[50px]" : "w-[25px]"} ease-in-out duration-300 border-t-[2px] border-solid ${selectedSlider === index ? "border-dark" : "border-gray"}`}>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Slider