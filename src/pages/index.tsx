import React, { FC } from 'react'
import { PageProps } from 'gatsby'
import Layout from '../components/layout/'
import Masthead from '../components/indexPage/masthead/'
import TrustedBySection from '../components/indexPage/trustedBySection/'
import AnimatedUpperDivider from '../components/indexPage/animatedUpperDivider'
import AnimatedMiddleDivider from '../components/indexPage/animatedMiddleDivider'
import AnimatedLowerDivider from '../components/indexPage/animatedLowerDivider'
import CTASection from '../components/indexPage/ctaSection/'
import ServicesSection from '../components/indexPage/servicesSection/'


const IndexPage: FC<PageProps> = () => {
    
    return (
    
        <Layout>

            <Masthead />

            <TrustedBySection />

            <AnimatedUpperDivider />

            <CTASection />

            <AnimatedMiddleDivider />

            <ServicesSection />

            <AnimatedLowerDivider />
            
        </Layout>

    )

}


export default IndexPage
