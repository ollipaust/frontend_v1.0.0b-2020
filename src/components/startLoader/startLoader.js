import React, { PureComponent } from 'react'
import { LoaderContainer } from './startLoader.css'
import { LogoSvgAnimated } from 'components/logoSvg'
import { light } from 'constants/colors'

class StartLoader extends PureComponent {
  constructor(props) {
    super(props)
    this.state = { startLoading: true }
  }

  disableScrolling = () => {
    if (this.state.startLoading) {
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'visible'
      document.documentElement.style.overflow = 'visible'
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({ startLoading: false }), 1000)
  }
  render() {
    if (typeof document !== 'undefined') {
      this.disableScrolling()
    }
    return (
      <LoaderContainer
        className={
          this.state.startLoading === true ? 'loading' : 'loading-done'
        }
      >
        <LogoSvgAnimated
          delay={true}
          speed={750}
          className={
            this.state.startLoading === true ? 'loading' : 'loading-done'
          }
          strokeWidth="15"
          strokeColor={light}
          fill="none"
        />
      </LoaderContainer>
    )
  }
}

export default StartLoader
