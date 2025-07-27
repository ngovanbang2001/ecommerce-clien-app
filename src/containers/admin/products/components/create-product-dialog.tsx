import CommonDialog from '@/components/dialog/common-dialog'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'

type Props = {
  isOpen: boolean
  handleCloseDialog: () => void
}

const schema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
  price: yup.number().required(),
  quantity: yup.number().required(),
  categoryId: yup.number().required()
})

interface IFormInputs {
  name: string
  description: string
  price: number
  quantity: number
  categoryId: number
}

const CreateProductDialog = ({ isOpen, handleCloseDialog }: Props) => {
  const { handleSubmit, control } = useForm<IFormInputs>({
    resolver: yupResolver(schema)
  })

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    try {
    } catch (error) {
      console.log({ error })
    }
  }

  return (
    <CommonDialog open={isOpen} title="Create Product" handleClose={handleCloseDialog}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="gap-2 flex flex-col">
          <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
            Product Name
          </label>
          <div className="mt-1">
            <Controller
              name="name"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <input
                  id="name"
                  type="text"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  {...field}
                />
              )}
            />
          </div>
        </div>
        <div className="gap-2 flex flex-col mt-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <div className="mt-1">
            <Controller
              name="description"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <textarea
                  id="description"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  {...field}
                />
              )}
            />
          </div>
        </div>
        <div className="gap-2 flex flex-col mt-4">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <div className="mt-1">
            <Controller
              name="categoryId"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <select
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  {...field}
                >
                  <option >
                    1
                  </option>
                  <option>
                    2
                  </option>
                </select>
              )}
            />
          </div>
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Create Product
          </button>
        </div>
      </form>
    </CommonDialog>
  )
}

export default CreateProductDialog
