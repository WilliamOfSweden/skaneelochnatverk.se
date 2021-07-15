import React, { FC, ReactNode } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { useStaticQuery, graphql } from 'gatsby'
import { PALETTE } from '../../../styles/theme'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Button from '@material-ui/core/Button'
import { StaticImage } from 'gatsby-plugin-image'


const useStyles = makeStyles( (theme: Theme) =>

    createStyles({

        btn: {

            marginLeft: `auto`,
            marginRight: `auto`,

            [theme.breakpoints.up('md')]: {

                marginLeft: 0,

            },

        },
        
        heroSection: {

            background: PALETTE.bgAlt,
            paddingBottom: theme.spacing(5),
            paddingTop: theme.spacing(13),

            [theme.breakpoints.up('lg')]: {

                paddingBottom: theme.spacing(7),
                paddingTop: theme.spacing(7),

            },

        },

        mainHeading: {

            [theme.breakpoints.up('md')]: {

                textAlign: `left`,

            },

        },

        paragraph: {

            [theme.breakpoints.up('md')]: {

                textAlign: `left !important`,

            },

        },

    }),

)


const MDXparagraph: FC<{children: ReactNode}> = ({ children }) => {

    const classes = useStyles()

    return (
    
        <Typography className={ classes.paragraph } component='p' paragraph variant='body1'>
            
            { children }
            
        </Typography>
    
    )

}


const Masthead: FC = () => {

    const { mdx: { body, frontmatter: { buttonText, title } } } = useStaticQuery(graphql`
        query mastheadQuery {
            mdx(fileAbsolutePath: {regex: "/indexPage\/masthead\/index/"}) {
                frontmatter {
                    buttonText
                    title
                }
                body
            }
        }
    `)

    const classes = useStyles()

    return (

        <section className={ classes.heroSection } id='masthead'>

            <Container>

                <Grid container>

                    <Grid
                        item
                        container
                        alignContent={ 'center' }
                        justifyContent='center'
                        xs={ 12 }
                        md={ 7 }
                        lg={ 6 }
                    >

                        {/* <Typography align='center' className={ classes.mainHeading } component='h1' variant='h1'>

                            { title }

                        </Typography> */}

                        <Typography align='center' component='div' variant='body1'>

                            <MDXProvider
                                components={{
                                    p: MDXparagraph,
                                }}
                            >

                                <MDXRenderer>
                                    
                                    { body }
                                    
                                </MDXRenderer>

                            </MDXProvider>

                        </Typography>

                        <Button
                            className={ classes.btn }
                            color='primary'
                            size='large'
                            variant='contained'
                        >

                            { buttonText }
                            
                        </Button>

                    </Grid>

                    <Grid item xs={ 12 } md={ 5 } lg={ 6 }>

                        <StaticImage
                            src='../../../images/light-bulb.png'
                            alt='Light bulb standing on the floor, turned on and connected to a wall socket.'
                            loading='eager'
                            formats={ ['auto', 'webp', 'avif'] }
                            placeholder='none'
                            layout='fullWidth'
                        />

                    </Grid>

                </Grid>

            </Container>

        </section>

    )

}


export default Masthead
