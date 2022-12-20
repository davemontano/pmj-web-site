import React from "react"
import styled from "@emotion/styled"

const CardContainer = styled.div`
  display: block;
`

const MemberPhoto = styled.img`
    display: block;
    margin: auto;
`

const RoleText = styled.p`
  font-weight: 600;
  font-size: 11px;
  line-height: 13px;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #6e6e6e;
`

const NameText = styled.h3`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: #000000;
`

const TeamMemberCard = ({ photo, name, memberRole }) => {
  return (
    <CardContainer>
      <MemberPhoto src={photo} />
      <RoleText>{memberRole}</RoleText>
      <NameText>{name}</NameText>
    </CardContainer>
  )
}

export default TeamMemberCard
