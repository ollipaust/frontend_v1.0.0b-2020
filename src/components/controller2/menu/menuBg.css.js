import styled from 'styled-components'
import { accentDeep } from 'constants/colors'
import MEDIA from 'helpers/mediaTemplates'

export const Container = styled.div.withConfig({
  displayName: 'MenuOverlayBackground',
})`
  position: absolute;
  width: 100%;
  height: 200vh;
  overflow: hidden;
  opacity: 0.875;
  outline: 0;
  background-size: cover;
  background-position: center;
  pointer-events: none;
  transform: rotate(26deg) translateX(0%) translateY(-22.6%) scale(2);

  .alpha {
    background: ${accentDeep};
    width: 100%;
    height: 100vh;
    pointer-events: none;
    transform: translateY(-100%);
    transition: transform 375ms ease-in-out 875ms;
  }
  .beta {
    background: ${accentDeep};
    width: 100%;
    height: 100vh;
    pointer-events: none;
    transform: translateY(100%);
    transition: transform 375ms ease-in-out 875ms;
  }

  &.active {
    transform: rotate(-26deg) translateX(0%) translateY(-22.6%) scale(2);

    .alpha {
      transform: translateY(0%);
      transition: transform 400ms ease 150ms;
      will-change: transform;
    }
    .beta {
      transform: translateY(0%);
      transition: transform 400ms ease 150ms;
      will-change: transform;
    }
  }
`
