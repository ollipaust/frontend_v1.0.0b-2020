import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'
import { light } from 'constants/colors'

export const ContainerDark = styled.figure.withConfig({
  displayName: 'LogoDark',
})`
  pointer-events: all;

  svg {
    width: 40px;
    height: 40px;
    transform: scale(1) translateZ(0);
    transition: transform 300ms ease 50ms;

    :hover {
      transform: scale(1.025);
      transition: transform 300ms ease 50ms;
    }
  }

  ${MEDIA.PHONE &&
    MEDIA.TABLET`
      top: 2em;
      left: 1.25em;
      
        svg {
          width: 40px;
          height: 40px;
          overflow: visible;
        }
  `}
`
export const SiteName = styled.span.withConfig({
  displayName: 'SiteName',
})`
  position: absolute;
  right: calc(2.5rem + 40px + 1rem);
  height: 100%;
  top: 0;
  display: flex;
  align-items: center;

  span {
    font-family: Campton;
    font-weight: bold;
    font-size: 1.25rem;
    text-transform: uppercase;
  }

  ${MEDIA.PHONE`
   display: none;
    `}
`

export const ContainerLight = styled.figure.withConfig({
  displayName: 'LogoLight',
})`
  pointer-events: none;

  svg {
    width: 40px;
    height: 40px;
    transform: scale(1);
    transition: transform 300ms ease 50ms;
  }

  [class*='SiteName'] span {
    color: ${light}!important;
  }

  ${MEDIA.PHONE &&
    MEDIA.TABLET`
      top: 2em;
      left: 1.25em;

      svg {
        width: 40px;
        height: 40px;
        overflow: visible;
      }
    `}
`
