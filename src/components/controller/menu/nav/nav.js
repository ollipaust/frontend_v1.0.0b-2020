import React from 'react'
import { Link } from 'gatsby'
import { Container, LinkContainer } from './nav.css'

const Nav = () => {
  return (
    <Container>
      <li>
        <LinkContainer>
          <Link
            to="/about"
            activeClassName="active"
            className="about"
            data-info="01"
          >
            <span>About</span>
          </Link>
        </LinkContainer>
      </li>

      <li>
        <LinkContainer>
          <Link
            to="/work"
            activeClassName="active"
            className="work"
            data-info="02"
          >
            <span>Work</span>
          </Link>
        </LinkContainer>
      </li>

      <li>
        <LinkContainer>
          <Link
            to="/stack"
            activeClassName="active"
            className="stack"
            data-info="03"
          >
            <span>Tech stack</span>
          </Link>
        </LinkContainer>
      </li>

      <li>
        <LinkContainer>
          <Link
            to="/contact"
            activeClassName="active"
            className="contact"
            data-info="04"
          >
            <span>Contact</span>
          </Link>
        </LinkContainer>
      </li>
    </Container>
  )
}

export default Nav
