import React, { ReactNode } from 'react'
import Typography from '@material-ui/core/Typography'

import NetworkIcon from '../../illustrations/icons/networkIcon'
import OnCallIcon from '../../illustrations/icons/onCallIcon'
import ContractIcon from '../../illustrations/icons/contractIcon'
import InstallationIcon from '../../illustrations/icons/installationIcon'

interface Props {
  children: ReactNode
}

const MDXh2 = ({ children }: Props) => (
  <Typography align='center' variant='h2'>
    {children}
  </Typography>
)

const MDXh3 = ({ children }: Props) => (
  <Typography align='center' component='h3' variant='h4'>
    {children}
  </Typography>
)

const MDXparagraph = ({ children }: Props) => (
  <Typography align='center' component='p' paragraph variant='body1'>
    {children}
  </Typography>
)

const MDXProviderComponentsObject = {
  h2: MDXh2,
  h3: MDXh3,
  p: MDXparagraph,
  NetworkIcon,
  OnCallIcon,
  ContractIcon,
  InstallationIcon,
}

export default MDXProviderComponentsObject
