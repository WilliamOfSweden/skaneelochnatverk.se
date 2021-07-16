
import React, { FC, ReactNode } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { PALETTE } from '../../../styles/theme'
import { useStaticQuery, graphql } from 'gatsby'
import Container from '@material-ui/core/Container'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import AnimatedHeart from './animatedHeart'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import FormatQuoteIcon from '@material-ui/icons/FormatQuote'
import { MDXProvider } from '@mdx-js/react'


const useStyles = makeStyles( (theme: Theme) =>

    createStyles({

        quoteIcon: {

            fill: PALETTE.accentColor1,
            fontSize: 50,
            opacity: 0.6,
            transform:` rotate(180deg)`,

        },

        section: {

            background: PALETTE.bgAlt,
            paddingBottom: theme.spacing(7),
            paddingTop: theme.spacing(7),

        },

        quote: {

            fontSize: `1.2rem`,

        },

        quotee: {

            fontSize: `1.5rem`,

        }

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

                <Grid container spacing={ 5 }>

                    {

                        edges.map((edge: EdgeProps) => {

                            const { node: { frontmatter: { key, quotee }, body } } = edge

                            return (

                                <Grid item key={ key.toString() } xs={ 12 } md={ 6 }>

                                    <Box display='flex' justifyContent='flex-end' mb={ 3 }>
                                        
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
                
            </Container>

        </section>
    
    )

}


export default ReferencesSection
