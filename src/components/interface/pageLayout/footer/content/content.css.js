import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'
import { light66, light } from 'constants/colors'

export const Container = styled.div.withConfig({
  displayName: 'FooterContent',
})`
  padding: 5vmin 0;
  z-index: 1;

  @media (max-height: 812px) and (max-width: 414px) and (orientation: portrait) {
    padding: 10vmin 0;
  }

  .bottomLinks {
    line-height: 1rem;
    text-align: center;
    li {
      list-style: none;
      display: inline-block;
      text-align: center;
      margin-right: 1.5rem;
      &:last-child {
        margin-right: 0;
      }
      a {
        font-size: 1rem;
        font-weight: 500;
        color: ${light};
        transition: color 300ms ease;
        :hover {
          color: ${light66};
          transition: color 300ms ease;
        }
      }
    }
  }
`

export const ContentText = styled.div.withConfig({
  displayName: 'ContentText',
})`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: right;
  font-family: Campton;
  font-size: 1.5vmax;
  font-weight: 700;
  ${MEDIA.PHONE &&
    MEDIA.TABLET`
      height: 40vh;
      text-align: center;
      font-size: 3.5vmax;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      `}
  span {
    display: block;
    text-align: center;

    ${MEDIA.PHONE &&
      MEDIA.TABLET`
          margin-bottom: 2vh;
      `}
    &:nth-of-type(1) {
      margin-bottom: 12.5px;
    }
    &:nth-of-type(2) {
      margin-bottom: 25px;
    }
  }
  a {
    color: ${light66};
    transition: color 500ms ease 0ms;

    :hover {
      color: ${light};
      transition: color 500ms ease 50ms;
    }
  }
`
