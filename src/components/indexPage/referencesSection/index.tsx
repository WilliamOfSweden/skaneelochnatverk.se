import React, { FC, ReactNode } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { PALETTE } from '../../../styles/theme'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, Layout  } from 'gatsby-plugin-image'
import { SourceProps } from 'gatsby-plugin-image/dist/src/components/picture'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import AnimatedHeart from './animatedHeart'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import FormatQuoteIcon from '@material-ui/icons/FormatQuote'
// import { MDXProvider } from '@mdx-js/react'
// import { MDXRenderer } from 'gatsby-plugin-mdx'
import SwipeIcon from '../../illustrations/icons/swipeIcon'


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

        },

    }),

)


const ReferencesSection: FC = () => {

    const { allGraphCmsReferencePost: { edges } } = useStaticQuery(graphql`
        query referencesSectionQuery {
            allGraphCmsReferencePost {
                edges {
                    node {
                        name
                        quote
                        image {
                            gatsbyImageData(width: 50, height: 50, placeholder: NONE)
                        }
                        imageAlt
                    }
                }
            }
        }
    `)

    const classes = useStyles()

    interface EdgeProps {

        node: {

            name: string

            quote: string

            image: {

                gatsbyImageData: {

                    images: {

                        sources?: SourceProps[]

                    }

                    layout: Layout

                    width: number

                    height: number

                }

            }

            imageAlt: string
            

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
                        
                            Våra kunders vitsord

                        </Typography>

                    </Box>

                </Box>

                <Box
                    className={ classes.box }
                >

                    <Grid className={ classes.grid } container spacing={ 5 }>

                        {

                            edges.map((edge: EdgeProps) => {

                                const { node: { name, quote, image: { gatsbyImageData }, imageAlt } } = edge

                                return (

                                    <Grid item xs={ 3 } lg={ 6 } key={ name }>

                                        <Box display='flex' justifyContent='flex-end' mb={ 1 }>
                                            
                                            <FormatQuoteIcon className={ classes.quoteIcon } />
                                            
                                        </Box>

                                        <Typography
                                            align='center'
                                            gutterBottom
                                            component='p'
                                            display='block'
                                        >
                                                
                                            { quote }

                                        </Typography>

                                        <Box 
                                            alignItems='center'
                                            display='flex'
                                            justifyContent='center'
                                            mt={ 2 }
                                        >

                                            <Box
                                                borderRadius='50%'
                                                height='50px'
                                                overflow='hidden'
                                                mr={ 2 }
                                                width='50px'
                                            >

                                                <GatsbyImage
                                                    alt={ imageAlt }
                                                    image={ gatsbyImageData }
                                                />

                                            </Box>

                                            <Typography align='center' style={{ fontSize: `1.33rem` }}>{ name }</Typography>

                                        </Box>

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