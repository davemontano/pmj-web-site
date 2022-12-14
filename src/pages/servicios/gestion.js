import React from "react"
import styled from "@emotion/styled"

import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"

import planificacionJumbo from "../../images/planificacion-jumbo.png"
import calidad from "../../images/servicios/icons/calidad.png"
import garantia from "../../images/servicios/icons/garantia.png"
import gestion from "../../images/servicios/icons/gestion.png"
import importancia from "../../images/servicios/icons/importancia.png"

const AFTER_SALES_URL = "https://eventos.pmj.ec/solicitud-de-incidencias"

const MainArticle = styled.article`
  padding-top: 115px;
  padding-left: 100px;
  padding-right: 100px;

  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 29px;

  color: #898888;
`

const Divider = styled.hr`
  margin-top: 50px;
  margin-bottom: 35px;
  border-top: 1px solid #000000;
  width: 1200px;
  height: 0;
`

const ButtonContainer = styled.div`
  display: block;
  text-align: center;
`

const AfterSalesButton = styled.button`
  width: 322px;
  height: 64px;
  background: #323030;
  border-radius: 10px;

  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.07em;
  text-transform: uppercase;

  color: #ffffff;
  cursor: pointer;
  margin-bottom: 175px;
`

const SectionContainer = styled.section`
  background-color: ${(props) => (props.dark ? "#F0F0F0" : "#FFFFFF")};
  padding-right: 185px;
  padding-left: 185px;
  padding-top: 100px;
  padding-bottom: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const SectionTitle = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 37px;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: #3f3f3f;
`

const SectionText = styled.article`
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 29px;
  color: #6e6e6e;
`

const GestionPage = () => {
  const redirectToAfterSales = () => {
    window.location.href = AFTER_SALES_URL
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <img
          src={planificacionJumbo}
          width="100%"
          style={{ maxHeight: "816px" }}
        />
        <MainArticle>
          <p>
            En PMJ Arquitectos planificamos, dise??amos y construimos proyectos
            inmobiliarios innovadores y de primera calidad para ofrecer a
            nuestros clientes soluciones de vivienda que satisfagan sus
            verdaderas expectativas y necesidades.
          </p>
          <p>
            Nuestro ecosistema cuenta con una actualizaci??n constante en cuanto
            a procesos tecnol??gicos, t??cnicos y administrativos, para garantizar
            la mejor calidad, dise??o altamente funcional, precio justo y
            excelente servicio al cliente.
          </p>
        </MainArticle>
        <Divider />
        <ButtonContainer>
          <AfterSalesButton onClick={redirectToAfterSales}>
            ACCEDER A POSTVENTA
          </AfterSalesButton>
        </ButtonContainer>

        <Grid container>
          <SectionContainer dark>
            <Grid item xs={4}>
              <img src={calidad} />
            </Grid>
            <Grid item xs={8}>
              <SectionTitle>Calidad</SectionTitle>
              <SectionText>
                <p>
                  En PMJ Arquitectos utilizamos materiales de primera calidad.
                  Nuestro equipo de dise??o y construcci??n cuenta con la
                  experiencia necesaria para garantizar la seguridad, confianza
                  y durabilidad que una vivienda requiere.
                </p>
              </SectionText>
            </Grid>
          </SectionContainer>
          <SectionContainer>
            <Grid item xs={8}>
              <SectionTitle>Gestion Inmobiliaria</SectionTitle>
              <SectionText>
                <p>
                  Mantenemos una estrecha relaci??n con cada uno de nuestros
                  clientes y nos interesamos en sus opiniones para entender y
                  satisfacer sus necesidades.
                </p>
                <p>
                  Aprovechando la experiencia y buenas relaciones con entidades
                  financieras, nuestro servicio incluye asesor??a y
                  acompa??amiento en el proceso de financiamiento. Contamos con
                  varios canales de comunicaci??n que permiten que nuestros
                  usuarios est??n al tanto de cada proyecto en desarrollo.
                </p>
              </SectionText>
            </Grid>
            <Grid item xs={1} />
            <Grid item xs={3}>
              <img src={gestion} />
            </Grid>
          </SectionContainer>
          <SectionContainer dark>
            <Grid item xs={4}>
              <img src={garantia} />
            </Grid>
            <Grid item xs={8}>
              <SectionTitle>Garantia</SectionTitle>
              <SectionText>
                <p>
                  En PMJ llevamos m??s de 15 a??os realizando proyectos
                  inmobiliarios. En cada proyecto, levantamos estudios de
                  factibilidad en t??rminos t??cnicos y econ??micos para determinar
                  su viabilidad. As?? aseguramos proyectos 100% viables y
                  confiables.
                </p>
              </SectionText>
            </Grid>
          </SectionContainer>
          <SectionContainer>
            <Grid item xs={8}>
              <SectionTitle>
                LA IMPORTANCIA DEL SECTOR INMOBILIARIO EN LA ECONOM??A DEL PA??S
              </SectionTitle>
              <SectionText>
                <p>
                  La industria inmobiliaria es una de las m??s importantes para
                  el desarrollo econ??mico de nuestro pa??s.
                </p>
                <p>
                  Las empresas constructoras satisfacen las necesidades de
                  infraestructura y vivienda de la poblaci??n y mejoran su
                  calidad de vida.
                </p>
                <p>
                  En el proceso se movilizan importantes recursos econ??micos
                  p??blicos y privados que incentivan el crecimiento econ??mico
                </p>
                <p>
                  Las obras en construcci??n generan una importante cantidad de
                  fuentes de trabajo
                </p>
                <p>
                  Fomenta una importante cantidad de actividades directo e
                  indirecto en otros sectores econ??micos del pa??s.
                </p>
              </SectionText>
            </Grid>
            <Grid item xs={1} />
            <Grid item xs={3}>
              <img src={importancia} />
            </Grid>
          </SectionContainer>
        </Grid>
      </Box>
    </>
  )
}

export default GestionPage
