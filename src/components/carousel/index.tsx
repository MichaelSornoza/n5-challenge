'use client'

import AliceCarousel from 'react-alice-carousel'
import type { Responsive } from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

const responsive: Responsive = {
  0: {
    items: 1
  },
  600: {
    items: 2
  },
  1024: {
    items: 3
  }
}

export interface ICarouselProps {
  children?: JSX.Element[]
}

const Carousel = ({ children }: ICarouselProps): JSX.Element => {
  return (
    <AliceCarousel
      responsive={responsive}
      mouseTracking
      controlsStrategy='alternate'
      renderPrevButton={(props) => <button {...props}>←</button>}
      renderNextButton={(props) => <button {...props}>→</button>}
      renderDotsItem={(props) => <span {...props}>⏺</span>}
    >
      {children}
    </AliceCarousel>
  )
}

export default Carousel
