import React from 'react'
import styled from "@emotion/styled"

const CardContainer = styled.article`
    text-transform: uppercase;
    padding-top: 206px;
    font-size: 26px;
    letter-spacing: 0.07em;
`

const BodyDescription = styled.p`
    text-transform: capitalize;
`

const ProjectCard = ({title, subtitle, bodyTitle, bodyDescription, location}) => {
    return <CardContainer>
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <br />
        <p>{bodyTitle}</p>
        <BodyDescription>{bodyDescription}</BodyDescription>
        <br />
        <p>{location}</p>
    </CardContainer>
}

export default ProjectCard