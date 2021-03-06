import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { IGatsbyImageDataParent } from 'gatsby-plugin-image/dist/src/components/hooks'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import { AnimatedHeart } from './animatedHeart'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import FormatQuoteIcon from '@material-ui/icons/FormatQuote'

import { PALETTE } from '../../../styles/theme'
import SwipeIcon from '../../illustrations/icons/swipeIcon'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grid: {
      overflowX: `hidden`,
      paddingBottom: theme.spacing(6),
      [theme.breakpoints.up('xs')]: {
        width: `400vw`,
      },
      [theme.breakpoints.up('sm')]: {
        width: `200vw`,
      },
      [theme.breakpoints.up('lg')]: {
        width: `100%`,
      },
    },

    gridWrapper: {
      overflowX: `auto`,
      overflowY: `hidden`,
      '&::-webkit-scrollbar': {
        height: `6px`,
      },
      '&::-webkit-scrollbar-track': {
        background: `${PALETTE.accentColor1}22`,
        borderRadius: `10px`,
      },
      '&::-webkit-scrollbar-thumb': {
        background: `${PALETTE.accentColor1}44`,
        borderRadius: `10px`,
        '-webkit-box-shadow': `inset 0 0 6px ${PALETTE.accentColor1}`,
      },
    },
    img: {
      borderRadius: '25px',
      overflow: 'hidden',
      height: '50px',
      marginRight: theme.spacing(2),
      position: 'relative',
      width: '50px',
    },
    mobileOnly: {
      [theme.breakpoints.up('lg')]: {
        display: `none`,
      },
    },
    quotee: {
      fontSize: `1.3rem`,
    },
    quoteIcon: {
      fill: PALETTE.accentColor1,
      fontSize: 50,
      opacity: 0.6,
      transform: ` rotate(180deg)`,
    },
    section: {
      background: PALETTE.bgAlt,
      paddingBottom: theme.spacing(3),
      paddingTop: theme.spacing(7),
    },
  })
)

export const ReferencesSection = () => {
  const {
    allGraphCmsReferencePost: { edges },
  } = useStaticQuery(graphql`
    query referencesSectionQuery {
      allGraphCmsReferencePost(limit: 4) {
        edges {
          node {
            name
            quote
            image {
              gatsbyImageData(width: 50, height: 50)
            }
            imageAlt
          }
        }
      }
    }
  `)

  const classes = useStyles()

  interface EdgeProps {
    node: {
      name: string
      quote: string
      image: IGatsbyImageDataParent
      imageAlt: string
    }
  }

  return (
    <Box bgcolor={PALETTE.bgAlt} id='references-section' py={3}>
      <Container>
        <Box position='relative' pb={5}>
          <AnimatedHeart />
          <Box
            alignItems='center'
            display='flex'
            height='100%'
            justifyContent='center'
            left={0}
            pb={5}
            position='absolute'
            top={0}
            width='100%'
          >
            <Typography align='center' variant='h3' component='h2'>
              V??ra kunders vitsord
            </Typography>
          </Box>
        </Box>
        <Box className={classes.gridWrapper}>
          <Grid className={classes.grid} container spacing={5}>
            {edges.map((edge: EdgeProps) => {
              const {
                node: {
                  name,
                  quote,
                  image: { gatsbyImageData },
                  imageAlt,
                },
              } = edge

              return (
                <Grid item xs={3} lg={6} key={name}>
                  <Box display='flex' justifyContent='flex-end' mb={1}>
                    <FormatQuoteIcon className={classes.quoteIcon} />
                  </Box>

                  <Typography
                    align='center'
                    gutterBottom
                    component='p'
                    display='block'
                  >
                    '{quote}
                  </Typography>

                  <Box
                    alignItems='center'
                    display='flex'
                    justifyContent='center'
                    mt={2}
                  >
                    <GatsbyImage
                      alt={imageAlt}
                      className={classes.img}
                      image={gatsbyImageData}
                    />
                    <Typography align='center' className={classes.quotee}>
                      {name}
                    </Typography>
                  </Box>
                </Grid>
              )
            })}
          </Grid>
        </Box>

        <Box
          className={classes.mobileOnly}
          display='flex'
          justifyContent='center'
        >
          <SwipeIcon />
        </Box>
      </Container>
    </Box>
  )
}
