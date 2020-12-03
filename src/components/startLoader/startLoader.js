import React from 'react'
import { LoaderContainer } from './startLoader.css'
import LogoSvg from 'components/logoSvg'
import { light } from 'constants/colors'

const StartLoader = ({ className }) => {
  return (
    <LoaderContainer className={className}>
      <LogoSvg
        delay={true}
        speed={750}
        className={className}
        strokeWidth="10"
        strokeColor={light}
        fill="none"
      />
    </LoaderContainer>
  )
}

export default StartLoader
