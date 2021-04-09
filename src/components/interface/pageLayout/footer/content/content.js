import React from 'react'
import { Container, ContentText } from './content.css'
import Socials from 'components/socials'
import BottomLinks from '../bottom/bottomLinks'

const Content = () => {
  return (
    <Container>
      <ContentText>
        <div>
          <span>
            <a href="mailto:hello@ollipaust.dev?subject=Let%27s create something amazing!">
              hello@ollipaust.dev
            </a>
          </span>
          <span>
            <a href="tel:+49 (0) 175 460 15 17">
              +49&nbsp;(0)&nbsp;175&nbsp;460&nbsp;15&nbsp;17
            </a>
          </span>
        </div>
        <div>
          <Socials />
          <BottomLinks />
        </div>
      </ContentText>
    </Container>
  )
}

export default Content
