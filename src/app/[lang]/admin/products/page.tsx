'use client'

import useDialog from '@/hooks/useDialog'
import Button from '@/components/common/button/button'
import CreateProductDialog from '@/components/features/admin/products/create-product-dialog'
import { AiFillDelete } from 'react-icons/ai'
import { BiSolidMessageSquareEdit } from 'react-icons/bi'
import { IoIosAdd } from 'react-icons/io'

const Products = () => {
  const { isOpen, handleOpenDialog, handleCloseDialog } = useDialog()
  
  return (
    <div className="py-6">
      <div className="justify-end py-4 flex">
        <Button className="flex gap-[12px] items-center" onClick={handleOpenDialog}>
          <IoIosAdd className="text-white" size="14px" />
          Create Product
        </Button>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Apple Watch 5
              </th>
              <td className="px-6 py-4">Red</td>
              <td className="px-6 py-4">Wearables</td>
              <td className="px-6 py-4">$999</td>
              <td className="px-6 py-4 flex gap-2">
                <BiSolidMessageSquareEdit size="20px" />
                <AiFillDelete size="20px" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <CreateProductDialog isOpen={isOpen} handleCloseDialog={handleCloseDialog} />
    </div>
  )
}

export default Products
