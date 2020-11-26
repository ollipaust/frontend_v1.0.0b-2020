import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'
import { accent, light, dark, glass, dark75, black } from 'constants/colors'
import { shine } from 'constants/animations'

export const HeroContainer = styled.section.withConfig({
  displayName: 'HeroContainer',
})`
  position: relative;
  overflow: hidden;
`

export const HeroTextContainer = styled.div.withConfig({
  displayName: 'HeroTextContainer',
})`
  position: absolute;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;
  pointer-events: none !important;

  h1 > span {
    text-transform: uppercase;
    display: block;
    color: ${glass};
    -webkit-text-stroke: 3px ${dark75};
    pointer-events: none !important;
    ${shine}

    @media (max-height: 1024px) and (max-width: 768px) and (orientation: portrait) {
      -webkit-text-stroke: 2px ${dark75};
    }
  }

  h2 > span {
    font-family: Roboto;
    font-weight: 700;
    color: ${dark75};
    display: block;
    margin-top: 1rem;
    margin-bottom: 2rem;

    @media (max-height: 1024px) and (max-width: 768px) and (orientation: portrait) {
      margin-top: 0.3rem;
    }
    @media (max-height: 568px) and (max-width: 320px) and (orientation: portrait) {
      font-size: 1rem !important;
    }
  }
`
