import React from 'react'
import Head from 'components/head'

import BodyClassName from 'react-body-classname'

import Hero from 'components/hero'
import Title from 'components/title'
import { HeroButton, Indicator, Divider } from 'constants/elements'
import RandomWords from 'components/randomWords'
import { motion } from 'framer-motion'
import {
  heroSloganAnimation1,
  heroSloganAnimation2,
  heroButtonAnimation,
  heroSubTitleAnimation,
} from 'constants/animations'

const Index = () => (
  <React.Fragment>
    <Head pageTitle="Home" />

    <BodyClassName className="home" />
    
    <p>hi</p>
  </React.Fragment>
)

export default Index
