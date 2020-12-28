import styled from 'styled-components'

export const Container = styled.div.withConfig({
  displayName: 'AnimatedBackground',
})`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1000;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: 0.33;
`
