import React, { FC } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { useStaticQuery, graphql } from 'gatsby'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import TekonLogo from '../../illustrations/brands/tekon'


const useStyles = makeStyles( (theme: Theme) =>

    createStyles({

        container: {

            paddingBottom: theme.spacing(10),
            paddingTop: theme.spacing(6),

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
    
        <Container className={ classes.container } maxWidth='md'>

            <Typography align='center' color='textSecondary' component='p' variant='h6'>
                
                { title }
                
            </Typography>

            <Box
                display='flex'
                justifyContent='space-between'
                marginTop={ 4 }
            >

                <TekonLogo />

                <TekonLogo />

                <TekonLogo />

                <TekonLogo />

                <TekonLogo />

            </Box>
            
        </Container>
    
    )

}


export default TrustedBySection
