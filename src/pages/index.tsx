import React, { FC } from 'react'
import { PageProps } from 'gatsby'
import Layout from '../components/layout/'
import Masthead from '../components/indexPage/masthead/'
import TrustedBySection from '../components/indexPage/trustedBySection/'
import AnimatedUpperDivider from '../components/indexPage/animatedUpperDivider'
import AnimatedMiddleDivider from '../components/indexPage/animatedMiddleDivider'
import AnimatedLowerDivider from '../components/indexPage/animatedLowerDivider'


const IndexPage: FC<PageProps> = () => {
    
    return (
    
        <Layout>

            <Masthead />

            <TrustedBySection />

            <AnimatedUpperDivider />

            <AnimatedMiddleDivider />

            <AnimatedLowerDivider />
            
        </Layout>

    )

}


export default IndexPage
