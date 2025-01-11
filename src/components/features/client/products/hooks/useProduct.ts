import { Filter } from "@/utils/types"
import { useEffect, useState } from "react"
import { DefaultFilter } from "../configs/constants"
import { toast } from "react-toastify"
import useStateGlobal from "@/hooks/useStateGlobal"
import { Product } from "@/utils/types/client/product"

const useProduct = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [filter, setFilter ] = useState<Filter>(DefaultFilter)
  const { setLoading } = useStateGlobal()

  const handleGetProductList = () => {
    setLoading(true)
    try {
      // setProducts()
    } catch (error: any) {
      toast.error(error?.message || "");
    }
    setLoading(false)
  }
  useEffect(() => {
    handleGetProductList()
  }, [JSON.stringify(filter)])
  return {
    products
  }
}

export default useProduct
