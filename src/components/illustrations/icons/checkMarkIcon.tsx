import React from 'react'
import styled from 'styled-components'

import { PALETTE } from '../../../styles/theme'

const StyledSVG = styled.svg`
  display: block;
  width: 1rem;
  fill: none;
`

const CheckMarkIcon = () => (
  <StyledSVG xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 23'>
    <defs>
      <linearGradient
        id='small-checkmark_svg__paint0_linear'
        x1='11'
        y1='0.037'
        x2='11'
        y2='22.037'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor={`${PALETTE.accentColor1}99`} />
        <stop offset='1' stopColor={`${PALETTE.accentColor1}99`} />
      </linearGradient>
      <linearGradient
        id='small-checkmark_svg__paint1_linear'
        x1='12.5'
        y1='3.245'
        x2='12.5'
        y2='17.668'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#fff' />
        <stop offset='0' stopColor='#fff' />
        <stop offset='1' stopColor='#fff' />
      </linearGradient>
      <clipPath id='small-checkmark_svg__clip0'>
        <path
          d='M0 11.037c0-6.075 4.925-11 11-11s11 4.925 11 11-4.925 11-11 11-11-4.924-11-11z'
          fill='#fff'
        />
      </clipPath>
    </defs>
    <g clipPath='url(#small-checkmark_svg__clip0)'>
      <path
        d='M0 11.037c0-6.075 4.925-11 11-11s11 4.925 11 11-4.925 11-11 11-11-4.924-11-11z'
        fill='url(#small-checkmark_svg__paint0_linear)'
      />
      <path
        d='M4 10.537l5.285 4.751L22.704 1.87'
        stroke='#5C461B'
        strokeWidth='3'
      />
      <path
        d='M4 10.537l5.285 4.751L22.704 1.87'
        stroke='url(#small-checkmark_svg__paint1_linear)'
        strokeWidth='3'
      />
    </g>
  </StyledSVG>
)

export default CheckMarkIcon
