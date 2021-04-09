import React from 'react'

import { Container, MenuBoxLeft, MenuBoxRight } from './menuContent.css'
import Socials from 'components/socials'

const MenuContent = ({ className }) => (
  <Container className={className}>
    <MenuBoxLeft>
      <strong>
        <span>WWW.OLLIPAUST.DEV</span>
      </strong>
      <span>Personal Website &amp; Portfolio</span>
    </MenuBoxLeft>

    <MenuBoxRight>
      <Socials />
    </MenuBoxRight>
  </Container>
)

export default MenuContent
