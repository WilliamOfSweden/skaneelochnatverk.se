
import React, { FC, Fragment, ReactNode } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { PALETTE } from '../../../styles/theme'
import Box from '@material-ui/core/Box'
import Carousel from 'react-material-ui-carousel'
import FormatQuoteIcon from '@material-ui/icons/FormatQuote'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Typography from '@material-ui/core/Typography'
import SwipeIcon from '../../illustrations/icons/swipeIcon'


const useStyles = makeStyles( (theme: Theme) =>

    createStyles({

        mobileOnly: {

            [theme.breakpoints.up('sm')]: {

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


interface Props {

    edges: any

}


const MobileCarousel: FC<Props> = ({ edges }) => {

    const classes = useStyles()

    const activeIndicatorIconButtonProps = { style: { opacity: 0.8, } }

    const indicatorIconButtonProps = {
        style: {
            color: `${ PALETTE.accentColor1 }`,
            marginTop: `1rem`,
            opacity: 0.25
        } 
    }

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

        <Fragment>

            <Box className={ classes.mobileOnly }>

                <Box display='flex' justifyContent='flex-end' mb={ 1 }>
                                    
                    <FormatQuoteIcon className={ classes.quoteIcon } />
                    
                </Box>

                <Carousel
                    activeIndicatorIconButtonProps={ activeIndicatorIconButtonProps }	
                    animation='slide'
                    indicatorIconButtonProps={ indicatorIconButtonProps }
                    navButtonsAlwaysInvisible
                    strictIndexing={ false }
                >

                    {

                        edges.map((edge: EdgeProps) => {

                            const { node: { frontmatter: { key, quotee }, body } } = edge

                            return (

                                <Box key={ key.toString() }>

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

                                </Box>

                            )

                        })

                    }

                </Carousel>

                <SwipeIcon />

            </Box>

        </Fragment>
    
    )

}


export default MobileCarousel
