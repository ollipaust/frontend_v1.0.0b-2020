import styled from 'styled-components'
import { accent } from 'constants/colors'
import { rasterStaggers } from 'constants/animations'

export const Container = styled.div.withConfig({
  displayName: 'raster-wrapper',
})`
  position: absolute;
  top: 0;

  .raster-container {
    position: relative;
    z-index: -1;
    width: calc(91.66667vw + 1px);
    left: -2.5rem;

    @media (max-height: 812px) and (max-width: 414px) and (orientation: portrait) {
      left: -1.5rem;
      opacity: 0.25;
    }

    @media (max-height: 1366px) and (max-width: 1024px) and (orientation: portrait) {
      left: 0;
      opacity: 1;
    }
  }

  .raster-v-container {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .raster-line-v {
    width: 1px;
    display: inline-block;
    height: 100%;
    margin-right: calc(2.08333vw - 1px);
  }
  .raster-line-h {
    width: 100%;
    height: 1px;
    margin-bottom: calc(2.08333vw - 1px);
  }
  .raster-line-h,
  .raster-line-v {
    position: relative;
    background-color: ${accent};
    opacity: 1;
  }

  .raster-line-v:last-of-type {
    margin-right: -1px;
  }
  .raster-line-h:last-of-type {
    margin-bottom: -1px;
  }

  ${rasterStaggers}
`
