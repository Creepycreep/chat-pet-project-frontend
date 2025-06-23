import { Header } from '../UI/Header/Header.tsx'
import React, { FC } from 'react'
import { Container } from '@mui/material'

interface PropsI {
  children: React.ReactNode
}

export const Layout: FC<PropsI> = ({ children }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  )
}
