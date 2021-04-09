import React, { useState, useEffect } from 'react'
import { Container } from './landscapeNotice.css'

function getOrientation() {
  if (typeof window !== 'undefined') {
    {
      return window.screen.orientation.type
    }
  }
}

const useScreenOrientation = () => {
  const [orientation, setOrientation] = useState(getOrientation())

  const updateOrientation = () => {
    setOrientation(getOrientation())
  }

  useEffect(() => {
    window.addEventListener('orientationchange', updateOrientation)
    return () => {
      window.removeEventListener('orientationchange', updateOrientation)
    }
  }, [])
  return orientation
}

const LandscapeNotice = () => {
  const screenOrientation = useScreenOrientation()
  console.log('this is orientation:' + ' ' + screenOrientation)
  return (
    <Container>
      {screenOrientation === 'landscape-primary' ? <span>Hey</span> : null}
    </Container>
  )
}
export default LandscapeNotice
