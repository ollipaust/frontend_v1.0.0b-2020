import styled from 'styled-components'
import { accentGradient150, light } from 'constants/colors'

export const Container = styled.div.withConfig({
  displayName: 'LandscapeNotice',
})`
  position: absolute;
  display: none;
  z-index: 1000000;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${accentGradient150};
  color: ${light};
  overflow: hidden;

  @media (max-width: 812px) and (max-height: 414px) and (orientation: landscape) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 1024px) and (max-height: 768px) and (orientation: landscape) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
