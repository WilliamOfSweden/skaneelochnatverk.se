import React, { ReactNode } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { useStaticQuery, graphql } from 'gatsby'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { StaticImage } from 'gatsby-plugin-image'

import CheckMarkIcon from '../../illustrations/icons/checkMarkIcon'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    iconWrapper: {
      display: `block`,
    },
    paragraph: {
      fontWeight: 700,
      marginBottom: theme.spacing(2),
    },
    section: {
      paddingTop: theme.spacing(7),
      [theme.breakpoints.up('lg')]: {
        paddingTop: theme.spacing(7),
      },
    },
    mainHeading: {
      marginBottom: `1rem`,
    },
  })
)

interface MDXProps {
  children: ReactNode
}

const MDXparagraph = ({ children }: MDXProps) => {
  const classes = useStyles()

  return (
    <Typography
      align='left'
      className={classes.paragraph}
      component='p'
      variant='body1'
    >
      {children}
    </Typography>
  )
}

const MDXul = ({ children }: MDXProps) => <List>{children}</List>

const MDXli = ({ children }: MDXProps) => {
  const classes = useStyles()

  return (
    <ListItem>
      <ListItemIcon className={classes.iconWrapper}>
        <CheckMarkIcon />
      </ListItemIcon>
      <ListItemText>{children}</ListItemText>
    </ListItem>
  )
}

const USPSection = () => {
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
    query uspSectionQuery {
      graphCmsPageSection(title: { eq: "Index Page - USP-section" }) {
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
    <Container className={classes.section} component='section' id='usp-section'>
      <Grid container>
        <Grid item container alignContent={'center'} xs={12} md={6}>
          <Typography className={classes.mainHeading} variant='h3'>
            {heading}
          </Typography>
          <Typography align='center' component='div' variant='body1'>
            <MDXProvider
              components={{
                li: MDXli,
                p: MDXparagraph,
                ul: MDXul,
              }}
            >
              <MDXRenderer>{body}</MDXRenderer>
            </MDXProvider>
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <StaticImage
            src='../../../images/light-bulbs.png'
            alt='Light bulb standing on the floor, turned on and connected to a wall socket.'
            loading='eager'
            formats={['auto', 'webp', 'avif']}
            placeholder='none'
            layout='fullWidth'
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default USPSection
