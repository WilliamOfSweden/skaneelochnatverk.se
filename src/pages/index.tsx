import React, { FC } from 'react'
import { PageProps } from 'gatsby'
import Layout from '../components/layout/'
import Masthead from '../components/indexPage/masthead/'
import TrustedBySection from '../components/indexPage/trustedBySection/'


const IndexPage: FC<PageProps> = () => {
    
    return (
    
        <Layout>

            <Masthead />

            <TrustedBySection />
            
        </Layout>

    )

}


export default IndexPage
