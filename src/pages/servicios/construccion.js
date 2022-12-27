import React from "react"
import styled from "@emotion/styled"

import ProjectsFooter from "../../components/projectsFooter"
import Box from "@mui/material/Box"

import homeCard2 from "../../images/home-card-2.jpg"

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

const ConstruccionPage = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <img src={homeCard2} width="100%" style={{ maxHeight: "816px" }} />
        <QuoteContainer>
          <p>
            En PMJ construimos lo que diseñamos. Por eso contamos con un equipo
            formado por profesionales de primer nivel, que hace viables nuestras
            propuestas.
          </p>
        </QuoteContainer>
        <PageSubtitle>CONSTRUCCIÓN</PageSubtitle>
        <PageArticle>
          <p>
            La experiencia de varios años dirigiendo obras en diferentes ámbitos
            de la construcción nos da la tranquilidad de saber que podemos hacer
            las cosas bien. Esto significa entregar obras de calidad 100%
            terminadas que mantienen el concepto original de diseño, tienen un
            impacto positivo en su entorno y para sus usuarios, y respetan las
            normas de los órganos reguladores.
          </p>
          <p>
            Desde la etapa inicial, nuestros procesos de Planificación y
            Dirección Técnica y Administrativa logran una máxima eficiencia en
            los recursos humanos y económicos. Así entregamos a nuestros
            clientes proyectos de alta calidad en los tiempos establecidos.
          </p>
          <p>
            Durante el proceso de construcción somos muy exigentes en el
            cumplimiento de las normas medioambientales y de seguridad, tando
            interna como externa. Nuestras obras se caracterizan tanto por el
            orden, la precisión y la limpieza. Gracias a nuestros procesos de
            construcción somos capaces de optimizar los recursos y minimizar
            riesgos de trabajo y afectación ambiental. Estamos conscientes del
            impacto que tenemos en el entorno cuando construimos. Por eso antes,
            durante y después de las obras, mantenemos una relación de respeto y
            reciprocidad con nuestros vecinos.
          </p>
          <p>
            Gracias a nuestra experiencia en planificación, diseño y
            construcción, los proyectos que realizamos son viables y cumplen con
            los objetivos de los clientes. Además, al ser responsables de toda
            su ejecución, logramos también una mayor eficiencia económica
          </p>
        </PageArticle>
      </Box>
      <ProjectsFooter
          firstLink={{ text: "Planificacion y Diseno", url: "/servicios/planificacion" }}
          secondLink={{
            text: "Gestion Inmobiliaria",
            url: "/servicios/gestion",
          }}
        />
    </>
  )
}

export default ConstruccionPage
