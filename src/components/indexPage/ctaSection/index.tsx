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

            display: `inline-flex`,

        },

        container: {

            alignItems: 'center',
            display: 'flex',
            flexDirection: `column`,
            paddingBottom: theme.spacing(3),
            paddingTop: theme.spacing(3),

        }

    }),

)


const CTASection: FC = () => {

    const { graphCmsPageSection: { heading, body: { markdownNode: { childMdx: { body } } }, buttonText } } = useStaticQuery(graphql`
        query ctaSectionQuery {
            graphCmsPageSection(title: {eq: "Index Page - CTA-section"}) {
                heading
                body  {
                    markdownNode {
                        childMdx {
                            body
                        }
                    }
                }
                buttonText
            }
        }
    `)

    const classes = useStyles()

    return (

        <Container className={ classes.container } component='section' id='cta-section' maxWidth='sm'>

            <Typography align='center' variant='h2'>

                { heading }

            </Typography>

            <MDXRenderer>
                        
                { body }

            </MDXRenderer>

            <Button 
                className={ classes.btn }
                color='secondary'
                component='a'
                href='tel:+460701488148'
                size='large'
                variant='contained'
            >

                { buttonText }
                
            </Button>

        </Container>
            
    
    )

}


export default CTASection
