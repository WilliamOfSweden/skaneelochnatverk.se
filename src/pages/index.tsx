import React, { FC } from 'react'
import { PageProps } from 'gatsby'
import Layout from '../components/layout/'
import Masthead from '../components/indexPage/masthead/'


const IndexPage: FC<PageProps> = () => {
    
    return (
    
        <Layout>

            <Masthead />
            
        </Layout>

    )

}


export default IndexPage
