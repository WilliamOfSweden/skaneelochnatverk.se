import React, { FC, ReactNode } from 'react'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../styles/theme'
import CssBaseline from '@material-ui/core/CssBaseline'


interface Props {

    children: ReactNode       

}


const Layout: FC<Props> = ({ children }) => {

    return (

        <ThemeProvider theme={ theme }>

            <CssBaseline />
        
            <main>

                { children }
                
            </main>

        </ThemeProvider>
    
    )

}


export default Layout
