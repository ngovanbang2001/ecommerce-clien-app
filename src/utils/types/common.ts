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

export type Query = {
    currentPage: number;
    pageSize: number;
    textSearch?: string;
    totalPages?: number;
    sortColumnDirection?: OrderBy;
}
export type PagingResponse = {
    page: number;
    limit: number;
    totalItems: number;
    totalPages: number;
}
