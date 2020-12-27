import React from 'react'
import { HeroContainer } from './hero.css'
import { HeroContent } from './heroContent'

import Div100vh from 'react-div-100vh'

const Hero = ({ children }) => {
  return (
    <HeroContainer>
      <Div100vh>
        <HeroContent>{children}</HeroContent>
      </Div100vh>
    </HeroContainer>
  )
}

export default Hero
