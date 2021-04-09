import React, { PureComponent } from 'react'
import Nav from './nav'
import { LogoLight } from '../logo'
import {
  OverlayBg,
  OverlayContent,
  OverlayNav,
  MenuButton,
  MenuLines,
  LogoContainer,
  OverlayBoxRight,
  OverlayBoxLeft,
} from './menu.css'
import Socials from 'components/socials'

class Menu extends PureComponent {
  constructor(props) {
    super(props)
    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.state = { collapsed: true }
  }
  toggleNavbar() {
    this.setState({ collapsed: !this.state.collapsed })
  }
  escapeNavbar = () => {
    if (!this.collapsed && event.key === 'Escape') {
      this.toggleNavbar()
    }
  }
  disableScrolling = () => {
    if (!this.state.collapsed) {
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'visible'
      document.documentElement.style.overflow = 'visible'
    }
  }

  render() {
    const collapsed = this.state.collapsed
    const toggled = !collapsed ? 'active' : 'inactive'

    if (typeof document !== 'undefined') {
      this.disableScrolling()
    }

    return (
      <React.Fragment>
        <MenuButton
          className={toggled}
          onClick={this.toggleNavbar}
          onKeyDown={this.escapeNavbar}
          aria-label="Overlay Menu"
          tabIndex="0"
          role="button"
        >
          <MenuLines />
        </MenuButton>

        <OverlayContent className={toggled} onKeyDown={this.escapeNavbar}>
          <OverlayBg
            className={toggled}
            onClick={this.toggleNavbar}
            onKeyDown={this.escapeNavbar}
          >
            <div className={toggled + ' alpha'} />
            <div className={toggled + ' beta'} />
          </OverlayBg>

          <LogoContainer>
            <LogoLight />
          </LogoContainer>

          <OverlayNav>
            <Nav />
          </OverlayNav>

          <OverlayBoxLeft>
            <strong>
              <span>WWW.OLLIPAUST.DEV</span>
            </strong>
            <span>Personal Website &amp; Portfolio</span>
          </OverlayBoxLeft>

          <OverlayBoxRight>
            <Socials />
          </OverlayBoxRight>
        </OverlayContent>
      </React.Fragment>
    )
  }
}

export default Menu
