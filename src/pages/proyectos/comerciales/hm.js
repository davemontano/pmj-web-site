import React from "react"
import styled from "@emotion/styled"

import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import ProjectCard from "../../../components/projectCard"

import main from "../../../images/hm/main.jpeg"
import thumb1 from "../../../images/hm/thumb-1.jpeg"
import thumb2 from "../../../images/hm/thumb-2.jpeg"
import thumb3 from "../../../images/hm/thumb-3.jpeg"

const PageContainer = styled.div`
  padding-top: 150px;
  padding-left: 48px;
  background-color: #f3f3f3;
`

const HmPage = () => {
  return (
    <PageContainer>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item xs={6}>
            <img src={main} width="90%" />
          </Grid>
          <Grid item xs={6}>
            <ProjectCard
              title="H&M Ecuador"
              subtitle="Industria"
              bodyDescription={`Problema a solucionar, concepto de la solucion`}
            />
          </Grid>
          <Grid item xs={3}>
            <img src={thumb1} width="95%" style={{maxHeight: "228px"}}/>
          </Grid>
          <Grid item xs={3}>
            <img src={thumb2} width="95%" style={{maxHeight: "228px"}}/>
          </Grid>
          <Grid item xs={3}>
            <img src={thumb3} width="95%" style={{maxHeight: "228px"}}/>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  )
}

export default HmPage
