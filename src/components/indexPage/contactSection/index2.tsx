import React, { FC } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import styled from 'styled-components'
import Box from '@material-ui/core/Box'
import { PALETTE } from '../../../styles/theme'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import PaperLamp from '../../illustrations/paperLamp'
import { Button, Typography } from '@material-ui/core'


const useStyles = makeStyles( (theme: Theme) =>

    createStyles({

        container: {

            borderRadius: theme.shape.borderRadius,

        }

    }),

)


const StyledBox = styled(Box)`

    /* background: rgb(83,120,149);
    background: -moz-linear-gradient(180deg, #033270 0%, #1d2739 100%);
    background: -webkit-linear-gradient(180deg, #033270 0%, #1d2739 100%);
    background: linear-gradient(180deg, #033270 0%, #1d2739 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#033270",endColorstr="#1d2739",GradientType=1); */

    background: #021c3e;


`


const StyledBox2 = styled(Box)`

    background: #d8effb;
    /* background: -moz-linear-gradient(90deg, rgba(0,166,255,1) 0%, rgba(193,231,251,1) 100%);
    background: -webkit-linear-gradient(90deg, rgba(0,166,255,1) 0%, rgba(193,231,251,1) 100%);
    background: linear-gradient(90deg, rgba(0,166,255,1) 0%, rgba(193,231,251,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#00a6ff",endColorstr="#c1e7fb",GradientType=1); */
    width: 100%;

`

const ContactSection: FC = () => {

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
                height='100%'
                display='flex'
                flexDirection='column'
            >

                <Box flex={ 1 } />

                <StyledBox flex={ 1 } />
                
            </Box>

            <Box
                display='flex'
                alignItems='center'
                height='100%'
                width='100%'
                zIndex={ 90 }
                py={ 10 }
                position='relative'
            >

                <Container style={{width: `100%`}}>
                    
                    <StyledBox2
                        // bgcolor='#c1e7fb'
                        // height='350px'
                        borderRadius={ 20 }
                        p={ 5 }
                    >

                        <Grid container style={{ width: `100%`}}>

                            <Grid item xs={ 12 } sm={ 8 } md={ 8 } lg={ 8 } style={{width: `100%`, padding: `2rem`}}>

                                <Typography variant='h3' style={{width: `100%`}}>

                                    Lorem ipsum

                                </Typography>

                                <Typography component='p'>

                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione necessitatibus, voluptas debitis omnis odit quaerat!

                                </Typography>

                                <ul>

                                    <li>First item</li>

                                    <li>Second item</li>

                                </ul>

                                <Button variant='contained' color='primary' size='large' >Kontakt</Button>

                            </Grid>

                            <Grid item xs={ 12 } sm={ 4 } md={ 4 } lg={ 4 } style={{width: `100%`, display: `flex`, alignItems: `center`}}>

                                <PaperLamp />

                            </Grid>

                        </Grid>

                    </StyledBox2>
                        
                </Container>

            </Box>
                        
        </Box>
    
    )

}


export default ContactSection
