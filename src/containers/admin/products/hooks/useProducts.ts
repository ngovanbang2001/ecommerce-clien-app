import { DEFAULT_PAGING_RESPONSE } from "@/utils/constants";
import { PagingResponse } from "@/utils/types";
import { Product } from "@/utils/types/admin/product";
import { useState } from "react";
import { DefaultFilter } from "../configs/constants";
import { ProductQuery } from "../configs/types";

const useProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product>()
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [filter, setFilter] = useState<ProductQuery>(DefaultFilter)
  const [paging, setPaging] = useState<PagingResponse>(DEFAULT_PAGING_RESPONSE)

  const handleOpenDialog = (product?: Product) => {
    if (product) setSelectedProduct(product)
    setIsOpen(true);
  }

  const handleCloseDialog = () => {
    setIsOpen(false);
  }

  return {
    isOpen,
    filter,
    selectedProduct,
    handleOpenDialog,
    handleCloseDialog
  }
}

export default useProducts