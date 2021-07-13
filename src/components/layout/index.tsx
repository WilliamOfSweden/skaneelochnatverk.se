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

const MDXh1: FC<Props> = ({ children }) => <Typography variant='h1'>{ children }</Typography>


const MDXh2: FC<Props> = ({ children }) => <Typography variant='h2'>{ children }</Typography>


const MDXh3: FC<Props> = ({ children }) => <Typography variant='h3'>{ children }</Typography>


const MDXh4: FC<Props> = ({ children }) => <Typography variant='h4'>{ children }</Typography>


const MDXparagraph: FC<Props> = ({ children }) => <Typography component='p' variant='body1'>{ children }</Typography>


const Layout: FC<Props> = ({ children }) => {

    return (

        <ThemeProvider theme={ theme }>

            <CssBaseline />

            <Header />
        
            <MDXProvider
                components={{
                    h1: MDXh1,
                    h2: MDXh2,
                    h3: MDXh3,
                    h4: MDXh4,
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
