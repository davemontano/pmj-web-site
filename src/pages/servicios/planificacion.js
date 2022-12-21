import React from "react"
import styled from "@emotion/styled"

import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"

import planificacionJumbo from "../../images/planificacion-jumbo.png"

const QuoteContainer = styled.article`
  padding-top: 115px;
  padding-left: 100px;
  padding-right: 100px;

  font-style: italic;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;

  color: #757575;
`

const PageSubtitle = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 37px;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: #3f3f3f;

  padding-left: 100px;
  padding-right: 100px;
  padding-top: 25px;
  padding-bottom: 25px;
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

const PlanificacionPage = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <img
          src={planificacionJumbo}
          width="100%"
          style={{ maxHeight: "816px" }}
        />
        <QuoteContainer>
          <q>
            Utilizamos todos nuestros recursos y tiempo en entender a
            profundidad las necesidades y expectativas de nuestros clientes.
            Trabajamos en esfuerzo colectivo con prácticas de diseño
            vanguardistas y eficientes, para satisfacer esas necesidades y
            sobrepasar esas expectativas. Esta es la clave del éxito en nuestros
            proyectos.
          </q>
          <p>
            Pedro Moreno Jarrín <br />
            Gerente General.
          </p>
        </QuoteContainer>
        <PageSubtitle>
          Planificación, Diseño Arquitectónico y Diseño Interior
        </PageSubtitle>
        <PageArticle>
          <p>
            La configuración de los espacios tiene un impacto directo en el
            bienestar de las personas y, como consecuencia, en la productividad.
            Sabemos que cada proyecto es único y por eso nuestro proceso de
            diseño comienza con una comprensión profunda de las necesidades y
            expectativas de nuestros clientes y los usuarios finales de los
            espacios. De esta manera definimos los objetivos que queremos y así
            logramos crear espacios capaces de aportar al bienestar de sus
            usuarios y cumplir con los objetivos planteados.
          </p>
          <p>
            En PMJ concebimos la planificación y el diseño de espacios como un
            proceso global en el que todas las decisiones estructurales,
            exteriores e interiores, se toman de manera articulada. Por eso,
            nuestro equipo de profesionales expertos en Diseño Arquitectónico y
            Diseño Interior trabaja de manera integrada y colaborativa gracias a
            la utilización de herramientas tecnológicas de última generación.
            Nuestra metodología de modelado 3D y la integración BIM con otras
            ingenierías, nos permiten acelerar los procesos de diseño y dibujo,
            concebir varias propuestas de forma simultánea, acceder
            instantáneamente a cambios y actualizaciones e identificar
            conflictos constructivos en etapas tempranas para garantizar una
            óptima prevención de riesgos.
          </p>
          <p>
            En todo el proceso de diseño, buscamos que la experiencia de
            nuestros clientes sea fluida y emocionante. Nuestras herramientas
            tecnológicas nos permiten obtener un nivel de representación claro y
            casi realista, para ofrecer una experiencia visual a través de
            imágenes, videos, maquetas interactivas y ambientes virtuales.
          </p>
        </PageArticle>
      </Box>
    </>
  )
}

export default PlanificacionPage
