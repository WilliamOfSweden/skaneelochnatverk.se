import React, { FC } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider'
import Box from '@material-ui/core/Box'


const useStyles = makeStyles( (theme: Theme) =>

    createStyles({

        

    }),

)

const Footer: FC = () => {

    const year = new Date().getFullYear()
    
    return (
    
        <Box
            bgcolor='#021c3e'
            component='footer'
            pb={ 2 }
        >

            <Container>

                <Divider style={{ background: `#4d6077`}} />

                <p style={{color: `#fff`, fontSize: `1rem`, marginTop: `2rem`, textAlign: `center`, }}>

                    © Skåne El &amp; Nätverk AB { year }. Alla rättigheter förbehållna.

                </p>

            </Container>

        </Box>
    
    )

}


export default Footer
