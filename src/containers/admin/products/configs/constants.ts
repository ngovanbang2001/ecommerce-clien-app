import { Query } from "@/utils/types";
import { ProductQuery, ProductSortBy } from "./types";
import { OrderBy } from "@/utils/enums";

export const HEADER_TABLE = [
  {
    title: 'product_name',
    sortBy: ProductSortBy.Name
  },
  {
    title: 'color'
  },
  {
    title: 'category'
  },
  {
    title: 'price'
  },
  {
    title: 'created_at'
  },
  {
    title: 'action'
  },
]

export const DefaultFilter: ProductQuery = {
  currentPage: 1,
  pageSize: 15,
  sortColumnDirection: OrderBy.DESC,
  sortColumnName: ProductSortBy.CreatedAt,
}