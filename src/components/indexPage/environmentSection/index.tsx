
import React, { FC } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { useStaticQuery, graphql } from 'gatsby'
import Container from '@material-ui/core/Container'
import { MDXRenderer } from 'gatsby-plugin-mdx'


const useStyles = makeStyles( (theme: Theme) =>

    createStyles({

        container: {

            paddingBottom: theme.spacing(7),
            paddingTop: theme.spacing(13),

        },

    }),

)


const EnviromentSection: FC = () => {

    const { mdx: { body } } = useStaticQuery(graphql`
        query environmentSectionQuery {
            mdx(fileAbsolutePath: {regex: "/indexPage\/environmentSection\/index/"}) {
                body
            }
        }
    `)

    const classes = useStyles()

    return (

        <Container className={ classes.container } component='section' maxWidth='sm'>
            
            <MDXRenderer>{ body }</MDXRenderer>
            
        </Container>
    
    )

}


export default EnviromentSection
