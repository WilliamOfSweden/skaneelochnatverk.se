import React, { FC, ReactNode } from 'react'
import Typography from '@material-ui/core/Typography'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../styles/theme'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MDXProvider } from '@mdx-js/react'
import Header from './header'


interface Props {

    children: ReactNode       

}


const MDXh2: FC<Props> = ({ children }) => <Typography variant='h2'>{ children }</Typography>


const MDXh3: FC<Props> = ({ children }) => <Typography align='center' component='h3' variant='h4'>{ children }</Typography>


const MDXparagraph: FC<Props> = ({ children }) => <Typography align='center' component='p' paragraph variant='body1'>{ children }</Typography>


const Layout: FC<Props> = ({ children }) => {

    return (

        <ThemeProvider theme={ theme }>

            <CssBaseline />

            <Header />
        
            <MDXProvider
                components={{
                    h2: MDXh2,
                    h3: MDXh3,
                    p: MDXparagraph,
                }}
            >

                <main>

                    { children }

                </main>

            </MDXProvider>

        </ThemeProvider>
    
    )

}


export default Layout
