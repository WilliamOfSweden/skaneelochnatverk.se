import React, { FC, Fragment } from 'react'
import { PageProps } from 'gatsby'
import Layout from '../components/layout/'
import Masthead from '../components/indexPage/masthead/'
import TrustedBySection from '../components/indexPage/trustedBySection/'
import AnimatedUpperDivider from '../components/indexPage/animatedUpperDivider'
import AnimatedMiddleDivider from '../components/indexPage/animatedMiddleDivider'
import AnimatedLowerDivider from '../components/indexPage/animatedLowerDivider'
import CTASection from '../components/indexPage/ctaSection/'
import ServicesSection from '../components/indexPage/servicesSection/'
import EnviromentSection from '../components/indexPage/environmentSection/'
// import ReferencesSection from '../components/indexPage/referencesSection/'
import SEO from '../components/seo'
import USPSection from '../components/indexPage/uspSection/'
import ContactSection from '../components/indexPage/contactSection/'
import ModalComponent from '../components/global/animatedModal/'
import ContactForm from '../components/global/contactForm'


const IndexPage: FC<PageProps> = () => {
    
    return (

        <Fragment>

            <SEO />
    
            <Layout>

                <Masthead />

                <TrustedBySection />

                <AnimatedUpperDivider />

                <CTASection />

                <AnimatedMiddleDivider />

                <ServicesSection />

                <AnimatedLowerDivider />

                <EnviromentSection />

                {/* <ReferencesSection /> */}

                <USPSection />

                <ContactSection />

                <ModalComponent>

                    <ContactForm />

                </ModalComponent>

                <ContactForm hidden />
                
            </Layout>
        
        </Fragment>
    )

}


export default IndexPage
