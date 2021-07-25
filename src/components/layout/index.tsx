import React, { FC, ReactNode } from 'react'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../styles/theme'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MDXProvider } from '@mdx-js/react'
import MDXProviderComponentsObject from './mdxProviderComponents/'
import Header from './header'
import Footer from './footer'


interface Props {

    children: ReactNode       

}


const Layout: FC<Props> = ({ children }) => {

    return (

        <ThemeProvider theme={ theme }>

            <CssBaseline />

            <Header />
        
            <MDXProvider components={ MDXProviderComponentsObject }>

                <main>

                    { children }

                </main>

            </MDXProvider>

            <Footer />

        </ThemeProvider>
    
    )

}


export default Layout
