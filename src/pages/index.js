import * as React from "react"
import NavBar from "../components/navbar"
import HomeCarousel from "../components/homeCarousel"
import styled from "@emotion/styled"
import Card from "../components/card"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"

import homeCard1 from "../images/home-card-1.png"
import homeCard2 from "../images/home-card-2.jpg"


const IndexPage = () => {
  return (
    <main>
      <HomeCarousel></HomeCarousel>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item xs={6}>
            <img src={homeCard1} width="100%" height={622} />
          </Grid>
          <Grid item xs={6}>
            <Card
              header="Planificacion, Diseno y Construccion"
              content="Creamos espacios que enriquezcan las experiencias de sus usuarios de manera tangible."
              link={{ text: "Proyectos", url: "/proyectos" }}
            />
          </Grid>
          <Grid item xs={6}>
          <Card
            header="Experiencia"
            content="Inspiramos una experiencia de vida en todo momento."
            link={{ text: "Conocenos", url: "/proyectos" }}
          />
          </Grid>
          <Grid item xs={6}>
            <img src={homeCard2} width="100%" height={622} />
          </Grid>
        </Grid>
      </Box>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>PMJ Arquitectos</title>
