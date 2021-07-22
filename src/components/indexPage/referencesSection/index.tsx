
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
// import Flex from './css'
// import MobileGrid from './mobileGrid'

import styled from 'styled-components'
import SwipeIcon from '../../illustrations/icons/swipeIcon'


const StyledBox = styled(Box)`

    

    /* background: red; */
    /* overflowX: scroll; */
    
    &::-webkit-scrollbar {
        width: 12px;
    }

    &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
    }

`


const useStyles = makeStyles( (theme: Theme) =>

    createStyles({

        box: {

            overflowX: `auto`,
            overflowY: `hidden`,            

            '&::-webkit-scrollbar': {

                height: `6px`,

            },
        
            '&::-webkit-scrollbar-track': {

                background: `${ PALETTE.accentColor1 }22`,
                borderRadius: `10px`,
                
            },
        
            '&::-webkit-scrollbar-thumb': {

                background: `${ PALETTE.accentColor1 }44`,
                borderRadius: `10px`,
                '-webkit-box-shadow': `inset 0 0 6px ${ PALETTE.accentColor1 }`, 
            
            },


        },

        grid: {

            overflowX: `hidden`,
            paddingBottom: theme.spacing(6),


            [theme.breakpoints.up('xs')]: {

                width: `400vw`,

            },

            [theme.breakpoints.up('sm')]: {

                width: `200vw`,

            },
            
            [theme.breakpoints.up('lg')]: {

                width: `100%`,

            },
        },

        mobileOnly: {

            [theme.breakpoints.up('lg')]: {

                display: `none`,

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
            paddingBottom: theme.spacing(3),
            paddingTop: theme.spacing(7),

            [theme.breakpoints.up('md')]: {

                // paddingBottom: theme.spacing(14),

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

                <Box
                    className={ classes.box }
                >

                    <Grid className={ classes.grid } container spacing={ 5 }>

                        {

                            edges.map((edge: EdgeProps) => {

                                const { node: { frontmatter: { key, quotee }, body } } = edge

                                return (

                                    <Grid item xs={ 3 } lg={ 6 } key={ key.toString() }>

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

                </Box>

                <Box className={ classes.mobileOnly  } display='flex' justifyContent='center'>

                    <SwipeIcon />

                </Box>

            </Container>

        </section>
    
    )

}


export default ReferencesSection
