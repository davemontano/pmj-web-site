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
  color: #3f3f3f;
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
  color: #6e6e6e;
`

const CardDivider = styled.hr`
  border: 3px solid rgba(0, 0, 0, 0.51);
  margin-top: 30px;
  margin-bottom: 30px;
  width: 141px;
  height: 0px;
`

const CardLinkContainer = styled.div`
  display: inline-block;
`
const CardLink = styled(Link)`
  font-size: 20px;
  font-weight: 500;
  color: #6e6e6e;
  vertical-align: middle;
  display: inline-block;
`

const SimpleLinkContainer = styled.div`
  vertical-align: middle;
`

const SimpleCardLink = styled(Link)`
  vertical-align: middle;
  display: inline-block;
  font-style: normal;
  font-weight: 700;
  font-size: 45px;
  line-height: 55px;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: #3f3f3f;
  text-decoration: underline;
  padding-top: 106px;
`

const Card = ({ header, content, link, simple }) => {
  return (
    <>
      <CardContainer>
        {!simple ? (
          <>
            <CardHeader>{header}</CardHeader>
            <CardBody>{content}</CardBody>
            {link && (
              <CardLinkContainer>
                <CardDivider />
                <CardLink to={link.url}>
                  {link.text} <ArrowForwardIosIcon />
                </CardLink>
              </CardLinkContainer>
            )}
          </>
        ) : (
          <>
            <SimpleLinkContainer>
              <SimpleCardLink to={link.url}>
                {link.text} <ArrowForwardIosIcon />
              </SimpleCardLink>
            </SimpleLinkContainer>
          </>
        )}
      </CardContainer>
    </>
  )
}

export default Card
