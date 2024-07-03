import type { Metadata } from 'next'

import './globals.css'
import { Suspense } from 'react'
import Loading from './loading'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const metadata: Metadata = {
  title: 'E-commerce',
  description: ''
}

type MainLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: MainLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<Loading />}>
          {children}
          <ToastContainer />
        </Suspense>
      </body>
    </html>
  )
}
