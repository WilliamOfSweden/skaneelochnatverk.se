import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { useStaticQuery, graphql } from 'gatsby'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      paddingBottom: theme.spacing(10),
      paddingTop: theme.spacing(6),
    },
  })
)

const TrustedBySection = () => {
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
    query trustedBySectionQuery {
      graphCmsPageSection(title: { eq: "Index Page - Trusted-by-section" }) {
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
    <Container className={classes.container} maxWidth='md'>
      <Typography
        align='center'
        color='textSecondary'
        component='p'
        variant='h6'
      >
        {heading}
      </Typography>
      <Box display='flex' justifyContent='space-between' marginTop={4}>
        <MDXRenderer>{body}</MDXRenderer>
      </Box>
    </Container>
  )
}

export default TrustedBySection
