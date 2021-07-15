
import React, { FC } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { PALETTE } from '../../../styles/theme'
import { useStaticQuery, graphql } from 'gatsby'
import Container from '@material-ui/core/Container'
// import { MDXRenderer } from 'gatsby-plugin-mdx'
// import AnimatedHeart from './animatedHeart'
import { Box, Typography } from '@material-ui/core'


const useStyles = makeStyles( (theme: Theme) =>

    createStyles({

        section: {

            background: PALETTE.bgAlt,
            paddingBottom: theme.spacing(13),
            paddingTop: theme.spacing(13),

        },

        title: {

            position: `absolute`,
            left: 0,
            right: 0,
            top: theme.spacing(13),

        }

    }),

)


const ReferencesSection: FC = () => {

    const { mdx: { frontmatter: { title } } } = useStaticQuery(graphql`
        query referencesSectionQuery {
            mdx(fileAbsolutePath: {regex: "/indexPage\/referencesSection\/index/"}) {
                frontmatter {
                    title
                }
            }
        }
    `)

    const classes = useStyles()

    return (

        <section className={ classes.section }>

            <Container>

                <Box
                    position='relative'
                >

                    {/* <AnimatedHeart /> */}

                    <Typography className={ classes.title } align='center' variant='h3' component='h2'>
                    
                        { title }

                    </Typography>

                </Box>
                
            </Container>

        </section>
    
    )

}


export default ReferencesSection
