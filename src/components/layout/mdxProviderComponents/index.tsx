import React, { FC, ReactNode } from 'react'
import Typography from '@material-ui/core/Typography'
import TekonLogo from '../../illustrations/brands/tekon'
import WLogo from '../../illustrations/brands/w'
import BILogo from '../../illustrations/brands/biLogo'
import XLogo from '../../illustrations/brands/xLogo'
import NetworkIcon from '../../illustrations/icons/networkIcon'
import OnCallIcon from '../../illustrations/icons/onCallIcon'
import ContractIcon from '../../illustrations/icons/contractIcon'
import InstallationIcon from '../../illustrations/icons/installationIcon'

interface Props {
  children: ReactNode
}

const MDXh2: FC<Props> = ({ children }) => (
  <Typography align='center' variant='h2'>
    {children}
  </Typography>
)

const MDXh3: FC<Props> = ({ children }) => (
  <Typography align='center' component='h3' variant='h4'>
    {children}
  </Typography>
)

const MDXparagraph: FC<Props> = ({ children }) => (
  <Typography align='center' component='p' paragraph variant='body1'>
    {children}
  </Typography>
)

const MDXProviderComponentsObject = {
  h2: MDXh2,

  h3: MDXh3,

  p: MDXparagraph,

  TekonLogo,

  WLogo,

  BILogo,

  XLogo,

  NetworkIcon,

  OnCallIcon,

  ContractIcon,

  InstallationIcon,
}

export default MDXProviderComponentsObject
