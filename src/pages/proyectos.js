import React from "react"
import styled from "@emotion/styled"

import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"

import Card from "../components/card"

import projectsJumbo from "../images/projects-jumbo.png"
import projectsCorporative from "../images/projects-corporative.png"
import homeCard2 from "../images/home-card-2.jpg"
import projectsCard3 from "../images/projects-card-3.png"

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

const ProyectosPage = () => {
  return (
    <> 
      <Box sx={{ flexGrow: 1 }}>
        <ImageContainer>
        <img src={projectsJumbo} width="100%" />
        <BannerText>Proyectos</BannerText>
        </ImageContainer>
        <Grid container>
          <Grid item xs={6}>
            <img src={projectsCorporative} width="100%" height={622} />
          </Grid>
          <Grid item xs={6}>
            <Card
              simple
              link={{ text: "Corporativos", url: "/proyectos/corporativos" }}
            />
          </Grid>
          <Grid item xs={6}>
            <Card
              simple
              link={{ text: "Comerciales", url: "/proyectos/comerciales" }}
            />
          </Grid>
          <Grid item xs={6}>
            <img src={homeCard2} width="100%" height={622} />
          </Grid>
          <Grid item xs={6}>
            <img src={projectsCard3} width="100%" height={622} />
          </Grid>
          <Grid item xs={6}>
            <Card
              simple
              link={{ text: "Inmobiliarios", url: "/proyectos/inmobiliarios" }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default ProyectosPage
