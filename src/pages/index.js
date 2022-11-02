import * as React from "react"
import NavBar from "../components/navbar"
import HomeCarousel from "../components/homeCarousel"
import styled from "@emotion/styled";
import Card from "../components/card";

import homeCard1 from "../images/home-card-1.png"

const SectionsContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-auto-columns: minmax(0, 1fr);
  grid-auto-flow: column;
`

const IndexPage = () => {
  return (
    <main>
      <NavBar></NavBar>
      <HomeCarousel></HomeCarousel>
      <SectionsContainer>
        <img src={homeCard1} width="100%" height={622} />
        <Card header="Planificacion, Diseno y Construccion" content="Creamos espacios que enriquezcan las experiencias de sus usuarios de manera tangible." />
      </SectionsContainer>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>PMJ Arquitectos</title>
