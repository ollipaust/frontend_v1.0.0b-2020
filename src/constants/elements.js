import React from 'react'
import styled from 'styled-components'
import { accent, accentGradient150, dark, light } from 'constants/colors'
import { pulseRings } from 'constants/animations'

export const ButtonStyled = `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  display: inline-block;
  text-align: center;
  background: transparent;
  border-radius: 0.25em;
  border-width: 2px;
  border-style: solid;
  border-color: ${accent};
  margin-top: 2vmax;
  padding: 15px 20px;
  overflow: hidden;
  text-decoration: none;
  pointer-events: all;

    &.dark {
      border-color: ${dark};

        > span {
          color: ${accent};
        }

        ::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 200px;
          background: ${dark};
          z-index: -1;
          transform: translateY(-100%) translateZ(0);
          transition: transform 500ms ease-in-out 50ms;
        }
        :hover::after, :active::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 200px;
          background: ${dark};
          z-index: -1;
          transform: translateY(-50%) translateZ(0);
          transition: transform 500ms ease-in-out 0ms;
        }

    }

    @media (max-width: 450px) and (max-height: 823px) and (orientation: portrait) {
      padding: 7.5px 12.5px!important;
      display: block!important;
    }
    @media (max-width: 823px) and (max-height: 450px) and (orientation: landscape) {
      padding: 7.5px 12.5px!important;
    }

    span {
      color: ${dark};
      font-family: Campton;
      font-size: 1rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      transition: color 300ms ease 175ms;

        @media (max-width: 450px) and (max-height: 823px) and (orientation: portrait) {
          font-size: 0.75rem;
        }
        @media (max-width: 823px) and (max-height: 450px) and (orientation: landscape) {
          font-size: 0.66rem;
        }
    }

    :hover, :active {

      span {
        color: ${light};
        transition: color 300ms ease 100ms;
      }
    }
    ::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 200px;
      background: ${accentGradient150};
      z-index: -1;
      transform: translateY(-100%) translateZ(0);
      transition: transform 500ms ease-in-out 50ms;
    }
    :hover::after, :active::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 200px;
      background: ${accentGradient150};
      z-index: -1;
      transform: translateY(-50%) translateZ(0);
      transition: transform 500ms ease-in-out 0ms;
    }
    ${pulseRings}
`

export const HeroButtonsContainer = `
position: relative;
display: flex;
flex-direction: row;


@media (max-height: 1366px) and (max-width: 1024px) and (orientation: portrait) {
  flex-direction: column;
  align-items: center;
justify-content: center
}
`
export const Divider = styled.span.withConfig({
  displayName: 'Divider',
})`
  display: inline-block;
  height: 0.4em;
  width: 10%;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  background: ${accentGradient150};
  border-radius: 0.25em;

  @media (max-height: 823px) and (max-width: 450px) and (orientation: portrait) {
    height: 0.25em;
    border-radius: 1rem;
    margin-top: 0.55rem;
    margin-bottom: 0.55rem;
  }
  @media (max-width: 823px) and (max-height: 450px) and (orientation: landscape) {
    height: 0.25em;
    border-radius: 1rem;
    margin-top: 0.55rem;
    margin-bottom: 0.55rem;
  }
`

export const Indicator = () => {
  return (
    <div className="pulsing-rings">
      <div className="pulsing-ringlet"></div>
      <div className="pulsing-ringlet"></div>
      <div className="pulsing-ringlet"></div>
    </div>
  )
}

export const Hr = styled.hr.withConfig({
  displayName: 'HorizontalLine',
})`
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  border: 0px;
  width: 87.5%;
  height: 1px;
  background-image: -webkit-linear-gradient(left, ${light}, ${dark}, ${light});
`

export const absoluteMotionDiv = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
}
