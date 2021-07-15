import React, { FC } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { useStaticQuery, graphql } from 'gatsby'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import TekonLogo from '../../illustrations/brands/tekon'


const useStyles = makeStyles( (theme: Theme) =>

    createStyles({

        bodyText: {

            fontWeight: 600,

        },

        container: {

            paddingBottom: theme.spacing(10),
            paddingTop: theme.spacing(6),

        },

        gridContainer: {

            marginTop: theme.spacing(3),

        },

    }),

)


const TrustedBySection: FC = () => {

    const { mdx: { frontmatter: { title } } } = useStaticQuery(graphql`
        query trustedBySectionQuery {
            mdx(fileAbsolutePath: {regex: "/indexPage\/trustedBySection\/index/"}) {
                frontmatter {
                    title
                }
            }
        }
    `)

    const classes = useStyles()
    
    return (
    
        <Container className={ classes.container } maxWidth='sm'>

            <Typography align='center' className={ classes.bodyText } color='textSecondary' component='p' variant='h6'>
                
                { title }
                
            </Typography>

            <Grid className={ classes.gridContainer } container spacing={ 5 } justifyContent='center'>

                <Grid container item justifyContent='center' xs={ 2 } md={ 2 }>

                    <TekonLogo />

                </Grid>

                <Grid container item justifyContent='center' xs={ 2 } md={ 2 }>

                    <TekonLogo />

                </Grid>


                <Grid container item justifyContent='center' xs={ 2 } md={ 2 }>

                    <TekonLogo />

                </Grid>


                <Grid container item justifyContent='center' xs={ 2 } md={ 2 }>

                    <TekonLogo />

                </Grid>

                <Grid container item justifyContent='center' xs={ 2 } md={ 2 }>

                    <TekonLogo />

                </Grid>

            </Grid>
            
        </Container>
    
    )

}


export default TrustedBySection
