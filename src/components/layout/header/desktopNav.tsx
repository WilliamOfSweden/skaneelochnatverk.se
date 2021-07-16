import React, { FC } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import scrollTo from 'gatsby-plugin-smoothscroll'


const useStyles = makeStyles( (theme: Theme) =>

    createStyles({

        deskTopOnly: {

            display: 'none',
            paddingTop: `0.2rem`,

            [theme.breakpoints.up('md')]: {

                display: 'flex',
                
            },

        },

        navLinks: {

            fontWeight: 300,
            padding: theme.spacing(1.5, 2),

        },

    }),

)


interface LinkProps {

    name: string

    link: string

    button?: boolean

}


const DesktopNav: FC<{navLinks: LinkProps[]}> = ({ navLinks }) => {

    const classes = useStyles()

    return (

        <nav className={ classes.deskTopOnly }>

            {
            
                navLinks.map((link: LinkProps) => {

                    if (link.button) {

                        return (    
                    
                            <Button
                                className={ classes.navLinks }
                                color='primary'
                                key={ link.link }
                                // onClick={ () => scrollTo( `#${ link.link }-section` ) }
                                variant='outlined'
                            >
    
                                { link.name }
                                
                            </Button>
    
                        )

                    }
                
                    return (    
                    
                        <Button
                            className={ classes.navLinks }
                            key={ link.link }
                            onClick={ () => scrollTo( `#${ link.link }-section` ) }
                        >

                            { link.name }
                            
                        </Button>

                    )
                    
                })
            
            }
            
        </nav>
    
    )

}


export default DesktopNav
