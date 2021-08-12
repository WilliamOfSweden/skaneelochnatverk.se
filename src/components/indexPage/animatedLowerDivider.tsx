import React, { FC } from 'react'
import styled from 'styled-components'
import { PALETTE } from '../../styles/theme'

const StyledSVG = styled.svg`
  @keyframes lowerDivider {
    0% {
      stroke-dashoffset: 0;
    }
    to {
      stroke-dashoffset: -100%;
    }
  }

  animation: lowerDivider 70s linear infinite;
  transform: scale(3);
  width: 100%;

  @media (min-width: 600px) {
    transform: scale(2);
  }

  @media (min-width: 960px) {
    transform: scale(1);
  }
`

const AnimatedLowerDivider: FC = () => {
  return (
    <StyledSVG fill='none' viewBox='0 0 1441 130'>
      <defs>
        <linearGradient
          id='line_svg__paint0_linear'
          x1='1450'
          y1='110'
          x2='0'
          y2='133.898'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor={PALETTE.accentColor1} stopOpacity='0' />

          <stop offset='0.078' stopColor={PALETTE.accentColor1} />

          <stop offset='0.498' stopColor={PALETTE.accentColor1} />

          <stop
            offset='0.932'
            stopColor={PALETTE.accentColor1}
            stopOpacity='0.59'
          />

          <stop offset='1' stopColor={PALETTE.accentColor1} stopOpacity='0' />
        </linearGradient>
      </defs>

      <path
        opacity='0.6'
        d='M1647 162c-511.36-196.843-865.657-3.286-1451.409-50.104-140.832-11.257-116.52-85.153-84.54-99.376 31.98-14.223 60.679 10.151 59.619 40.133-1.499 42.373-71.331 44.571-106.06 40.373-33.672-4.07-68.892-8.495-104.112-14.191'
        stroke='url(#line_svg__paint0_linear)'
        strokeWidth='3'
        strokeLinecap='round'
        strokeDasharray='10 20'
      />
    </StyledSVG>
  )
}

export default AnimatedLowerDivider
