import React from "react"
import styled from "@emotion/styled"

import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import ProjectCard from "../../../components/projectCard"

import main from "../../../images/meramexair/jumbo.png"
import thumb1 from "../../../images/meramexair/thumb-1.png"
import thumb2 from "../../../images/meramexair/thumb-2.png"
import thumb3 from "../../../images/meramexair/thumb-3.png"
import thumb4 from "../../../images/meramexair/thumb-4.png"

const PageContainer = styled.div`
  padding-top: 150px;
  padding-left: 48px;
  background-color: #f3f3f3;
`

const MeramexairPage = () => {
  return (
    <PageContainer>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item xs={6}>
            <img src={main} width="90%" />
          </Grid>
          <Grid item xs={6}>
            <ProjectCard
              title="Meramexair"
              subtitle="Industria Alimentos"
              bodyDescription={`SERVICIOS NUEVOS RESTAURANTES 2 ETAPA NUEVO AEROPUERTO INTERNACIONAL DE QUITO \n QUITO, ECUADOR 2015`}
            />
          </Grid>
          <Grid item xs={3}>
            <img src={thumb1} width="95%" />
          </Grid>
          <Grid item xs={3}>
            <img src={thumb2} width="95%" />
          </Grid>
          <Grid item xs={3}>
            <img src={thumb3} width="95%" />
          </Grid>
          <Grid item xs={3}>
            <img src={thumb4} width="95%" />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  )
}

export default MeramexairPage
