import React, { ReactNode } from 'react'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import theme from '../../styles/theme'
import Header from './header'
import Footer from './footer'

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
