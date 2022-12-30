import React from "react"
import styled from "@emotion/styled"

import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import ProjectCard from "../../../components/projectCard"

import main from "../../../images/zaimella/main.png"

const PageContainer = styled.div`
  padding-top: 150px;
  padding-left: 48px;
  background-color: #f3f3f3;
`

const ZaimellaPage = () => {
  return (
    <PageContainer>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item xs={6}>
            <img src={main} width="90%" />
          </Grid>
          <Grid item xs={6}>
            <ProjectCard
              title="Zaimella"
              subtitle="Industria"
              bodyDescription={`Problema a solucionar, concepto de la solucion`}
            />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  )
}

export default ZaimellaPage
