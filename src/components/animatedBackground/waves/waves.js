import React from 'react'
import '../../../../static/js/vantaWaves.min.js'
import * as THREE from 'three'
import { VantaContainer } from '../animatedBackground.css'

class BackgroundWaves extends React.Component {
  constructor() {
    super()
    this.vantaElement = React.createRef()
  }

  componentDidMount() {
    const vantaElement = this.vantaElement.current
    const accentColor = this.props.accentColor
    const shineIntensity = this.props.shineIntensity

    if (typeof window !== undefined) {
      setTimeout(() => {
        this.effect = window.VANTA.WAVES({
          el: vantaElement,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: true,
          minHeight: 300.0,
          minWidth: 300.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: accentColor,
          shininess: shineIntensity,
          waveHeight: 10.0,
          waveSpeed: 0.5,
          zoom: 1,
        })
      }, 1500)
    }
  }

  componentWillUnmount() {
    if (this.effect) this.effect.destroy()
  }

  render() {
    return <VantaContainer ref={this.vantaElement} />
  }
}

export default BackgroundWaves
