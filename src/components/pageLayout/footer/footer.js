import React from 'react'
import Copyright from './bottom/copyright'
import Content from './content'
import { Container } from './footer.css'

const Footer = () => {
  return (
    <Container>
      <Content />
      <Copyright />
    </Container>
  )
}

export default Footer
