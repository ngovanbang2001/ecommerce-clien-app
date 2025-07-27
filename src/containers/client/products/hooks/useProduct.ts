import { Filter, Product } from "@/utils/types"
import { useEffect, useState } from "react"
import { DefaultFilter } from "../configs/constants"
import { toast } from "react-toastify"
import useStateGlobal from "@/hooks/useStateGlobal"

const useProduct = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [filter, setFilter ] = useState<Filter>(DefaultFilter)
  const { setLoading } = useStateGlobal()

  const handleGetProductList = () => {
    setLoading(true)
    try {
      setProducts()
    } catch (error) {
      toast.error(error)
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
