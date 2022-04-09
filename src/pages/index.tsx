import React, { Fragment } from 'react'

import { AnimatedModal, ContactForm, SEO } from '../components/shared/'
import Layout from '../components/layout/'
import {
  AnimatedLowerDivider,
  AnimatedMiddleDivider,
  AnimatedUpperDivider,
  ContactSection,
  CTASection,
  EnviromentSection,
  Masthead,
  ReferencesSection,
  ServicesSection,
  TrustedBySection,
  USPSection,
} from '../components/indexPageComponents/'

const IndexPage = () => (
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
      <ReferencesSection />
      <USPSection />
      <ContactSection />
      <AnimatedModal>
        <ContactForm />
      </AnimatedModal>
      <ContactForm hidden />
    </Layout>
  </Fragment>
)

export default IndexPage
