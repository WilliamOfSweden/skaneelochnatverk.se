import React, { FC, ReactNode } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { useStaticQuery, graphql } from 'gatsby'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { StaticImage } from 'gatsby-plugin-image'
import CheckMarkIcon from '../../illustrations/icons/checkMarkIcon'


const useStyles = makeStyles( (theme: Theme) =>

    createStyles({

        iconWrapper: {

            minWidth: `0`,
            paddingRight: theme.spacing(2),

        },

        paragraph: {

            fontWeight: 700,
            marginBottom: theme.spacing(2),

        },
        
        section: {

            paddingTop: theme.spacing(13),

            [theme.breakpoints.up('lg')]: {

                paddingTop: theme.spacing(7),

            },

        },

        mainHeading: {

            marginBottom: `1rem`,

        },

    }),

)


const MDXparagraph: FC<{ children: ReactNode }> = ({ children }) => {

    const classes = useStyles()

    return (
    
        <Typography align='left' className={ classes.paragraph } component='p' variant='body1'>
            
            { children }
            
        </Typography>
    
    )

}


const MDXul: FC<{ children: ReactNode }> = ({ children }) => {

    // const classes = useStyles()

    return (

        <List>{ children }</List>

    )

}


const MDXli: FC<{ children: ReactNode }> = ({ children }) => {

    const classes = useStyles()

    return (

        <ListItem>
            
            <ListItemIcon className={ classes.iconWrapper }>
            
                <CheckMarkIcon />
            
            </ListItemIcon>
            
            <ListItemText>

                { children }

            </ListItemText>
        
        </ListItem>

    )

}


const USPSection: FC = () => {

    const { mdx: { body, frontmatter: {  title } } } = useStaticQuery(graphql`
        query USPSectionQuery {
            mdx(fileAbsolutePath: {regex: "/indexPage\/uspSection\/index/"}) {
                frontmatter {
                    title
                }
                body
            }
        }
    `)

    const classes = useStyles()

    return (

        <Container className={ classes.section } component='section' id='usp-section'>

            <Grid  container>

                <Grid
                    item
                    container
                    alignContent={ 'center' }
                    xs={ 12 }
                    md={ 6 }
                >

                    <Typography className={ classes.mainHeading } variant='h3'>

                        { title }

                    </Typography>

                    <Typography align='center' component='div' variant='body1'>

                        <MDXProvider
                            components={{
                                li: MDXli,
                                p: MDXparagraph,
                                ul: MDXul,
                            }}
                        >

                            <MDXRenderer>
                                
                                { body }
                                
                            </MDXRenderer>

                        </MDXProvider>

                    </Typography>

                </Grid>

                <Grid item xs={ 12 } md={ 6 }>

                    <StaticImage
                        src='../../../images/light-bulbs.png'
                        alt='Light bulb standing on the floor, turned on and connected to a wall socket.'
                        loading='eager'
                        formats={ ['auto', 'webp', 'avif'] }
                        placeholder='none'
                        layout='fullWidth'
                    />

                </Grid>

            </Grid>

        </Container>

    )

}


export default USPSection
