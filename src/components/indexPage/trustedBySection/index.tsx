import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { useStaticQuery, graphql } from 'gatsby'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Uc from '../../illustrations/uc'
import In from '../../illustrations/in'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      paddingBottom: theme.spacing(10),
      paddingTop: theme.spacing(6),
    },
    imageWrapper: {
      gap: theme.spacing(4),

      [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
      },
    },
  })
)

const TrustedBySection = () => {
  const {
    graphCmsPageSection: { heading },
  } = useStaticQuery(graphql`
    query trustedBySectionQuery {
      graphCmsPageSection(title: { eq: "Index Page - Trusted-by-section" }) {
        heading
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
      <Box
        alignItems='center'
        className={classes.imageWrapper}
        display='flex'
        flexDirection='column'
        justifyContent='center'
        marginTop={4}
      >
        <Uc />
        <In />
      </Box>
    </Container>
  )
}

export default TrustedBySection
