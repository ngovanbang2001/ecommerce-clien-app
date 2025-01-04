import { Filter } from "@/utils/types";
import { ProductSortBy } from "./types";
import { OrderBy } from "@/utils/enums";

export const DefaultFilter: Filter = {
  pageSize: 10,
  currentPage: 1,
  sortBy: ProductSortBy.CreatedAt,
  orderBy: OrderBy.DESC,
  textSearch: ''
}