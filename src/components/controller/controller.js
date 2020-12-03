import React from 'react'

import { Container, Content } from './controller.css'

import Menu from './menu'
import { LogoDark } from './logo'

const Controller = () => (
  <Container>
    <Content>
      <LogoDark />
      <Menu />
    </Content>
  </Container>
)

export default Controller
