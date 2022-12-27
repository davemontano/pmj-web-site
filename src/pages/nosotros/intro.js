import React from "react"
import styled from "@emotion/styled"

import ProjectsFooter from "../../components/projectsFooter"

import teamJumbo from "../../images/team-jumbo.png"
import teamJumbo2 from "../../images/team-jumbo-2.png"

const AboutUsSection = styled.section`
  padding-left: 107px;
  padding-right: 107px;
  padding-top: 115px;
  padding-bottom: 115px;
`

const AboutUsTitle = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 30px;
  text-transform: uppercase;
  padding-bottom: 25px;
  color: #322b2b;
`

const AboutUsText = styled.article`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  text-indent: 3px;
`

const OurHistorySection = styled.section`
  padding-left: 107px;
  padding-right: 107px;
  padding-top: 100px;
  padding-bottom: 100px;
`

const OurHistoryTitle = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 30px;
  text-transform: uppercase;
  padding-bottom: 25px;
  color: #322b2b;
`

const OurHistoryText = styled.article`
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 29px;
  text-indent: 3px;
`

const IntroPage = () => {
  return (
    <>
      <img src={teamJumbo} width="100%" />
      <AboutUsSection>
        <AboutUsTitle>Nosotros</AboutUsTitle>
        <AboutUsText>
          <p>
            Nuestra pasión es inspirar, a nuestros clientes y nuestro equipo de
            trabajo, la búsqueda de una nueva experiencia de vida en todo
            momento.
          </p>
          <p>
            Para conseguirlo nos actualizamos constantemente en procesos,
            metodologías y tecnología para el diseño y la construcción, para
            crear espacios que enriquezcan las experiencias de sus usuarios, de
            manera tangible.
          </p>
          <p>
            Con esta filosofía y con el compromiso de hacer las cosas bien,
            desde más de 30 años, diseñamos y construimos espacios corporativos,
            comerciales y habitacionales, que inspiran a vivir con plenitud cada
            momento.
          </p>
          <p>
            Tenemos una trayectoria comprobada, siempre a la vanguardia en
            arquitectura, diseño y construcción, y ofrecemos a nuestros clientes
            una relación justa entre precio y calidad.
          </p>
        </AboutUsText>
      </AboutUsSection>
      <img src={teamJumbo2} width="100%" />
      <OurHistorySection>
        <OurHistoryTitle>Nuestra Historia</OurHistoryTitle>
        <OurHistoryText>
          <p>
            Pedro Moreno Jarrín es un arquitecto con amplia experiencia cuya
            trayectoria se destaca en Diseño Arquitectónico, cuya trayectoria se
            destaca en diseño arquitectónico y diseño interior. Inicio su
            carrera llevando a cabo, de manera independiente, decenas de
            proyectos como Diseñador y Arquitecto. Pedro es un apasionado por su
            carrera, es una persona inquieta que siempre está buscando aprender
            más. Su filosofía de vida y de trabajo es ir un paso más allá de lo
            que está bien, para hacerlo excepcional y único.
          </p>
          <p>
            En el 2008, impulsado por esa filosofía, junto a un equipo de
            profesionales expertos en las distintas áreas de la arquitectura y
            la construcción, Pedro Moreno creó la empresa PMJ. Desde entonces en
            PMJ ejecutamos, de manera exitosa, proyectos en el área corporativa,
            comercial e inmobiliaria.
          </p>
          <p>
            La innovación y autenticidad en el diseño, eficiencia en los
            procesos de construcción, transparencia y seriedad en el manejo de
            los proyectos, ha hecho que muchas empresas líderes en el país y la
            región confíen en nosotros para el diseño y construcción de sus
            espacios corporativos y comerciales.
          </p>
          <p>
            Para aprovechar las capacidades del equipo de PMJ para ofrecer
            servicios a un sector más amplio de la sociedad, así como fomentar
            el crecimiento y la sostenibilidad de la empresa, en PMJ
            incursionamos en el desarrollo de proyectos inmobiliarios. Hoy en
            día contamos con un sólido ecosistema de diseño, construcción y
            comercialización inmobiliaria. La planificación, ejecución, manejo
            de proyectos, calidad en diseño y construcción, y el servicio al
            cliente, nos ha permitido entregar más de 500 viviendas, que
            equivalen a más de 500 historias de clientes satisfechos.
          </p>
        </OurHistoryText>
      </OurHistorySection>
      <ProjectsFooter
        firstLink={{ text: "Equipo", url: "/nosotros/equipo" }}
        secondLink={{ text: "Sostenibilidad", url: "/nosotros/sostenibilidad" }}
      />
    </>
  )
}

export default IntroPage
