import { Query } from "@/utils/types";

export enum ProductSortBy {
  Name = 'Name',
  CreatedAt = 'CreatedAt'
}

export interface ProductQuery extends Query {
  sortColumnName: ProductSortBy
}