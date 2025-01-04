import { CollectionData } from "../../../../utils/types/client/home"
import Link from "next/link"
import { FC } from "react";
import { CiUser } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";

interface Props {
  dict: any
}

const Blog: FC<Props> = ({ dict }) => {
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
    <div className="pt-[110px]">
      <div className="flex flex-col gap-[15px] justify-center items-center">
        <h1 className="text-heading">
          Our Blogs
        </h1>
        <h1 className="text-description">
          Find a bright ideal to suit your taste with our great selection
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-4 pt-[50px]">
        {collectionsData.map(({ id, title, url, alt }) => (
          <div className="relative group cursor-pointer" key={id}>
            <img className="object-contain group-hover:blur-sm ease-in-out duration-300" src={url} alt={alt} />
            <div className={`flex flex-col gap-[15px] py-[15px] px-[40px] items-center `}>
              <div className="flex flex-row gap-[8px] items-center">
              <CiUser className="text-gray-800" />
              <p className="text-sm text-gray-800">Bang</p>
              <p className="text-sm text-gray-800">-</p>
              <CiCalendarDate className="text-gray-800"/>
              <p className="text-sm text-gray-800">April 15, 2024</p>
              </div>
              <h1 className="text-heading-card">
                {title}
              </h1>
              <Link href="#" className="text-description py-[8px] border-b-[2px] border-slate-900 font-semibold text-slate-900  w-[fit-content] hover:border-yellow-600 hover:text-yellow-600 ease-in-out duration-300">
                Read more
              </Link>
            </div>
          </div>
        ))}

      </div>
      <div className="flex justify-center pt-[60px] pb-[110px]">
        <button className="bg-[#000] text-[#FFF] text-lg font-semibold px-[40px] py-[20px]">
          View All Post
        </button>
      </div>
    </div>

  )
}

export default Blog