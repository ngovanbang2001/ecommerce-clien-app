import Footer from '@/components/common/layout/footer'
import Header from '@/components/common/layout/header'

import { Suspense } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import Loading from '../loading'


type ClientLayoutProps = {
  children: React.ReactNode
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <Suspense fallback={<Loading />}>
        <Header />
        <div className="container mx-auto">
          <div className={`mt-[96px]`}>{children}</div>
          <Footer />
        </div>
    </Suspense>
  )
}
