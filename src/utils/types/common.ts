import { OrderBy } from "../enums"

export type NavbarAdmin = {
  title: string
  icon: React.ReactNode
  path: string
}

export type Router = {
  title: string
  path: string
}

export type Tab = {
  id: number
  title: string
  icon: React.ReactNode
  content:  React.ReactNode
}

export type Filter = {
  pageSize: number
  currentPage: number
  textSearch: string
  sortBy: any
  orderBy: OrderBy
}
