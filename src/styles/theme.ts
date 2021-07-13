import { createTheme, responsiveFontSizes } from '@material-ui/core/styles'


const theme = responsiveFontSizes(createTheme({

    overrides: {

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

}))


export default theme
