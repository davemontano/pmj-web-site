import React from "react"

import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"

import Card from "../components/card"

import projectsJumbo from "../images/projects-jumbo.png"
import projectsCorporative from "../images/projects-corporative.png"
import homeCard2 from "../images/home-card-2.jpg"

const ProyectosPage = () => {
  return (
    <>
      <img src={projectsJumbo} width="100%" />
      <Box sx={{ flexGrow: 1 }}>
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
        </Grid>
      </Box>
    </>
  )
}

export default ProyectosPage
