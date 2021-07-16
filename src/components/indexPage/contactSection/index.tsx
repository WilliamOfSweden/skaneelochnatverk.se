import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { PALETTE } from '../../../styles/theme'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Button from '@material-ui/core/Button'
import PaperLamp from '../../illustrations/paperLamp'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram';''


const useStyles = makeStyles( (theme: Theme) =>

    createStyles({

        btn: {

            display: `block`,
            marginTop: theme.spacing(2),

            [theme.breakpoints.up('sm')]: {

                width: `initial`,

            },

        },

        container: {

            backgroundColor: PALETTE.bgAlt1,
            borderRadius: `15px`,
            paddingBottom: theme.spacing(4),
            paddingTop: theme.spacing(4),
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),


            [theme.breakpoints.up('sm')]: {

                paddingLeft: theme.spacing(6),
                paddingRight: theme.spacing(6),
                backgroundColor: `#d8effb`,
                
            },

        },

        iconWrapper: {

            alignItems: `center`,
            display: `flex`,

        },

        illustrationWrapper: {

            display: `none`,

            [theme.breakpoints.up('sm')]: {

                display: `flex`,
                alignItems: `center`,

            },

        },

        link: {

            color: theme.palette.text.primary,
            display: `flex`,
            paddingLeft: 0,

        },



        list: {

            flex: 1,

        },

        mobileOnly: {

            [theme.breakpoints.up('sm')]: {

                display: `none`,

            },

        },

        wrapper: {

            [theme.breakpoints.down('sm')]: {

                paddingTop: theme.spacing(5),

            },

        },

    }),

)


const ContactSection = () => {

    const classes = useStyles()
    
    return (
    
        <Box
            component='section'
            position='relative'
            minHeight='100px'
        >

            <Box
                position='absolute'
                top={ 0 }
                right={ 0 }
                bottom={ 0 }
                left={ 0 }
                display='flex'
                flexDirection='column'
            >

                <Box flex={ 1 } />

                <Box flex={ 1 } bgcolor='#021c3e' />
                
            </Box>

            <Box
                display='flex'
                alignItems='center'
                className={ classes.wrapper }
                width='100%'
                zIndex={ 90 } // KOLLA
                py={ 10 }
                position='relative'
            >

                <Container>

                    <Grid container className={ classes.container }>

                        <Grid container alignItems='center' item xs={ 12 } sm={ 8 }>

                            <Box>

                                <Typography variant='h2'>

                                    Lorem ipsum

                                </Typography>

                                <Typography component='p'>

                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione necessitatibus, voluptas.

                                </Typography>

                                <Box
                                    display='flex'
                                >

                                    <List className={ classes.list }>

                                        <ListItem>

                                            <a
                                                className={ classes.link }
                                                href='https://linkedin.com'
                                                rel='rel=”noreferrer noopener”'
                                                target='_blank'
                                            >
                    
                                                <ListItemIcon className={ classes.iconWrapper }>
                                                
                                                    <LinkedInIcon htmlColor={ PALETTE.primary } fontSize='large' />
                                                
                                                </ListItemIcon>
                                                
                                                <ListItemText>

                                                    LinkedIn

                                                </ListItemText>

                                            </a>
                                    
                                        </ListItem>

                                        <ListItem>

                                            <a
                                                className={ classes.link }
                                                href='https://facebook.com'
                                                rel='rel=”noreferrer noopener”'
                                                target='_blank'
                                            >
                    
                                                <ListItemIcon className={ classes.iconWrapper }>
                                            
                                                    <FacebookIcon htmlColor={ PALETTE.primary } fontSize='large' />
                                                
                                                </ListItemIcon>
                                                
                                                <ListItemText>

                                                    Facebook

                                                </ListItemText>

                                            </a>
                                    
                                        </ListItem>

                                        <ListItem>

                                            <a
                                                className={ classes.link }
                                                href='https://instagram.com'
                                                rel='rel=”noreferrer noopener”'
                                                target='_blank'                                              
                                            >

                                                <ListItemIcon className={ classes.iconWrapper }>
                                                
                                                    <InstagramIcon htmlColor={ PALETTE.primary } fontSize='large' />
                                                
                                                </ListItemIcon>
                                                
                                                <ListItemText>

                                                    Instagram

                                                </ListItemText>

                                            </a>
                                    
                                        </ListItem>

                                    </List>

                                    <Box className={ classes.mobileOnly } flex={ 1 } py={ 2 } >

                                        <PaperLamp />

                                    </Box>

                                </Box>

                                <Button
                                    className={ classes.btn }
                                    color='primary'
                                    fullWidth
                                    size='large'
                                    variant='contained'   
                                >
                                    
                                    Skriv till oss
                                    
                                </Button>

                            </Box>

                        </Grid>

                        <Grid className={ classes.illustrationWrapper } item xs={ 12 } sm={ 4 }>

                            <PaperLamp />

                        </Grid>

                    </Grid>

                </Container>

            </Box>
            
        </Box>
    
    )

}


export default ContactSection
