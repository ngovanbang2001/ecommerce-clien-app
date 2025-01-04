import { POSITION } from "@/components/features/client/home/core/types"

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