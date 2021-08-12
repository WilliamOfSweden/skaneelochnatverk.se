import React, { FC } from 'react'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'

interface Props {
  children: React.ReactElement
}

const ScrollAnimation: FC<Props> = ({ children }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,

    threshold: 0,
  })

  return React.cloneElement(children, {
    color: trigger ? 'default' : 'primary',

    elevation: !trigger ? 0 : 2,
  })
}

export default ScrollAnimation
