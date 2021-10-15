import React, { ReactNode } from 'react'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MDXProvider } from '@mdx-js/react'
import MDXProviderComponentsObject from './mdxProviderComponents/'

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
      <MDXProvider components={MDXProviderComponentsObject}>
        <main>{children}</main>
      </MDXProvider>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
