import React from "react"
import styled from "@emotion/styled"

import ourTeam from "../../images/our-team.png"

const TeamDescriptionSection = styled.section`
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 115px;
`

const TeamDescriptionTitle = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 37px;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: #322b2b;
`

const TeamDescriptionText = styled.article`
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 29px;
  text-indent: 3px;
  color: #6e6e6e;
`



const EquipoPage = () => {
  return (
    <>
      <img src={ourTeam} width="100%" />
      <TeamDescriptionSection>
        <TeamDescriptionTitle>Equipo</TeamDescriptionTitle>
        <TeamDescriptionText>
          <p>
            Somos un sólido equipo de profesionales en diseño, arquitectura y
            desarrollo de proyectos, unidos por una cultura de integridad y
            transparencia. Trabajamos en base a procesos de creación y
            construcción sostenibles, para encontrar soluciones de
            arquitectónicas centradas en nuestros usuarios.
          </p>
        </TeamDescriptionText>
      </TeamDescriptionSection>
    </>
  )
}

export default EquipoPage
