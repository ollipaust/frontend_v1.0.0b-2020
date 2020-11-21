import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'
import { accent, light, dark, glass, darker2, black } from 'constants/colors'
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;

  h1 {
    > span {
      display: block;
      color: ${glass};
      -webkit-text-stroke: 3px ${darker2};
      ${shine}
    }
  }

  h2 {
    color: ${dark};
    display: block;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 1.5rem;
  }
`
