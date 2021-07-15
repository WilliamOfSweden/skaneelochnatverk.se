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
import CheckMarkIcon from '../../illustrations/icons/checkMarkIcon'


const useStyles = makeStyles( (theme: Theme) =>

    createStyles({

        btn: {

            [theme.breakpoints.up('sm')]: {

                maxWidth: theme.spacing(25),

            },

        },

        container: {

            backgroundColor: `#d8effb`,
            borderRadius: `15px`,
            paddingBottom: theme.spacing(4),
            paddingTop: theme.spacing(4),

            [theme.breakpoints.up('sm')]: {

                paddingLeft: theme.spacing(6),
                paddingRight: theme.spacing(6),
                // paddingBottom: theme.spacing(6),
                // paddingTop: theme.spacing(6),
                backgroundColor: `#d8effb`,
                
            },

        },

        iconWrapper: {

            minWidth: `0`,
            paddingRight: theme.spacing(2),

        },

        illustrationWrapper: {

            display: `none`,

            [theme.breakpoints.up('sm')]: {

                display: `flex`,
                alignItems: `center`,

            },

        },

        list: {

            flex: 1,

        },

        mobileOnly: {

            [theme.breakpoints.up('sm')]: {

                display: `none`,

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
                width='100%'
                zIndex={ 90 } // KOLLA
                py={ 10 }
                position='relative'
            >

                <Container className={ classes.container }>

                    <Grid container>

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
                    
                                            <ListItemIcon className={ classes.iconWrapper }>
                                            
                                                <CheckMarkIcon />
                                            
                                            </ListItemIcon>
                                            
                                            <ListItemText>

                                                First item

                                            </ListItemText>
                                    
                                        </ListItem>

                                        <ListItem>
                    
                                        <ListItemIcon className={ classes.iconWrapper }>
                                        
                                            <CheckMarkIcon />
                                            
                                            </ListItemIcon>
                                            
                                            <ListItemText>

                                                Second item

                                            </ListItemText>
                                    
                                        </ListItem>

                                        <ListItem>

                                            <ListItemIcon className={ classes.iconWrapper }>
                                            
                                                <CheckMarkIcon />
                                            
                                            </ListItemIcon>
                                            
                                            <ListItemText>

                                                Third item

                                            </ListItemText>
                                    
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
                                    
                                    Kontakt
                                    
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
