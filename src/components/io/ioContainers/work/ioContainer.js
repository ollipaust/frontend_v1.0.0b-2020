import React from 'react'
import IO from 'components/io'
import { IoWorkTextContainer } from './ioContainer.css'

const IoAboutContainer = ({ children, className }) => (
  <IO rootMargin="-50%">
    {({ isVisible, hasBeenVisible }) => (
      <IoWorkTextContainer
        isVisible={isVisible}
        hasBeenVisible={hasBeenVisible}
        className={className}
      >
        {children}
      </IoWorkTextContainer>
    )}
  </IO>
)

export default IoAboutContainer
