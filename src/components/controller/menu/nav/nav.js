import React, { useState, useEffect, useCallback } from 'react'
import { Container, LinkContainer } from './nav.css'
import { About } from './about/about'

const Nav = () => {
  const [aboutIsVisible, setAboutIsVisible] = useState(false)
  const toggled = aboutIsVisible ? 'active' : 'inactive'
  console.log('is about active: ' + aboutIsVisible)

  useEffect(() => {
    const handleEsc = event => {
      if (event.keyCode === 27) {
        setAboutIsVisible(false)
      }
    }
    window.addEventListener('keydown', handleEsc)

    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [])

  return (
    <>
      <Container>
        <li>
          <LinkContainer>
            <button
              onClick={() => setAboutIsVisible(true)}
              className={toggled + ' about'}
              data-info="01"
            >
              <span>About</span>
            </button>
          </LinkContainer>
        </li>
        <li>
          <LinkContainer>
            <button
              onClick={() => setAboutIsVisible(true)}
              className={toggled + ' about'}
              data-info="01"
            >
              <span>Work</span>
            </button>
          </LinkContainer>
        </li>
      </Container>

      <About className={'AboutContent ' + toggled}>
        <button onClick={() => setAboutIsVisible(!aboutIsVisible)}>X</button>
      </About>
    </>
  )
}

export default Nav
