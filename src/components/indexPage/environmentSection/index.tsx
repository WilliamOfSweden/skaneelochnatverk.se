import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { useStaticQuery, graphql } from 'gatsby'
import Container from '@material-ui/core/Container'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Typography from '@material-ui/core/Typography'

import PlantIcon from '../../illustrations/icons/plantIcon'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      paddingBottom: theme.spacing(7),
      paddingTop: theme.spacing(13),
    },
  })
)

const EnviromentSection = () => {
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
    query environmentSectionQuery {
      graphCmsPageSection(title: { eq: "Index Page - Environment-section" }) {
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
    <Container className={classes.container} component='section' maxWidth='sm'>
      <PlantIcon />
      <Typography align='center' variant='h2'>
        {heading}
      </Typography>
      <MDXRenderer>{body}</MDXRenderer>
    </Container>
  )
}

export default EnviromentSection
