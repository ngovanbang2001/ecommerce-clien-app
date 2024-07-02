import { POSITION } from "@/components/features/home/core/types"

export type BannerImage = {
  id: number
  url: string
  position: POSITION,
  alt: string
  headText: string
  descriptionText: string
}

export type CollectionData = {
  id: number
  url: string
  alt: string
  title: string
}

export type Product = {
  id: number
  name: string
  description: string
  SKU: string
  quantity: number
  categoryId: number
  images: ProductImage[]
  price: number
}

export type ProductImage = {
  id: number
  url: string
}
