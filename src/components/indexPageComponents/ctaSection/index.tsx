import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { useStaticQuery, graphql } from 'gatsby'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme: Theme) =>
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
    },
  })
)

export const CTASection = () => {
  const {
    graphCmsPageSection: {
      heading,
      body: { text },
      buttonText,
    },
  } = useStaticQuery(graphql`
    query ctaSectionQuery {
      graphCmsPageSection(title: { eq: "Index Page - CTA-section" }) {
        heading
        body {
          text
        }
        buttonText
      }
    }
  `)

  const classes = useStyles()

  return (
    <Container className={classes.container} component='section' maxWidth='sm'>
      <Typography align='center' variant='h2'>
        {heading}
      </Typography>
      <Typography align='center' paragraph>
        {text}
      </Typography>
      <Button
        className={classes.btn}
        color='secondary'
        component='a'
        href='tel:+46701488148'
        size='large'
        variant='contained'
      >
        {buttonText}
      </Button>
    </Container>
  )
}
