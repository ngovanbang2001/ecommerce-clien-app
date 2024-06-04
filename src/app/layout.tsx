import Footer from "@/components/common/layout/footer"
import Header from "@/components/common/layout/header"
import type { Metadata } from 'next'

import './globals.css'
import { Suspense } from "react"
import Loading from "./loading"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata: Metadata = {
  title: 'E-commerce',
  description: '',
}

type MainLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: MainLayoutProps) {
  
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<Loading />}>
          <Header />
          <div className="container mx-auto">
            <div className={`mt-[96px]`}>
              {children}
            </div>
            <Footer />
          </div>
          <ToastContainer />
        </Suspense>
      </body>
    </html>
  )
}
