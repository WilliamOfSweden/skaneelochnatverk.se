import React, { JSXElementConstructor, ReactElement } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

import { useContactModalStore } from '../../../hooks/'
import { FadeAnimation } from './fadeAnimation'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      backgroundColor: theme.palette.background.default,
    },
    container: {
      '&:focus': {
        outline: `none`,
      },
    },
    iconButton: {
      display: `flex`,
      marginRight: '-16px',
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
)

interface Props {
  children: ReactElement<any, string | JSXElementConstructor<any>> | undefined
}

export const AnimatedModal = ({ children }: Props) => {
  const classes = useStyles()

  interface StateProps {
    activeContactModal: boolean
    closeContactModal: () => void
  }

  const activeContactModal = useContactModalStore(
    (state: StateProps) => state.activeContactModal
  )

  const closeContactModal = useContactModalStore(
    (state: StateProps) => state.closeContactModal
  )

  return (
    <Modal
      aria-labelledby='spring-modal-title'
      aria-describedby='spring-modal-description'
      className={classes.modal}
      open={activeContactModal}
      onClose={closeContactModal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Container className={classes.container} maxWidth='sm'>
        <FadeAnimation in={activeContactModal}>
          <Box
            borderRadius='10px'
            className={classes.box}
            pb={5}
            pt={1}
            px={5}
            width='100%'
          >
            <Box display='flex' justifyContent='flex-end' width='100%'>
              <IconButton
                className={classes.iconButton}
                color='primary'
                onClick={closeContactModal}
              >
                <CloseIcon />
              </IconButton>
            </Box>
            {children}
          </Box>
        </FadeAnimation>
      </Container>
    </Modal>
  )
}
