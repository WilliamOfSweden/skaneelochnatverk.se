import React, { FC, ReactNode } from 'react'


interface Props {

    children: ReactNode       

}


const Layout: FC<Props> = ({ children }) => {

    return (
    
        <main>

            { children }
            
        </main>
    
    )

}


export default Layout
