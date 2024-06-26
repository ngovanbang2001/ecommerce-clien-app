'use client'

import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import React, { ReactNode } from 'react'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const client = new QueryClient()

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  )
}

export default Providers
