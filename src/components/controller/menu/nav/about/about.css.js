import styled from 'styled-components'
import { light, light33, light66 } from 'constants/colors'

export const Container = styled.div.withConfig({
  displayName: 'AboutContainer',
})`
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  color: ${light};

  &.active {
    opacity: 1;
    transition: opacity 500ms ease;
  }
  &.inactive {
    opacity: 0;
    transition: opacity 500ms ease;
  }
`
