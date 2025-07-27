import Products from '@/containers/admin/products'
import { getDictionary } from '@/dictionaries'

const ProductsPage = async ({ params }: { params: Promise<{ lang: string }> }) => {
  const { lang } = await params
  const dict = await getDictionary(lang)
  
  return <Products dict={dict} />
}

export default ProductsPage
