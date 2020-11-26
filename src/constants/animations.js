import { cloudImg } from 'constants/images'

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.3 } },
}

export const triangle1 = {
  hidden: { opacity: 0, transform: 'scale(2)' },
  show: {
    opacity: 1,
    transform: 'scale(1)',
    transition: {
      opacity: { delay: 3, duration: 0.3 },
      transform: { delay: 4, duration: 0.3 },
    },
  },
}

export const shine = `

animation: shine 1s cubic-bezier(0, 1, 1, 0.01) 3.5s;
background: url(${cloudImg.shineBg});
-webkit-background-clip: text;
background-position-x: 100%;

@keyframes shine {
  0% {
    background-position-x: 0%;
    background-position-y: 0%;
  }
  100% {
    background-position-x: 100%;
    background-position-y: -100%;
  }
}
`

export const pulseRings = `
.pulsing-rings {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  pointer-events: none;
  transition: opacity 350ms ease-in-out 2.5s;
}
.pulsing-rings .pulsing-ringlet {
  position: absolute;

  width: 250px;
  height: 250px;
  background: transparent;
  border: 3px solid rgba(135, 0, 255, 0.15);
  border-radius: 50%;
  transform: scale(0.1, 0.1);
  opacity: 0;
  animation: pulse 13s ease-out infinite;
  animation-delay: 3s;
}
.pulsing-rings .pulsing-ringlet:nth-of-type(2) {
  animation-delay: 3.3s;
}
.pulsing-rings .pulsing-ringlet:nth-of-type(3) {
  animation-delay: 3.6s;
}

@keyframes pulse {
  0% {
    transform: scale(0.1, 0.1);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  20%,
  100% {
    transform: scale(1.2, 1.2);
    opacity: 0;
  }
}
`
export const slideFade1s = {
  hidden: { opacity: 0, y: '75%' },
  show: {
    opacity: 1,
    y: '0%',
    transition: {
      opacity: { delay: 1, duration: 0.5 },
      y: { delay: 1.1, type: 'spring', damping: 100, stiffness: 100 },
    },
  },
}
export const slideFade2s = {
  hidden: { opacity: 0, y: '75%' },
  show: {
    opacity: 1,
    y: '0%',
    transition: {
      opacity: { delay: 2, duration: 0.5 },
      y: { delay: 2.1, type: 'spring', damping: 100, stiffness: 100 },
    },
  },
}
export const slideFade3s = {
  hidden: { opacity: 0, y: '75%' },
  show: {
    opacity: 1,
    y: '0%',
    transition: {
      opacity: { delay: 3, duration: 0.5 },
      y: { delay: 3.1, type: 'spring', damping: 100, stiffness: 100 },
    },
  },
}
export const motionStaggerButtons = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      opacity: { delay: 1.5, ease: 'easeIn' },
      staggerChildren: 1,
      delayChildren: 1.2,
    },
  },
}
export const motionStaggerLogos = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      opacity: { delay: 1.5, ease: 'easeIn' },
      staggerChildren: 0.3,
      delayChildren: 1,
    },
  },
}

export const slideUp3s = {
  hidden: { opacity: 0, y: '50%' },
  show: {
    opacity: 1,
    y: '0%',
    transition: {
      delay: 3,
      opacity: { duration: 0.5 },
      y: { type: 'spring', damping: 300, stiffness: 50 },
    },
  },
}
export const slideUp2s = {
  hidden: { opacity: 0, y: '50%' },
  show: {
    opacity: 1,
    y: '0%',
    transition: {
      delay: 2,
      opacity: { duration: 0.5 },
      y: { type: 'spring', damping: 300, stiffness: 50 },
    },
  },
}
export const ySpring = {
  hidden: { y: '100%' },
  show: {
    y: '0%',
    transition: {
      y: { type: 'spring', damping: 300, stiffness: 10 },
    },
  },
}
