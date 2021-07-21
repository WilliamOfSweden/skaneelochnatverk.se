
import React, { FC, ReactNode } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { PALETTE } from '../../../styles/theme'
import { useStaticQuery, graphql } from 'gatsby'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import AnimatedHeart from './animatedHeart'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import FormatQuoteIcon from '@material-ui/icons/FormatQuote'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import MobileCarousel from './mobileCarousel'



const useStyles = makeStyles( (theme: Theme) =>

    createStyles({

        desktopOnly: {

            display: `none`,

            [theme.breakpoints.up('sm')]: {

                display: `flex`,

            },

        },

        quote: {

            fontSize: `1.2rem`,

        },

        quotee: {

            fontSize: `1.5rem`,

        },

        quoteIcon: {

            fill: PALETTE.accentColor1,
            fontSize: 50,
            opacity: 0.6,
            transform:` rotate(180deg)`,

        },

        section: {

            background: PALETTE.bgAlt,
            paddingBottom: theme.spacing(2),
            paddingTop: theme.spacing(7),

            [theme.breakpoints.up('md')]: {

                paddingBottom: theme.spacing(7),

            },

        },

    }),

)


interface MDXqProps {

    children: ReactNode       

}


const MDXq: FC<MDXqProps> = ({ children }) => {

    const classes = useStyles()

    return (
    
        <Typography
            align='center'
            className={ classes.quote }
            gutterBottom
            component='p'
        >
            
            <q>
                
                { children }
                
            </q>
            
        </Typography>
        
    )

}


const ReferencesSection: FC = () => {

    const { allMdx: { edges }, mdx: { frontmatter: { title } } } = useStaticQuery(graphql`
        query referencesSectionQuery {
            allMdx(
                sort: {fields: frontmatter___key}
                filter: {fileAbsolutePath: {regex: "/indexPage\/referencesSection\/references/"}}
                ) {
                edges {
                    node {
                        frontmatter {
                            key
                            quotee
                        }
                        body
                    }
                }
            }
            mdx(fileAbsolutePath: {regex: "/indexPage\/referencesSection\/index/"}) {
                frontmatter {
                    title
                }
            }
        }
    `)

    const classes = useStyles()

    interface EdgeProps {

        node: {

            frontmatter: {

                key: number

                quotee: string

            }

            body: string

        }

    }

    return (

        <section className={ classes.section } id='references-section'>

            <Container>

                <Box
                    position='relative'
                    pb={ 5 }
                >

                    <AnimatedHeart />

                    <Box
                        alignItems='center'
                        display='flex'
                        height='100%'
                        justifyContent='center'
                        left={ 0 }
                        pb={ 5 }
                        position='absolute'
                        top={ 0 }
                        width='100%'
                    >

                        <Typography align='center' variant='h3' component='h2'>
                        
                            { title }

                        </Typography>

                    </Box>

                </Box>

                <Grid className={ classes.desktopOnly } container spacing={ 5 }>

                {

                    edges.map((edge: EdgeProps) => {

                        const { node: { frontmatter: { key, quotee }, body } } = edge

                        return (

                            <Grid item xs={ 6 } key={ key.toString() }>

                                <Box display='flex' justifyContent='flex-end' mb={ 1 }>
                                    
                                    <FormatQuoteIcon className={ classes.quoteIcon } />
                                    
                                </Box>

                                <MDXProvider
                                    components={{
                                        p: MDXq,
                                    }}
                                >

                                    <MDXRenderer>

                                        { body }

                                    </MDXRenderer>

                                </MDXProvider>

                                <Typography align='center' className={ classes.quotee }>{ quotee }</Typography>

                            </Grid>

                        )

                    })

                }

                </Grid>

                <MobileCarousel edges={ edges } />

            </Container>

        </section>
    
    )

}


export default ReferencesSection
