import React, { FC } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import ScrollAnimation from './scrollAnimation'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Slide from '@material-ui/core/Slide'
import AppBar from '@material-ui/core/AppBar'
import Container from '@material-ui/core/Container'
import Toolbar from '@material-ui/core/Toolbar'
import Logo from '../../illustrations/logo'
import Box from '@material-ui/core/Box'
import DesktopNav from './desktopNav'
import MobileNavToggler from './mobileNavToggler'
import MobileNav from './MobileNav'


const useStyles = makeStyles( (theme: Theme) =>

    createStyles({
        
        container: {

            [theme.breakpoints.up('md')]: {

                paddingRight: theme.spacing(1),
                
            },

        },

    }),

)


const Header: FC = () => {

    const { site: { siteMetadata: { navLinks } } } = useStaticQuery(graphql`
        query SiteMetaData {
            site {
                siteMetadata {
                    navLinks {
                        name
                        link
                        button
                    }
                }
            }
        }
    `)

    const classes = useStyles()

    return (

        <ScrollAnimation>

            <Slide appear={ false } direction='down' in={ !useScrollTrigger( { threshold: 0 }) }>

                <AppBar>

                    <Container className={ classes.container }>

                        <Toolbar disableGutters>

                            <Logo />

                            <Box flexGrow={ 1 } display='flex' alignItems='center' px={ 5 } />

                            <DesktopNav navLinks={ navLinks } />

                            <MobileNavToggler />

                            <MobileNav navLinks={ navLinks } />

                        </Toolbar>

                    </Container>

                </AppBar>

            </Slide>

        </ScrollAnimation>

    )

}


export default Header
