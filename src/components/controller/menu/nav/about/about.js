import React from 'react'
import { Container } from './about.css'
export const About = ({ className, children }) => {
  return (
    <Container className={className}>
      hello
      {children}
    </Container>
  )
}
