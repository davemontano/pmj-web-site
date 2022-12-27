import React from "react"
import styled from "@emotion/styled"

import Box from "@mui/material/Box"

import ProjectsFooter from "../../components/projectsFooter"

import jumboImage from "../../images/sost-jumbo.png"
import ecoImage from "../../images/eco-image.png"
import edgeLogo from "../../images/edge-logo.png"

const PageTitle = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 37px;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: #322b2b;

  padding-left: 100px;
  padding-right: 100px;
  padding-top: 60px;
`

const PageArticle = styled.article`
  padding-left: 100px;
  padding-right: 100px;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 29px;

  color: #898888;
`

const ImageContainer = styled.div`
    display: table;
    margin: auto;
    padding-top: 60px;
`

const SostenibilidadPage = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <img src={jumboImage} width="100%" style={{ maxHeight: "816px" }} />
        <PageTitle>Sostenibilidad</PageTitle>
        <PageArticle>
          <p>
            Estamos en constante innovación para el desarrollo de procesos de
            diseño y construcción. Utilizamos técnicas y materiales que
            signifiquen el menor impacto posible en el medio ambiente.
            Trabajamos en el desarrollo de procesos de diseño eficiente de agua,
            energía y CO2, tomando en cuenta las condiciones particulares del
            sitio para aprovecharlo y así lograr que nuestros espacios sean
            eficientes en términos energéticos y funcionales.
          </p>
          <p>
            Nuestro proyecto <b>Parques de Galicia II</b> cuenta con la
            certificación EDGE (Excellence in Design for Greater Efficiencies).
            Y todos nuestros proyectos son diseñados y construidos con
            parámetros de eficiencia similares.
          </p>
        </PageArticle>
        <ImageContainer><img src={ecoImage} /></ImageContainer>
        <ImageContainer><img src={edgeLogo} /></ImageContainer>
      </Box>
      <ProjectsFooter
        firstLink={{ text: "Equipo", url: "/nosotros/equipo" }}
        secondLink={{ text: "Historia", url: "/nosotros/Intro" }}
      />
    </>
  )
}

export default SostenibilidadPage
