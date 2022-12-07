import React from "react"
import styled from "@emotion/styled"

import { Link } from "gatsby"
import Grid from "@mui/material/Grid"

import homeCard1 from "../../images/home-card-1.png"
import amcMain from "../../images/proyectosPage/amc-main.png"
import bcoPichincha from "../../images/corporativos/banco-pichincha.png"
import zaimella from "../../images/corporativos/zaimella.png"

const ImageContainer = styled.div`
  position: relative;
`

const PageHeader = styled.h1`
  position: absolute;
  bottom: 61px;
  left: 52px;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 49px;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: #ffffff;
`

const ImageLink = styled(Link)`
  position: absolute;
  bottom: 20px;
  left: 33px;
  color: #fff;
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 32px;
  letter-spacing: 0.07em;
  :visited {
    color: #ffffff;
  }
`

const CorporativosPage = () => {
  return (
    <>
      <ImageContainer>
        <img src={homeCard1} width="100%" />
        <PageHeader>Corporativos</PageHeader>
      </ImageContainer>

      <Grid container spacing={1}>
        <Grid item xs={6}>
          <ImageContainer>
            <img src={homeCard1} width="100%" height="400px" />
            <ImageLink to="/proyectos/corporativos/aliservis" >Aliservis S.A.</ImageLink>
          </ImageContainer>
        </Grid>
        <Grid item xs={6}>
          <ImageContainer>
            <img src={amcMain} width="100%" height="400px" />
            <ImageLink>AMC Ecuador</ImageLink>
          </ImageContainer>
        </Grid>
        <Grid item xs={6}>
          <ImageContainer>
            <img src={bcoPichincha} width="100%" height="400px" />
            <ImageLink>Banco Pichincha</ImageLink>
          </ImageContainer>
        </Grid>
        <Grid item xs={6}>
          <ImageContainer>
            <img src={zaimella} width="100%" height="400px" />
            <ImageLink>Zaimella</ImageLink>
          </ImageContainer>
        </Grid>
      </Grid>
    </>
  )
}

export default CorporativosPage
