'use client'

import { FC } from "react"
import ProductCard from "./product-card"
import { Product } from "@/utils/types/client/product"

interface Props {
  dict: any
}

const ListProduct: FC<Props> = ({ dict }) => {
  const productsData = [
    {
      id: 1,
      imageUrl: "/assets/img/collection-1.webp",
      name: "Lorem Ipsum",
      quantity: 100,
      categoryId: 1,
      description: "Lorem Ipsum",
      price: 13.34,
    },
    {
      id: 2,
      imageUrl: "/assets/img/collection-2.webp",
      name: "Lorem Ipsum",
      description: "Lorem Ipsum",
      quantity: 100,
      categoryId: 1,
      price: 13.34,
    },
    {
      id: 3,
      imageUrl: "/assets/img/collection-1.webp",
      name: "Lorem Ipsum",
      quantity: 100,
      categoryId: 2,
      description: "Lorem Ipsum",
      price: 13.34,
    },
    {
      id: 4,
      imageUrl: "/assets/img/collection-2.webp",
      name: "Lorem Ipsum",
      quantity: 100,
      categoryId: 2,
      description: "Lorem Ipsum",
      price: 13.34,
    },
  ]

  return (
    <div className="relative pt-[60px]">
      <div className="flex flex-col gap-[15px] justify-center items-center">
        <h1 className="text-heading">
          Top Picks For You
        </h1>
        <h1 className="text-description">
          Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-4 pt-[50px]">
        {productsData.map((product) =>
          <ProductCard key={product?.id} product={product} />
        )}
      </div>
      <div className="flex justify-center pt-[60px] pb-[110px]">
        <button className="bg-[#000] text-[#FFF] text-description px-[20px] py-[12px]">
          View more
        </button>
      </div>
    </div>
  )
}

export default ListProduct