import React, { Fragment, useEffect } from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import scrollTo from 'gatsby-plugin-smoothscroll'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import List from '@material-ui/core/List'
import Button from '@material-ui/core/Button'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'

import { useMobileNavStore, useWindowSize } from '../../../hooks/'

const useStyles = makeStyles(() =>
  createStyles({
    iconButton: {
      position: `absolute`,
      right: `calc(2rem - 12px)`,
      top: `1rem`,
    },
    list: {
      width: 250,
    },
    listItemText: {
      paddingBottom: `0.5rem`,
      paddingTop: `0.5rem`,
    },
    nav: {
      padding: `4rem 2rem`,
    },
  })
)

interface LinkProps {
  name: string
  link: string
  teleLink?: boolean
}

interface Props {
  navLinks: LinkProps[]
}

const MobileNav = ({ navLinks }: Props) => {
  const classes = useStyles()
  const active = useMobileNavStore((state: StateProps) => state.activeMobileNav)
  const toggle = useMobileNavStore(
    (state: StateProps) => state.toggleActiveMobileNav
  )
  const closeNav = useMobileNavStore(
    (state: StateProps) => state.resetActiveMobileNav
  )

  const closeAndScroll = (section: string) => async () => {
    await closeNav()
    scrollTo(`#${section}-section`)
  }

  const [width] = useWindowSize()

  useEffect(() => {
    if (width > 960) {
      closeNav()
    }
  })

  interface StateProps {
    activeMobileNav: boolean
    toggleActiveMobileNav: () => void
    resetActiveMobileNav: () => void
  }

  return (
    <SwipeableDrawer
      anchor='right'
      open={active && width < 960}
      onOpen={toggle}
      onClose={toggle}
      style={{ position: `relative` }}
    >
      <IconButton
        aria-label='open drawer'
        edge='start'
        className={classes.iconButton}
        color='primary'
        onClick={closeNav}
      >
        <CloseIcon />
      </IconButton>
      <nav className={classes.nav}>
        <List className={classes.list}>
          {navLinks.map((link: LinkProps, i) => {
            if (link.teleLink) {
              return (
                <Button
                  aria-label='Link to telephone number.'
                  color='primary'
                  component='a'
                  fullWidth
                  href={`tel:${link.link}'`}
                  key={link.link}
                  variant='contained'
                >
                  {link.name}
                </Button>
              )
            }

            return (
              <Fragment key={link.link}>
                <ListItem button onClick={closeAndScroll(link.link)}>
                  <ListItemText
                    className={classes.listItemText}
                    primary={link.name}
                  />
                </ListItem>
                <Divider
                  style={{
                    display: `${
                      i !== navLinks.length - 2 ? 'inherit' : 'none'
                    }`,
                  }}
                />
              </Fragment>
            )
          })}
        </List>
      </nav>
    </SwipeableDrawer>
  )
}

export default MobileNav
