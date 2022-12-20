import React from "react"
import styled from "@emotion/styled"

import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"

import Card from "../components/card"

import projectsJumbo from "../images/projects-jumbo.png"
import servicios1 from "../images/servicios/servicios-1.png"
import servicios2 from "../images/servicios/servicios-2.png"
import servicios3 from "../images/servicios/servicios-3.png"

const ImageContainer = styled.div`
  position: relative;
`

const BannerText = styled.h2`
  position: absolute;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 49px;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: #ffffff;
  bottom: 100px;
  left: 100px;
`

const ServiciosPage = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <ImageContainer>
          <img src={projectsJumbo} width="100%" />
          <BannerText>Servicios</BannerText>
        </ImageContainer>
        <Grid container>
          <Grid item xs={6}>
            <img src={servicios1} width="100%" height={622} />
          </Grid>
          <Grid item xs={6}>
            <Card
              simple
              link={{ text: "Planificacion y Diseño", url: "/servicios/planificacion" }}
            />
          </Grid>
          <Grid item xs={6}>
            <Card
              simple
              link={{ text: "Construccion", url: "/servicios/construccion" }}
            />
          </Grid>
          <Grid item xs={6}>
            <img src={servicios2} width="100%" height={622} />
          </Grid>

          <Grid item xs={6}>
            <img src={servicios3} width="100%" height={622} />
          </Grid>
          <Grid item xs={6}>
            <Card
              simple
              link={{ text: "Gestion Inmobiliaria", url: "/servicios/gestion" }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default ServiciosPage
