import styled from 'styled-components'
import {
  accent,
  textDark,
  accentGradient150,
  light,
  dark66,
} from 'constants/colors'

export const Container = styled.div`
  --slide-size: 60vmin;
  --slide-margin: 4vmin;
  --color-primary: ${accent};
  --base-duration: 600ms;
  --base-ease: cubic-bezier(0.25, 0.46, 0.45, 0.84);

  visuallyhidden {
    clip: rect(1px, 1px, 1px, 1px);
    height: 1px;
    overflow: hidden;
    position: absolute !important;
    white-space: nowrap;
    width: 1px;
  }

  .icon {
    fill: ${textDark};
    width: 100%;
  }

  .works-button {
    color: ${light}!important;

    &:hover {
      text-shadow: 2px 2px 2px ${dark66};
    }
  }

  .slider-controls {
    display: flex;
    justify-content: center;
    position: absolute;
    top: calc(100% + 1rem);
    width: 100%;

    .btn {
      --size: 5rem;
      align-items: center;
      background-color: transparent;
      border: 3px solid transparent;
      border-radius: 100%;
      display: flex;
      height: var(--size);
      width: var(--size);
      padding: 0;
      margin: 0 25px;

      &:focus {
        border-color: ${accent};
        outline: none;
      }
      &:hover {
        cursor: pointer;
      }
    }

    .btn--previous > * {
      transform: rotate(180deg);
    }
  }

  .slider {
    height: var(--slide-size);
    margin: 0 auto;
    position: relative;
    width: var(--slide-size);
  }

  .slider-wrapper {
    display: flex;
    margin: 0 calc(var(--slide-margin) * -1);
    position: absolute;
    transition: transform var(--base-duration) cubic-bezier(0.25, 1, 0.35, 1);
  }

  .slide {
    align-items: center;
    color: white;
    display: flex;
    flex: 1;
    flex-direction: column;
    height: var(--slide-size);
    justify-content: center;
    margin: 0 var(--slide-margin);
    opacity: 0.25;
    position: relative;
    text-align: center;
    transition: opacity calc(var(--base-duration) / 2) var(--base-ease),
      transform calc(var(--base-duration) / 2) var(--base-ease);
    width: var(--slide-size);
    z-index: 1;
  }
  .slide--previous:hover,
  .slide--next:hover {
    opacity: 0.5;
  }
  .slide--previous {
    cursor: grab;
  }
  .slide--previous:hover {
    transform: translateX(2%);
  }
  .slide--next {
    cursor: grab;
  }
  .slide--next:hover {
    transform: translateX(-2%);
  }

  .slide--current {
    opacity: 1;
    pointer-events: auto;
    user-select: auto;

    .slide-image-wrapper {
      transform: scale(1);
      transition: transform 500ms ease;
      cursor: pointer;
    }

    &:hover .slide-image-wrapper {
      transform: scale(1.025);
      transition: transform 500ms ease;
      cursor: pointer;
    }
  }
  .slide-image-wrapper {
    background: ${accentGradient150};
    border-radius: 1%;
    height: 100%;
    left: 0%;
    overflow: hidden;
    position: absolute;
    top: 0%;
    transition: transform calc(var(--base-duration) / 4) var(--base-ease);
    width: 100%;
  }

  .slide-image {
    height: 110%;
    left: -5%;
    object-fit: cover;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    top: -5%;
    transition: opacity var(--base-duration) var(--base-ease),
      transform var(--base-duration) var(--base-ease);
    user-select: none;
    width: 110%;
  }

  .slide-headline {
    font-size: 8vmin;
    font-weight: 600;
    position: relative;
  }

  .slide-content {
    opacity: 0;
    padding: 4vmin;
    position: relative;
    transition: transform var(--base-duration) var(--base-ease);
    visibility: hidden;
  }
  .slide--current .slide-content {
    animation: fade-in calc(var(--base-duration) / 2) var(--base-ease) forwards;
    visibility: visible;
  }
  .slide-content > * + * {
    margin-top: 2rem;
  }

  @-webkit-keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`
