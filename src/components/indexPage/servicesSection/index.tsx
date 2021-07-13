import React, { FC } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { useStaticQuery, graphql } from 'gatsby'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { MDXRenderer } from 'gatsby-plugin-mdx'


const useStyles = makeStyles( (theme: Theme) =>

    createStyles({

        container: {

            paddingBottom: theme.spacing(3),
            paddingTop: theme.spacing(3),
            position: `relative`,

        },

        h2: {

            paddingBottom: theme.spacing(5),
            paddingTop: theme.spacing(5),

        }

    }),

)


interface EdgeProps {

    node: {

        frontmatter: {

            key: number

        }

        body: any

    }

}


const ServicesSection: FC = () => {

    const { allMdx: { edges }, mdx: { frontmatter: { title } } } = useStaticQuery(graphql`
        query FeaturesSectionQuery {
            allMdx(
                sort: {fields: frontmatter___key}
                filter: {fileAbsolutePath: {regex: "/indexPage\/servicesSection\/servicePosts/"}}
                ) {
                edges {
                    node {
                        frontmatter {
                            key
                        }
                        body
                    }
                }
            }
            mdx(fileAbsolutePath: {regex: "indexPage\/servicesSection\/index.mdx/"}) {
                frontmatter {
                    title
                }
            }
        }
    `)

    const classes = useStyles()

    return (

        <Container className={ classes.container } component='section' id='services-section'>

            <Typography align='center' className={ classes.h2 } variant='h2'>

                { title }

            </Typography>
                
            <Grid container spacing={ 10 }>

                {

                    edges.map((edge: EdgeProps) => {

                        const { body, frontmatter: { key } } = edge.node

                        return (

                            <Grid key={ key.toString() } item xs={ 12 } sm={ 6 } >
                            
                                <MDXRenderer>{ body }</MDXRenderer>
    
                            </Grid>
                            
                        )

                    })

                }

            </Grid>

        </Container>

    )

}


export default ServicesSection
