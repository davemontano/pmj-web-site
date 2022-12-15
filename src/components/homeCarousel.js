import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import styled from "@emotion/styled"

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import Paper from "@mui/material/Paper"

import carouselImage1 from "../images/home-carousel-1.png"
import carouselImage2 from "../images/home-carousel-2.png"
import carouselImage3 from "../images/home-carousel-3.png"
import carouselImage4 from "../images/home-carousel-4.png"

const CarouselContainer = styled.div`
  display: block;
  height: 800px;
  margin-top: 140px;
`

const ArrowButton = styled.button`
  position: absolute;
  z-index: 2;
  top: calc(50% - 15px);
  width: 25px;
  height: 40px;
  cursor: pointer;
  background: none;
  border: none;
`

const ImageContainer = styled.div`
  position: relative;
`

const ImageQuoteContainer = styled(Paper)`
  position: absolute;
  background-color: ${(props) => (props.light ? "#ffffff66" : "#1c1c1c66")};
  opacity: 100%;
  width: 449px;
  height: 350px;
  left: 202px;
  top: 222px;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 20px;
  gap: 10px;
`

const QuoteText = styled.div`
  font-family: "Montserrat";
  font-style: italic;
  font-weight: 500;
  font-size: 30px;
  line-height: 37px;
  letter-spacing: 0.07em;
  color: ${(props) => (props.light ? "#ffffffc2" : "#000000c2")};
`

const ProjectNameBox = styled.div`
  box-sizing: border-box;
  border: 1px solid #ffffff;

  position: absolute;
  width: 198px;
  height: 63px;
  left: 214px;
  top: 630px;

  align-items: center;
  text-align: center;
  vertical-align: middle;
  display: flex;
  justify-content: center;

  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #ffffff;
`

const NextButton = (onClickHandler, hasNext, label) =>
  hasNext && (
    <ArrowButton
      type="button"
      onClick={onClickHandler}
      title={label}
      style={{ right: 15 }}
    >
      <ArrowForwardIosIcon htmlColor="#FFFFFF" fontSize="large" />
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
          <ImageContainer>
            <img
              src={carouselImage1}
              width="100%"
              style={{ maxHeight: "800px" }}
            />
            <ProjectNameBox>GRUPO AMC, 2015</ProjectNameBox>
          </ImageContainer>
          <ImageContainer>
            <img
              src={carouselImage2}
              width="100%"
              style={{ maxHeight: "800px" }}
            />
            <ImageQuoteContainer light>
              <QuoteText>
                <q>
                  Quedamos muy satisfechos con el trabajo y con la calidad
                  profesional y humana de sus colaboradores a todo nivel.
                </q>
                <p>Ing. Mauricio Ledesma</p>
              </QuoteText>
            </ImageQuoteContainer>
            <ProjectNameBox>Aliservis, 2026</ProjectNameBox>
          </ImageContainer>
          <ImageContainer>
            <img
              src={carouselImage3}
              width="100%"
              style={{ maxHeight: "800px" }}
            />
            <ImageQuoteContainer>
              <QuoteText light>
                <q>
                  Ahora ya no es necesario ningún aporte del exterior, en Quito
                  tenemos cubiertas todas las necesidades gracias a PMJ.
                </q>
              </QuoteText>
            </ImageQuoteContainer>
            <ProjectNameBox>Mera <br/> Corporation, 2018</ProjectNameBox>
          </ImageContainer>
          <ImageContainer>
            <img
              src={carouselImage4}
              width="100%"
              style={{ maxHeight: "800px" }}
            />
            <ImageQuoteContainer>
              <QuoteText light>
                <q>
                  Desde el año 2003 hemos confiado en Pedro Moreno y todo el
                  equipo de PMJ Arquitectos para la expansión de nuestras
                  instalaciones en todo el país.
                </q>
              </QuoteText>
            </ImageQuoteContainer>
            <ProjectNameBox>Multicines, 2006</ProjectNameBox>
          </ImageContainer>
        </Carousel>
      </CarouselContainer>
    </>
  )
}

export default HomeCarousel
