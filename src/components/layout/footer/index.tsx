import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import PhoneIcon from '@material-ui/icons/Phone'
import Typography from '@material-ui/core/Typography'
import MailIcon from '@material-ui/icons/Mail'
import BusinessIcon from '@material-ui/icons/Business'
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber'

import { useContactModalStore } from '../../../hooks/'
import Elsakerhetsverket from '../../illustrations/elsakerhetsverket'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    columnWrapper: {
      [theme.breakpoints.up('md')]: {
        alignItems: `flex-end`,
      },
    },
    copyWrite: {
      color: `#fff`,
      fontSize: `1rem`,
    },
    developerLink: {
      color: `#fff`,
      [theme.breakpoints.up('md')]: {
        textAlign: `right`,
      },
    },
    divider: {
      background: `#4d6077`,
    },
    grid: {
      color: `#fff`,
    },
    icon: {
      marginRight: theme.spacing(4),
    },
    mailLink: {
      cursor: `pointer`,
    },
    mobileOnly: {
      [theme.breakpoints.up('md')]: {
        display: `none`,
      },
    },
    telLink: {
      color: `#fff`,
      display: `flex`,
      marginBottom: theme.spacing(2),
    },
  })
)

const Footer = () => {
  const year = new Date().getFullYear()

  interface StateProps {
    activeContactModal: boolean
    openContactModal: () => void
  }

  const openContactModal = useContactModalStore(
    (state: StateProps) => state.openContactModal
  )

  const classes = useStyles()

  return (
    <Box bgcolor='#021c3e' component='footer' pb={6}>
      <Container>
        <Grid className={classes.grid} container spacing={4}>
          <Grid item xs={12}>
            <Divider className={classes.divider} />
          </Grid>
          <Grid item xs={12} md={4}>
            <a
              aria-label='Link for calling the company.'
              className={classes.telLink}
              href='tel:+46701488148'
              rel='noreferrer noopener'
            >
              <PhoneIcon className={classes.icon} />
              <Typography>0701-48 81 48</Typography>
            </a>
            <Box
              className={classes.mailLink}
              display='flex'
              mb={2}
              onClick={openContactModal}
            >
              <MailIcon className={classes.icon} />
              <Typography>info@skaneelochnatverk.se</Typography>
            </Box>
            <Box display='flex' mb={2}>
              <BusinessIcon className={classes.icon} />
              <Typography>
                Skåne El &amp; Nätverk AB <br />
                Traversvägen 1 <br />
                245 34 Staffanstorp
              </Typography>
            </Box>
            <Box display='flex'>
              <ConfirmationNumberIcon className={classes.icon} />
              <Typography>
                Organisationsnummer <br />
                559200-4401
              </Typography>
            </Box>
          </Grid>
          <Grid className={classes.mobileOnly} item xs={12}>
            <Divider className={classes.divider} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography align='center' className={classes.copyWrite}>
              © Skåne El &amp; Nätverk AB {year}
              <br />
              Alla rättigheter förbehållna.
            </Typography>
          </Grid>
          <Grid className={classes.mobileOnly} item xs={12}>
            <Divider className={classes.divider} />
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            className={classes.columnWrapper}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
            alignItems='center'
          >
            <a
              aria-label='Link to authority website.'
              href='https://e-tjanster.elsakerhetsverket.se/foretag/kolla-elforetaget'
              rel='noreferrer noopener'
              target='_blank'
              style={{ marginBottom: '2rem' }}
            >
              <Elsakerhetsverket />
            </a>
            <Divider className={classes.divider} />
            <a
              aria-label='Link to developers website.'
              href='https://daghouz.com'
              rel='noreferrer noopener'
              target='_blank'
            >
              <Typography className={classes.developerLink} align='center'>
                Website developed by{' '}
                <strong style={{ textDecoration: `underline` }}>
                  William Daghouz
                </strong>
                .
              </Typography>
            </a>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
