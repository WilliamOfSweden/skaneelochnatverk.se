import React, { ReactNode } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { useStaticQuery, graphql } from 'gatsby'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      paddingBottom: theme.spacing(3),
      paddingTop: theme.spacing(3),
      position: `relative`,
    },
    h2: {
      paddingBottom: theme.spacing(5),
      paddingTop: theme.spacing(5),
    },
  })
)

interface MDXComponentProps {
  children: ReactNode
}

const li = ({ children }: MDXComponentProps) => (
  <Grid item xs={12} sm={6}>
    {children}
  </Grid>
)

const ul = ({ children }: MDXComponentProps) => (
  <Grid container spacing={10}>
    {children}
  </Grid>
)

const ServicesSection = () => {
  const {
    graphCmsPageSection: {
      heading,
      body: {
        markdownNode: {
          childMdx: { body },
        },
      },
    },
  } = useStaticQuery(graphql`
    query servicesSectionQuery {
      graphCmsPageSection(title: { eq: "Index Page - Services-section" }) {
        heading
        body {
          markdownNode {
            childMdx {
              body
            }
          }
        }
      }
    }
  `)

  const classes = useStyles()

  return (
    <Container
      className={classes.container}
      component='section'
      id='services-section'
    >
      <Typography align='center' className={classes.h2} variant='h2'>
        {heading}
      </Typography>
      <MDXProvider components={{ li, ul }}>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
    </Container>
  )
}

export default ServicesSection
