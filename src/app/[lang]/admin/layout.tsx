import { Suspense } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import Loading from '../../loading'
import Navbar from '@/components/features/admin/navbar'

type AdminLayoutProps = {
  children: React.ReactNode
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <Suspense fallback={<Loading />}>
        <div className="mx-auto md:flex gap-[24px]">
          <Navbar />
          <div className="px-4 md:container mx-auto">
            <div>{children}</div>
          </div>
        </div>
    </Suspense>
  )
}
