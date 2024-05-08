import Footer from "@/components/basic/footer"
import Header from "@/components/basic/header"
import type { Metadata } from 'next'

// These styles apply to every route in the application
import '../styles/globals.css'
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
        <Header />
        <Suspense fallback={<Loading />}>
          {children}
          <ToastContainer />
        </Suspense>
        <Footer />
      </body>
    </html>
  )
}
