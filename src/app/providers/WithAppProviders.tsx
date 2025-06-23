import React, { FC } from 'react'
import { BrowserRouter } from 'react-router'

interface I {
  children: React.ReactNode
}

export const WithAppProviders: FC<I> = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>
}
