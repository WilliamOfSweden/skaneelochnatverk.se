import React, { FC, JSXElementConstructor, ReactElement } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import useStore from '../../../stores/contactModalStore'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Container from '@material-ui/core/Container'
import Fade from './fadeAnimation'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'


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

    }),

)


interface Props {

    children: ReactElement<any, string | JSXElementConstructor<any>> | undefined

}


const ModalComponent: FC<Props> = ({ children }) => {

    const classes = useStyles()

    interface StateProps {

        activeContactModal: boolean

        closeContactModal: () => void

    }

    const activeContactModal = useStore((state: StateProps) => state.activeContactModal)

    const closeContactModal = useStore((state: StateProps) => state.closeContactModal)

    return (

        <Modal
            aria-labelledby='spring-modal-title'
            aria-describedby='spring-modal-description'
            className={ classes.modal }
            open={ activeContactModal }
            onClose={ closeContactModal }
            closeAfterTransition
            BackdropComponent={ Backdrop }
            BackdropProps={{
                timeout: 500,
            }}
        >

            <Container className={ classes.container } maxWidth='sm'>
            
                <Fade in={ activeContactModal }>

                    <Box
                        borderRadius='10px'
                        className={ classes.box }
                        pb={ 5 }
                        pt={ 1 }
                        px={ 5 }
                        width='100%'
                    >

                        <Box
                            display='flex'
                            justifyContent='flex-end'
                            width='100%'
                        >

                            <IconButton
                                className={ classes.iconButton }
                                color='primary'
                                onClick={ closeContactModal }
                            >

                                <CloseIcon />

                            </IconButton>

                        </Box>

                        { children }

                    </Box>

                </Fade>

            </Container>
        
        </Modal>

    )

}


export default ModalComponent
