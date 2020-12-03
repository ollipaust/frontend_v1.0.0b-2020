import React from 'react'

import { FormattedMessage } from 'react-intl'
import Translator from 'components/interface/translator'
import BodyClassName from 'react-body-classname'

import Hero from 'components/hero'
import Title from 'components/title'
import {
  HeroButton,
  HeroButtonsContainer,
  Divider,
  Indicator,
} from 'constants/elements'

const Index = () => (
  <React.Fragment>
    <BodyClassName className="home" />
    <Hero>
      <Title as="h1" size="super">
        <FormattedMessage id="home.name" />
      </Title>

      <Divider />

      <Title as="h2" size="medium">
        <FormattedMessage id="home.job" />
      </Title>

      <HeroButtonsContainer>
        <HeroButton to="/about">
          <Indicator />
          <FormattedMessage id="home.buttonStart" />
        </HeroButton>

        <HeroButton to="/about" className="dark">
          <FormattedMessage id="home.buttonDownload" />
        </HeroButton>
      </HeroButtonsContainer>
    </Hero>
  </React.Fragment>
)

const customProps = {
  localeKey: 'home', // same as file name in src/i18n/translations/your-lang/index.js
}

export default Translator(customProps)(Index)
