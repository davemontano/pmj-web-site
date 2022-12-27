import React from "react"
import styled from "@emotion/styled"

import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import { Link } from "gatsby"
import ProjectsFooter from "../../components/projectsFooter"

import projectsJumbo from "../../images/projects-jumbo.png"
import cci from "../../images/multicines/cci.png"
import meramexair from "../../images/comerciales/meramexair.png"

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
  bottom: 5px;
  left: 100px;
`

const ProjectTitle = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 37px;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  padding-top: 128px;
  padding-left: 120px;
  color: #3f3f3f;
`

const ImageText = styled.h3`
  position: absolute;
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 26px;
  letter-spacing: 0.07em;
  bottom: 11px;
  color: #ffffff;
  left: 35px;
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

const ComercialesPage = () => {
  return (
    <>
      <ImageContainer>
        <img src={projectsJumbo} width="100%" />
        <BannerText>Comerciales</BannerText>
      </ImageContainer>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item xs={6}>
            <ImageContainer>
              <img src={cci} width="100%" height="370px" />
              <ImageLink to="/proyectos/comerciales/multicines">Multicines Ecuador</ImageLink>
            </ImageContainer>
          </Grid>
          <Grid item xs={6}>
            <ImageContainer>
              <img src={meramexair} width="100%" height="370px" />
              <ImageLink>Restaurantes Aeropuerto Quito</ImageLink>
            </ImageContainer>
          </Grid>
        </Grid>
        <ProjectsFooter
        firstLink={{ text: "Corporativos", url: "/proyectos/corporativos" }}
        secondLink={{ text: "Inmobiliarios", url: "/proyectos/inmobiliarios" }}
      />
      </Box>
    </>
  )
}

export default ComercialesPage
