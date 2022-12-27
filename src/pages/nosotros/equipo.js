import React from "react"
import styled from "@emotion/styled"

import { Grid } from "@mui/material"
import TeamMemberCard from "../../components/teamMemberCard"
import ProjectsFooter from "../../components/projectsFooter"

import ourTeam from "../../images/our-team.png"

import pedroMoreno from "../../images/equipo/pedro-moreno.png"
import estelaCrespo from "../../images/equipo/estela-crespo.png"
import fernandoViteri from "../../images/equipo/fernando-viteri.png"
import miguelRivera from "../../images/equipo/miguel-rivera.png"
import pedroRodriguez from "../../images/equipo/pedro-rodriguez.png"
import jorgeVasquez from "../../images/equipo/jorge-vasquez.png"
import gabrielaMogollon from "../../images/equipo/gabriela-mogollon.png"
import alejandroArmas from "../../images/equipo/alejandro-armas.png"
import romelDiaz from "../../images/equipo/romel-diaz.png"
import enriqueMoreno from "../../images/equipo/enrique-moreno.png"

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
  color: #000000;
`

const TeamDescriptionText = styled.article`
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 29px;
  text-indent: 3px;
  color: #6e6e6e;
`

const TeamMembersSection = styled.section`
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 20px;
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
      <TeamMembersSection>
        <TeamDescriptionTitle>Dirección</TeamDescriptionTitle>
        <Grid container spacing={8}>
          <Grid item xs={4}>
            <TeamMemberCard
              photo={pedroMoreno}
              memberRole="Director General"
              name="Pedro Moreno J."
            />
          </Grid>
          <Grid item xs={4}>
            <TeamMemberCard
              photo={estelaCrespo}
              memberRole="Directora de Ventas Inmobiliaras"
              name="Estela Crespo V."
            />
          </Grid>
          <Grid item xs={4}>
            <TeamMemberCard
              photo={fernandoViteri}
              memberRole="Director de Desarrollo y Proyectos"
              name="Fernando Viteri F."
            />
          </Grid>
          <Grid item xs={4}>
            <TeamMemberCard
              photo={miguelRivera}
              memberRole="Director de Diseño"
              name="Miguel Rivera"
            />
          </Grid>
          <Grid item xs={4}>
            <TeamMemberCard
              photo={pedroRodriguez}
              memberRole="Director de Obras"
              name="Pedro Rodriguez"
            />
          </Grid>
          <Grid item xs={4}>
            <TeamMemberCard
              photo={jorgeVasquez}
              memberRole="Planificacion Financiera"
              name="Jorge Vasquez"
            />
          </Grid>
        </Grid>
        <TeamDescriptionTitle>Diseño</TeamDescriptionTitle>
        <Grid container spacing={8}>
          <Grid item xs={4}>
            <TeamMemberCard
              photo={gabrielaMogollon}
              memberRole="Diseño Arquitectonico"
              name="Gabriela Mogollon"
            />
          </Grid>
          <Grid item xs={4}>
            <TeamMemberCard
              photo={alejandroArmas}
              memberRole="Diseño Arquitectonico"
              name="Alejandro Armas"
            />
          </Grid>
        </Grid>
        <TeamDescriptionTitle>Construcción</TeamDescriptionTitle>
        <Grid container spacing={8}>
          <Grid item xs={4}>
            <TeamMemberCard
              photo={romelDiaz}
              memberRole="Ingenieria y Presupuestos"
              name="Romel Diaz"
            />
          </Grid>
          <Grid item xs={4}>
            <TeamMemberCard
              photo={enriqueMoreno}
              memberRole="Ingenieria y Presupuestos"
              name="Enrique Moreno"
            />
          </Grid>
        </Grid>
      </TeamMembersSection>
      <ProjectsFooter
        firstLink={{ text: "Nosotros", url: "/nosotros/intro" }}
        secondLink={{ text: "Sostenibilidad", url: "/nosotros/sostenibilidad" }}
      />
    </>
  )
}

export default EquipoPage
