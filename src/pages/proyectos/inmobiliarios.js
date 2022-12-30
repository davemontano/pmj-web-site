import React from "react"
import styled from "@emotion/styled"

import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import { Link } from "gatsby"
import ProjectsFooter from "../../components/projectsFooter"

import inmoJumbo from "../../images/inmo-jumbo.png"
import parquesMiranda from "../../images/inmobiliarios/parques-miranda.png"
import parquesGalicia from "../../images/inmobiliarios/parques-galicia.jpg"

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

const PageArticle = styled.article`
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 95px;
  padding-bottom: 90px;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 29px;

  color: #898888;
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
  color: #ffffff !important;
  :visited {
    color: #ffffff;
  }
`

const InmobiliariosPage = () => {
  return (
    <>
      <ImageContainer>
        <img src={inmoJumbo} width="100%" style={{ maxHeight: "816px", "object-fit": "fill" }} />
        <BannerText>Inmobiliarios</BannerText>
      </ImageContainer>
      <Box sx={{ flexGrow: 1 }}>
        <PageArticle>
          <p>
            Hace 15 años, PMJ incursiona en el desarrollo de Proyectos
            Inmobiliarios en el Valle de los Chillos. La excelente planificación
            y ejecución en el manejo y entrega de los mismos la ha hecho
            merecedora de la confianza de sus clientes. Con 11 proyectos y más
            de 500 unidades de vivienda en el Valle de los Chillos construidas
            hasta el 2022, PMJ Arquitectos no solo construye, crece junto a sus
            clientes.
          </p>
          <p>Pedro Moreno Jarrín <br />GERENTE GENERAL PMJ</p>
        </PageArticle>
        <Grid container>
          <Grid item xs={6}>
            <ImageContainer>
              <img src={parquesMiranda} width="100%" height="370px" />
              <ImageLink to="/proyectos/inmobiliarios/parques-miranda">
                Parques de Miranda
              </ImageLink>
            </ImageContainer>
          </Grid>
          <Grid item xs={6}>
            <ImageContainer>
              <img src={parquesGalicia} width="100%" height="370px" style={{"object-fit": "none"}} />
              <ImageLink to="/proyectos/inmobiliarios/parques-galicia">
                Parques de Galicia
              </ImageLink>
            </ImageContainer>
          </Grid>
        </Grid>
        <ProjectsFooter
          firstLink={{ text: "Corporativos", url: "/proyectos/corporativos" }}
          secondLink={{
            text: "Comerciales",
            url: "/proyectos/comerciales",
          }}
        />
      </Box>
    </>
  )
}

export default InmobiliariosPage
