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
import { StaticImage } from 'gatsby-plugin-image'

import CheckMarkIcon from '../../illustrations/icons/checkMarkIcon'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    iconWrapper: {
      display: `block`,
    },
    paragraph: {
      fontWeight: 700,
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

export const USPSection = () => {
  const {
    graphCmsPageSection: { heading },
  } = useStaticQuery(graphql`
    query uspSectionQuery {
      graphCmsPageSection(title: { eq: "Index Page - USP-section" }) {
        heading
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
          <Typography
            className={classes.paragraph}
            style={{ marginBottom: '1rem' }}
          >
            Att välja rätt elektriker är väldigt viktigt. Eftersom
            elektriciteten i ditt hem har med din säkerhet att göra är det
            viktigt att de personer som utför jobbet har rätt kompetens.
          </Typography>
          <Typography align='center' component='div' variant='body1'>
            <List>
              <ListItem>
                <ListItemIcon className={classes.iconWrapper}>
                  <CheckMarkIcon />
                </ListItemIcon>
                <ListItemText>
                  <Typography
                    align='left'
                    className={classes.paragraph}
                    component='p'
                    variant='body1'
                  >
                    Auktorisation
                  </Typography>
                  <Typography>
                    Alla våra elektriker är auktoriserade. Vi vidareutbildar
                    våra elektriker kontinuerligt.
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon className={classes.iconWrapper}>
                  <CheckMarkIcon />
                </ListItemIcon>
                <ListItemText>
                  <Typography
                    align='left'
                    className={classes.paragraph}
                    component='p'
                    variant='body1'
                  >
                    Kvalitet
                  </Typography>
                  <Typography>
                    Vi har som mål att upprätthålla ett 100-procentigt nöjd kund
                    index. Vi gör vårt yttersta i varje uppdrag för att du ska
                    vara nöjd.
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon className={classes.iconWrapper}>
                  <CheckMarkIcon />
                </ListItemIcon>
                <ListItemText>
                  <Typography
                    align='left'
                    className={classes.paragraph}
                    component='p'
                    variant='body1'
                  >
                    Tillgänglighet
                  </Typography>
                  <Typography>
                    Vi anpassar oss efter dina tider. Vi bistår med inledande
                    hjälp via telefon och våra elektriker är tillgängliga för
                    utryckningar i hela Skåne.
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <StaticImage
            src='../../../images/light-bulbs.png'
            alt='Three light bulbs standing on the floor, turned on and connected to wall sockets.'
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
