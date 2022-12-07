import React from "react"
import styled from "@emotion/styled"

import Grid from "@mui/material/Grid"

const Container = styled.div`
  height: 235px;
  background: rgba(217, 217, 217, 0.33);
`

const ProjectsFooter = () => {
  return <Container>
    <Grid container>
        <Grid item xs={3} />
        <Grid item xs={3}></Grid>
    </Grid>
  </Container>
}

export default ProjectsFooter
