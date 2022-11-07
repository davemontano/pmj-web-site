import React from "react"
import styled from "@emotion/styled"

import { Link } from "gatsby"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"

const CardContainer = styled.article`
  // text-align: center;
  align-items: center;
  padding-left: 110px;
  padding-right: 110px;
  padding-top: 171px;
  margin: auto;
  width: 729px;
`

const CardHeader = styled.h2`
  white-space: normal;
  text-transform: uppercase;
  font-size: 30px;
  font-weight: 700;
  color: #3F3F3F;
  letter-spacing: 0.07em;
  line-height: 126%;
  width: 511px;
`

const CardBody = styled.p`
  white-space: normal;
  font-size: 24px;
  font-weight: 300;
  font-style: normal;
  width: 520px;
  line-height: 130%;
  color: #6E6E6E;
`

const CardDivider = styled.hr`
  border: 3px solid rgba(0, 0, 0, 0.51);
  margin-top: 30px;
  margin-bottom: 30px;
  width: 100%;
`

const CardLinkContainer = styled.div`
  display: inline-block;
`
const CardLink = styled(Link)`
  font-size: 20px;
  font-weight: 500;
  color: #6E6E6E;
  vertical-align: middle;
  display: inline-block;
`

const Card = ({ header, content, link }) => {

  return (
    <>
      <CardContainer>
        <CardHeader>{header}</CardHeader>
        <CardBody>{content}</CardBody>
        {link && (
          <CardLinkContainer>
            <CardDivider />
            <CardLink to={link.url}>{link.text} <ArrowForwardIosIcon /></CardLink>
          </CardLinkContainer>
        )}
      </CardContainer>
    </>
  )
}

export default Card
