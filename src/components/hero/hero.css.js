import styled from 'styled-components'
import { glass, dark75 } from 'constants/colors'
import { shine, randomTextFadeIn } from 'constants/animations'

export const HeroContainer = styled.section.withConfig({
  displayName: 'HeroContainer',
})`
  position: relative;
  overflow: hidden;
  pointer-events: none;

  div:first-of-type {
    pointer-events: none;
  }
`

export const HeroTextContainer = styled.div.withConfig({
  displayName: 'HeroTextContainer',
})`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;
  pointer-events: none;

  .random-words-container {
    display: flex;
    position: relative;
    width: 100%;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    margin-top: 100px;
    @media (max-height: 823px) and (max-width: 450px) and (orientation: portrait) {
      margin-top: 0;
    }
  }

  h1 {
    span {
      text-transform: uppercase;
      display: block;
      color: ${glass};
      -webkit-text-stroke: 3px ${dark75};
      pointer-events: none !important;

      @media (max-height: 823px) and (max-width: 450px) and (orientation: portrait) {
        -webkit-text-stroke: 1.5px ${dark75};
      }
    }

    i,
    .loop {
      position: absolute;
      top: calc(50% - 5rem);
      left: 50%;
      white-space: nowrap;
      pointer-events: all;

      ${shine}

      @media (max-height: 823px) and (max-width: 450px) and (orientation: portrait) {
        top: calc(50% - 2.5rem);
      }
    }

    .loop {
      ${randomTextFadeIn}
      transform: translateX(-50%) translateY(0%);

      &.inactive {
        opacity: 0;
        transition: opacity 500ms ease;
      }
      &.active {
        opacity: 1;
        transition: opacity 500ms ease;
      }
    }
  }

  .sub-title-container {
    width: 75%;
    padding-top: 20px;

    [class*='Divider'] {
      width: 100px;
    }

    h2 > span {
      font-family: Montserrat
      font-weight: 700;
      color: ${dark75};
      display: block;
      margin-top: 1rem;
      margin-bottom: 2rem;

      @media (max-height: 568px) and (max-width: 320px) and (orientation: portrait) {
        font-size: 1rem !important;
      }
    }
  }
`
