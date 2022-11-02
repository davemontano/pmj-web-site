import React from "react"
import styled from "@emotion/styled"

const CardContainer = styled.article`
    // text-align: center;
    align-items: center;
    padding-left: 110px;
    padding-right: 110px;
    margin: auto;
`

const CardHeader = styled.h2`
    white-space: normal;
    text-transform: uppercase;
`

const CardBody = styled.p`
    white-space: normal;
`

const CardDivider = styled.hr`
    border:  3px solid rgba(0, 0, 0, 0.51);
`

const Card = ({header, content}) => {
  return (
    <>
      <CardContainer>
        <CardHeader>{header}</CardHeader>
        <CardBody>{content}</CardBody>
        <CardDivider />
      </CardContainer>
    </>
  )
}

export default Card
