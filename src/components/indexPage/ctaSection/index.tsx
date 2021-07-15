import React, { FC } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { useStaticQuery, graphql } from 'gatsby'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Button from '@material-ui/core/Button'


const useStyles = makeStyles( (theme: Theme) =>

    createStyles({

        btn: {

            display: `block`,
            margin: `0 auto`,

        },

        container: {

            paddingBottom: theme.spacing(3),
            paddingTop: theme.spacing(3),

        }

    }),

)


const CTASection: FC = () => {

    const { mdx: { body, frontmatter: { buttonText, title } } } = useStaticQuery(graphql`
        query ctaSectionQuery {
            mdx(fileAbsolutePath: {regex: "/indexPage\/ctaSection\/index/"}) {
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

        <Container className={ classes.container } component='section' maxWidth='sm'>

            <Typography align='center' variant='h2'>

                { title }

            </Typography>

            <MDXRenderer>
                        
                { body }

            </MDXRenderer>

            <Button 
                className={ classes.btn }
                color='secondary'
                // onClick={ () => scrollTo( `#contact-section` ) }
                size='large'
                variant='contained'
            >

                { buttonText }
                
            </Button>

        </Container>
            
    
    )

}


export default CTASection
