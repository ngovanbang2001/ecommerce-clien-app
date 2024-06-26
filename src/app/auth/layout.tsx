'use client'

import { Suspense } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import Loading from '../loading'

type AuthLayoutProps = {
  children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <Suspense fallback={<Loading />}>{children}
    </Suspense>
  )
}
