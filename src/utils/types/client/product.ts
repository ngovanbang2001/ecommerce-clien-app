export type Product = {
  id: number
  name: string
  description: string
  quantity: number
  categoryId: number
  isDeleted?: boolean
  imageUrl: string
  price: number
  discount?: number
}