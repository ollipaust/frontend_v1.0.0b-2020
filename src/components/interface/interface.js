import React from 'react'
import PropTypes from 'prop-types'

import Head from 'components/head'

import AppView from './appViewWithScrollbars'
import Controller from 'components/controller'

import { GlobalStyles } from 'global.css'
import { TransitionStyles } from './transitions/transitions.css'

import { TransitionsController, TransitionsView } from './transitions'
import Div100vh from 'react-div-100vh'


const Interface = ({ children, location }) => {

  return (
    <Div100vh>
      <GlobalStyles />
      <TransitionStyles />

      <Head />

      

      <TransitionsController location={location}>
        <Controller />
      </TransitionsController>

      <TransitionsView location={location}>
        <AppView>
          {children}
        </AppView>
      </TransitionsView>

    </Div100vh>
  )
}

Interface.propTypes = {
  location: PropTypes.object.isRequired,
}

export default Interface
