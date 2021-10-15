import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Slide from '@material-ui/core/Slide'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import AppBar from '@material-ui/core/AppBar'
import Container from '@material-ui/core/Container'
import Toolbar from '@material-ui/core/Toolbar'
import Box from '@material-ui/core/Box'

import ScrollAnimation from './scrollAnimation'
import Logo from '../../illustrations/logo'
import DesktopNav from './desktopNav'
import MobileNavToggler from './mobileNavToggler'
import MobileNav from './MobileNav'

const Header = () => {
  const {
    site: {
      siteMetadata: { navLinks },
    },
  } = useStaticQuery(graphql`
    query SiteMetaData {
      site {
        siteMetadata {
          navLinks {
            name
            link
            teleLink
          }
        }
      }
    }
  `)

  return (
    <ScrollAnimation>
      <Slide
        appear={false}
        direction='down'
        in={!useScrollTrigger({ threshold: 0 })}
      >
        <AppBar>
          <Container>
            <Toolbar disableGutters>
              <Logo />
              <Box flexGrow={1} display='flex' alignItems='center' px={5} />
              <DesktopNav navLinks={navLinks} />
              <MobileNavToggler />
              <MobileNav navLinks={navLinks} />
            </Toolbar>
          </Container>
        </AppBar>
      </Slide>
    </ScrollAnimation>
  )
}

export default Header
