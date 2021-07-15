import { Container, Divider } from '@material-ui/core'
import React, { FC } from 'react'


const Footer: FC = () => {

    const year = new Date().getFullYear()
    
    return (
    
        <footer style={{ height: `200px`, backgroundColor: `#021c3e`,}}>

            <Container>
            <p style={{color: `#fff`, fontSize: `1rem`, marginTop: 0, textAlign: `center` }}>

                © Skåne El &amp; Nätverk AB { year }. Alla rättigheter förbehållna.

            </p>

            <Divider style={{ background: `#666`}} />

            <p>hej</p>

            </Container>
        </footer>
    
    )

}


export default Footer
