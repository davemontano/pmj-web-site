import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import styled from "@emotion/styled"

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"

import carouselImage1 from "../images/home-carousel-1.png"
import carouselImage2 from "../images/home-carousel-2.png"

const CarouselContainer = styled.div`
  display: block;
  height: 800px;
`

const ArrowButton = styled.button`
  position: absolute;
  z-index: 2;
  top: calc(50% - 15px);
  width: 25;
  height: 40;
  cursor: pointer;
  background: none;
  border: none;
`

const NextButton = (onClickHandler, hasNext, label) =>
  hasNext && (
    <ArrowButton
      type="button"
      onClick={onClickHandler}
      title={label}
      style={{ right: 15 }}
    >
      <ArrowForwardIosIcon htmlColor="#FFFFFF" />
    </ArrowButton>
  )

const PrevButton = (onClickHandler, hasPrev, label) =>
  hasPrev && (
    <ArrowButton
      type="button"
      onClick={onClickHandler}
      title={label}
      style={{ left: 15 }}
    >
      <ArrowBackIosIcon htmlColor="#FFFFFF" />
    </ArrowButton>
  )

const HomeCarousel = () => {
  return (
    <>
      <CarouselContainer>
        <Carousel
          dynamicHeight={false}
          showThumbs={false}
          renderArrowNext={NextButton}
          renderArrowPrev={PrevButton}
        >
          <div>
            <img src={carouselImage1} height={800} />
          </div>
          <div>
            <img src={carouselImage2} height={800} />
          </div>
        </Carousel>
      </CarouselContainer>
    </>
  )
}

export default HomeCarousel
