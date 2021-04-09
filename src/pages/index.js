import React from 'react'
import Head from 'components/head'

import Hero from 'components/hero'
import Title from 'components/title'
import { Divider } from 'constants/elements'
import RandomWords from 'components/randomWords'
import { motion } from 'framer-motion'
import {
  heroSloganAnimation1,
  heroSloganAnimation2,
  heroSubTitleAnimation,
} from 'constants/animations'

const Index = () => (
  <React.Fragment>
    <Head pageTitle="Home" />

    <Hero>
      <div className="random-words-container">
        <Title as="h1" size="super">
          <motion.i
            initial="hidden"
            animate="show"
            variants={heroSloganAnimation1}
          >
            I create
          </motion.i>
          <br />
          <RandomWords />
          <br />
          <motion.i
            initial="hidden"
            animate="show"
            variants={heroSloganAnimation2}
          >
            websites
          </motion.i>
        </Title>
      </div>
      <motion.div
        className="sub-title-container"
        initial="hidden"
        animate="show"
        variants={heroSubTitleAnimation}
      >
        <Divider />
        <p>
          Hi, I&apos;m Olli Paust,
          <br />
          a Frontend Developer &amp; Designer
          <br />
          from Berlin, Germany.
        </p>
      </motion.div>
      {/*
      <motion.div
        initial="hidden"
        animate="show"
        variants={heroButtonAnimation}
      >
        <StyledButton to="/about">
          <Indicator />
          Get to know me!
        </StyledButton>
</motion.div> */}
    </Hero>
  </React.Fragment>
)

export default Index
