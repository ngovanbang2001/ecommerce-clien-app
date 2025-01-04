'use client'

import { FC } from "react";
import Image from "next/image"
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { Product } from "@/utils/types/client/product";

type Props = {
  product: Product
}

const ProductCard: FC<Props> = ({ product }) => {
  const { name, imageUrl, price } = product

  return (
    <div className="relative group cursor-pointer flex flex-col ease-in-out duration-300">
      <div className="relative">
        <Image className="!relative ease-in-out group-hover:hidden duration-300" src={imageUrl} alt="" layout='fill' objectFit='cover' />
        <Image className="!relative hidden group-hover:block  ease-in-out duration-300" src={imageUrl} alt="" layout='fill' objectFit='cover' />
        <div className="absolute justify-center gap-[8px] bottom-[-20px] hidden group-hover:flex w-full group-hover:bottom-[20px] ease-in-out duration-500">
          <div className="p-2 rounded-full bg-[#000]"><CiShoppingCart color="#FFF"/></div>
          <div className="p-2 rounded-full bg-[#000]"><CiHeart color="#FFF"/></div>
          <div className="p-2 rounded-full bg-[#000]"><CiSearch color="#FFF"/></div>
        </div>
      </div>
      <div className={`gap-[8px] flex flex-col pt-[16px]`}>
        <h1 className="text-product-title">
          {name}
        </h1>
        <p className="text-price">
          {`${price} $`}
        </p>
      </div>
    </div>
  )
}

export default ProductCard