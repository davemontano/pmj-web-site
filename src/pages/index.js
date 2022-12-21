import * as React from "react"
import NavBar from "../components/navbar"
import HomeCarousel from "../components/homeCarousel"
import styled from "@emotion/styled"
import Card from "../components/card"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"

import homeCard1 from "../images/home-card-1.png"
import homeCard2 from "../images/home-card-2.jpg"
import homeCard3 from "../images/home-card-3.png"

import amcLogo from "../images/logos/amc-bn.png"
import multicinesLogo from "../images/logos/multicines-bn.png"
import dominosLogo from "../images/logos/dominos-bn.png"
import equividaLogo from "../images/logos/equivida-bn.png"
import aliserviceLogo from "../images/logos/aliservice-bn.png"

const BottomDivider = styled.hr`
  border: 1px solid rgba(0, 0, 0, 0.51);
  width: 1155px;
  margin-top: 100px;
  margin-bottom: 100px;
`

const IndexPage = () => {
  return (
    <main>
      <HomeCarousel></HomeCarousel>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container justifyContent="space-around" alignItems="center">
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
          <Grid item xs={6}>
            <img src={homeCard3} width="100%" height={622} />
          </Grid>
          <Grid item xs={6}>
            <Card
              header="Sostenibilidad"
              content="Hacemos nuestro trabajo con pasión y compromiso. Innovamos constantemente nuestros procesos, con una visión de sostenibilidad"
              link={{ text: "Leer Mas", url: "/proyectos" }}
            />
          </Grid>
          <Grid item xs={12}>
            <BottomDivider />
          </Grid>
          <Grid item xs={2} />
          <Grid item xs={1}>
            <img src={amcLogo} />
          </Grid>
          <Grid item xs={1}>
            <img src={multicinesLogo} />
          </Grid>
          <Grid item xs={1}>
            <img src={dominosLogo} />
          </Grid>
          <Grid item xs={2}>
            <img src={equividaLogo} />
          </Grid>
          <Grid item xs={2}>
            <img src={aliserviceLogo} />
          </Grid>
          <Grid item xs={2} />
        </Grid>
      </Box>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>PMJ Arquitectos</title>
