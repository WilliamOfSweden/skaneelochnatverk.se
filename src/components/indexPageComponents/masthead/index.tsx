import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { useStaticQuery, graphql } from 'gatsby'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { StaticImage } from 'gatsby-plugin-image'

import { PALETTE } from '../../../styles/theme'
import useStore from '../../../stores/contactModalStore'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    btn: {
      marginLeft: `auto`,
      marginRight: `auto`,
      [theme.breakpoints.up('sm')]: {
        marginLeft: 0,
        width: `initial`,
      },
    },
    h1: {
      fontSize: `4rem !important`,
    },
    heroSection: {
      background: PALETTE.bgAlt,
      paddingBottom: theme.spacing(5),
      paddingTop: theme.spacing(13),
      [theme.breakpoints.up('lg')]: {
        paddingBottom: theme.spacing(7),
        paddingTop: theme.spacing(7),
      },
    },
    paragraph: {
      [theme.breakpoints.up('md')]: {
        textAlign: `left !important`,
      },
    },
  })
)

export const Masthead = () => {
  const {
    graphCmsPageSection: {
      heading,
      body: { text },
      buttonText,
    },
  } = useStaticQuery(graphql`
    query mastheadQuery {
      graphCmsPageSection(title: { eq: "Index Page - Masthead" }) {
        heading
        body {
          text
        }
        buttonText
      }
    }
  `)

  interface StateProps {
    activeContactModal: boolean
    openContactModal: () => void
  }

  const openContactModal = useStore(
    (state: StateProps) => state.openContactModal
  )

  const classes = useStyles()

  return (
    <section className={classes.heroSection} id='masthead'>
      <Container>
        <Grid container>
          <Grid
            item
            container
            alignContent={'center'}
            justifyContent='flex-start'
            xs={12}
            sm={7}
            lg={6}
          >
            <Typography className={classes.h1} variant='h1'>
              {heading}
            </Typography>
            <Typography paragraph>{text}</Typography>
            <Button
              className={classes.btn}
              color='primary'
              fullWidth
              onClick={openContactModal}
              size='large'
              variant='contained'
            >
              {buttonText}
            </Button>
          </Grid>
          <Grid item xs={12} sm={5} lg={6}>
            <StaticImage
              alt='Light bulb standing on the floor, turned on and connected to a wall socket.'
              formats={['auto', 'webp', 'avif']}
              layout='constrained'
              loading='eager'
              placeholder='none'
              src='../../../images/light-bulb.png'
              width={616}
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}
