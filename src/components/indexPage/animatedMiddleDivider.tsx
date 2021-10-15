import React from 'react'
import styled from 'styled-components'

import { PALETTE } from '../../styles/theme'

const StyledSVG = styled.svg`
  @keyframes middleDivider {
    0% {
      stroke-dashoffset: 0;
    }
    to {
      stroke-dashoffset: -100%;
    }
  }
  animation: middleDivider 70s linear infinite;
  transform: rotate(180deg) scale(3);
  width: 100%;
  @media (min-width: 600px) {
    transform: rotate(180deg) scale(2);
  }
  @media (min-width: 960px) {
    transform: rotate(180deg) scale(1);
  }
`

const AnimatedMiddleDivider = () => (
  <StyledSVG fill='none' viewBox='0 0 1441 130'>
    <defs>
      <linearGradient
        id='line-2_svg__paint0_linear'
        x1='1509.79'
        y1='31.779'
        x2='-8.847'
        y2='6.032'
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
      d='M-67.314-11.564C500.658 147.98 1194.41-66.146 1654.91 64.253'
      stroke='url(#line-2_svg__paint0_linear)'
      strokeWidth='3'
      strokeLinecap='round'
      strokeDasharray='10 20'
    />
  </StyledSVG>
)

export default AnimatedMiddleDivider
