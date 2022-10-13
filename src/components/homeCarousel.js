import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styled from "@emotion/styled";

import carouselImage1 from '../images/home-carousel-1.png'
import carouselImage2 from '../images/home-carousel-2.png'

const CarouselContainer = styled.div`
display:block;
  height: 800px;
`

const HomeCarousel = () => {
    return <>
      <CarouselContainer>
      <Carousel dynamicHeight={false}>
        <div>
          <img src={carouselImage1} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
        <img src={carouselImage2} />
          <p className="legend">Legend 1</p>
        </div>
      </Carousel>
      </CarouselContainer>
    </>
}

export default HomeCarousel