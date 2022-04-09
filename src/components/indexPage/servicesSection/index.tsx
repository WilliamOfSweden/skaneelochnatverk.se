import React, { ReactNode } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { useStaticQuery, graphql } from 'gatsby'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import ContractIcon from '../../illustrations/icons/contractIcon'
import InstallationIcon from '../../illustrations/icons/installationIcon'
import NetworkIcon from '../../illustrations/icons/networkIcon'
import OnCallIcon from '../../illustrations/icons/onCallIcon'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      paddingBottom: theme.spacing(3),
      paddingTop: theme.spacing(3),
      position: `relative`,
    },
    h2: {
      paddingBottom: theme.spacing(5),
      paddingTop: theme.spacing(5),
    },
  })
)

const ServicesSection = () => {
  const {
    graphCmsPageSection: { heading },
  } = useStaticQuery(graphql`
    query servicesSectionQuery {
      graphCmsPageSection(title: { eq: "Index Page - Services-section" }) {
        heading
      }
    }
  `)

  const classes = useStyles()

  return (
    <Container
      className={classes.container}
      component='section'
      id='services-section'
    >
      <Typography align='center' className={classes.h2} variant='h2'>
        {heading}
      </Typography>
      <Grid container spacing={10}>
        <Grid item xs={12} sm={6}>
          <ContractIcon />
          <Typography align='center' component='h3' variant='h4'>
            Elentreprenad
          </Typography>
          <Typography align='center' paragraph>
            Vi tillhandahåller totalentreprenader både inom el och inom nätverk.
            Fördelen med att använda entreprenad är att du slipper hantera
            frågor om bemanning, planering och ansvar för de delar av ditt
            projekt som rör elarbeten och elinstallationer. När vi arbetar på
            entreprenad kan du vara säker på att du får en helhetslösning som
            håller kvalitet och är enkel att passa in i din byggprocess såväl
            som i samarbeten med andra hantverkare.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <InstallationIcon />
          <Typography align='center' component='h3' variant='h4'>
            Installation &amp; Service
          </Typography>
          <Typography align='center' paragraph>
            Våra installationselektriker är experter inom elinstallationer,
            eldragningar och underhållsarbete. Vi åtar oss uppdrag av varierande
            storlek, allt från byte av vägguttag till indragning av golvvärme
            eller mer avancerade projekt inom industrin. Vi hjälper dig även med
            felsökning och reparationer om något skulle gå fel och
            kompletterande installationer t.ex. uppsättning av elcentraler,
            kabeldragning och montering av strömbrytare.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <NetworkIcon />
          <Typography align='center' component='h3' variant='h4'>
            Data &amp; Nätverk
          </Typography>
          <Typography align='center' paragraph>
            Vi hjälper dig med nyinstallation, felsökning eller annan
            konfigurering av ditt företags- eller hemnätverk, oavsett storlek.
            Vi bistår med expertis genom hela processen, från projektering och
            registrering till färdigt och avprovat nätverk. Kontakta oss idag så
            ger vi dig en kostnadsfri offert där uppskattning av slutpris och
            tidsåtgång anges.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <OnCallIcon />
          <Typography align='center' component='h3' variant='h4'>
            Jour
          </Typography>
          <Typography align='center' paragraph>
            ⁠Vår eljour i Skåne finns för dig vid alla typer av akuta elfel,
            dygnet runt, året runt. Ring oss direkt när det är akut och du
            behöver en elektriker i Skåne. En behörig jourelektriker är snabbt
            på plats och tar hand om dina el-problem. Vi bistår även med
            inledande hjälp via telefon fram till att vår elektriker har kommit
            fram till dig.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ServicesSection
