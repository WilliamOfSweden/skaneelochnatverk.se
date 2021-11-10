import { createTheme, responsiveFontSizes } from '@material-ui/core/styles'

export const PALETTE = {
  bg: '#fafafa',
  bgAlt: '#f1f5f9',
  bgAlt1: '#d8effb',
  primary: '#033270',
  secondary: `#ffca1c`,
  accentColor1: `#00a6ff`, // lightblue
  accentColor2: `#2ecc71`, // green
  accentColor3: `#ff6666`, // red
}

const theme = responsiveFontSizes(
  createTheme({
    overrides: {
      MuiAppBar: {
        colorPrimary: {
          background: `${PALETTE.bgAlt} !important`,
        },
        colorDefault: {
          background: `${PALETTE.bg} !important`,
        },
      },
      MuiButton: {
        sizeLarge: {
          letterSpacing: `2px`,
          padding: `16px 60px`,
        },
        containedSecondary: {
          color: PALETTE.primary,
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
          li: {
            paddingLeft: `0 !important`,
          },
          q: {
            quotes: `none`,
          },
        },
      },
      MuiTypography: {
        gutterBottom: {
          marginBottom: `1rem`,
        },
        h1: {
          color: PALETTE.primary,
          fontFamily: `poppins`,
          fontWeight: 900,
          marginBottom: `1rem`,
        },
        h2: {
          color: PALETTE.primary,
          fontFamily: `poppins`,
          fontWeight: 700,
          marginBottom: `1.5rem`,
        },
        h3: {
          color: PALETTE.primary,
          fontFamily: `poppins`,
          fontWeight: 700,
          marginBottom: `1.5rem`,
        },
        h4: {
          color: PALETTE.primary,
          fontFamily: `poppins`,
          fontWeight: 700,
          marginBottom: `1.5rem`,
        },
        paragraph: {
          marginBottom: `2rem`,
        },
      },
    },

    palette: {
      background: {
        default: PALETTE.bg,
      },
      primary: {
        main: PALETTE.primary,
      },
      secondary: {
        main: PALETTE.secondary,
      },
    },
  })
)

export default theme
