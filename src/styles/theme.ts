import { createTheme, responsiveFontSizes } from '@material-ui/core/styles'


export const PALETTE = {

    bg: '#fafafa',
    bgAlt: '#f1f5f9',
    primary: '#033270',
    secondary: `#ffca1c`,

}


const theme = responsiveFontSizes(createTheme({

    overrides: {
        
        MuiAppBar: {
            
            colorPrimary: {

                background: `${ PALETTE.bgAlt } !important`,

            },

            colorDefault: {

                background: `${ PALETTE.bg } !important`,

            }

        },

        MuiButton: {

            sizeLarge: {

                letterSpacing: `2px`,
                padding: `16px 60px`,

            },

        },

        MuiCssBaseline: {
            
            '@global': {

                body: {

                    overflowY: `scroll`,
                    overflowX: `hidden`,

                },

                '#gatsby-focus-wrapper': {

                    overflowX: `hidden`,

                },

                a: {

                    textDecoration: `none`,
    
                },

            },

        },
      
    },

    palette: {
        
        primary: {

            main: PALETTE.primary,

        },

        secondary: {

            main: PALETTE.secondary,

        },

        
      
    },

}))


export default theme
