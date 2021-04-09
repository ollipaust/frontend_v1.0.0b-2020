import styled from 'styled-components'
import { accent } from 'constants/colors'
import MEDIA from 'helpers/mediaTemplates'

export const IoAboutTextContainer = styled.div`
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 500ms ease;

  .title {
    white-space: pre;
    > span {
      color: ${accent};
    }
    ${MEDIA.PHONE &&
      MEDIA.TABLET`
      white-space: normal;
        `}
  }

  .text {
    margin-bottom: 2rem;
  }

  &.aqua-text {
    flex-direction: column;
    padding: 50px 0;

    @media (max-height: 812px) and (max-width: 414px) and (orientation: portrait) {
      display: block;
    }

    .quote {
      width: 50%;
      align-self: center;

      @media (max-height: 812px) and (max-width: 414px) and (orientation: portrait) {
        width: 100%;
      }

      p {
        font-family: Campton;
        font-size: 3.5rem;
        font-weight: 700;
        line-height: 1em;
        margin-bottom: 4rem;

        @media (max-height: 812px) and (max-width: 414px) and (orientation: portrait) {
          font-size: 1.5rem;
        }
      }
    }
  }

  &.love-text {
    flex-direction: column;
    p {
      font-size: 1.5rem;
      text-align: justify;
      width: 50%;
      align-self: center;
      margin-bottom: 2rem;

      @media (max-height: 812px) and (max-width: 414px) and (orientation: portrait) {
        font-size: 1rem;
        width: 100%;
      }
    }

    .love-text-content {
      flex-direction: column;
    }
  }

  &.marquee-text {
    position: relative;
    min-height: 75vh;
    flex-direction: column;
    padding: 50px 0;

    [class*='Divider'] {
      margin: 0 0 50px 0;
      align-self: center;
    }
  }

  &.statement-text {
    padding: 50px 0;

    .statement-text-content {
      p {
        font-family: Campton;
        font-size: 6rem;
        font-weight: 700;
        line-height: 1em;
        margin-bottom: 4rem;

        @media (max-height: 812px) and (max-width: 414px) and (orientation: portrait) {
          font-size: 2rem;
        }
      }
    }
  }

  &.head-text {
    position: relative;
    height: 100%;
    padding: 100px 0 0;
    margin: 75px auto 0;

    .head-text-container {
      opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
      transition: opacity 500ms ease
        ${({ isVisible }) => (isVisible ? '1.2s' : '0s')};
      will-change: opacity;

      .portrait-container {
        margin: 0 auto;
        width: 65%;
      }
    }

    .raster-line-v {
      transform: ${({ isVisible }) =>
        isVisible
          ? 'matrix(1, 0, 0, 1, 0, 0) scale(1, 1)'
          : 'matrix(1, 0, 0, 1, 0, 0) scale(1, 0)'};
      transition: transform 1s ease-in-out;
      will-change: transform;
    }
    .raster-line-h {
      transform: ${({ isVisible }) =>
        isVisible
          ? 'matrix(1, 0, 0, 1, 0, 0) scale(1, 1)'
          : 'matrix(1, 0, 0, 1, 0, 0) scale(0, 1)'};
      transition: transform 0.75s ease-in-out;
      will-change: transform;
    }
  }

  &.intro-text {
    width: 50%;
    margin: 0 auto;
    padding: 50px 0;
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    transition: opacity 500ms ease 0s;
    will-change: opacity;

    @media (max-height: 1366px) and (max-width: 1024px) and (orientation: portrait) {
      width: 65%;
    }

    p {
      font-size: 1.5rem;
      text-align: justify;
    }
  }
`
