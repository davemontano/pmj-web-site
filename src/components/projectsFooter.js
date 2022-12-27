import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

import Grid from "@mui/material/Grid"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"

const Container = styled.div`
  height: 235px;
  background: rgba(217, 217, 217, 0.33);
  margin-bottom: -100px;
`

const LinkDecorator = styled.hr`
  border: 1px solid rgba(0, 0, 0, 0.51);
  width: 280px;
  margin-top: 77px;
  margin-bottom: 57px;
`

const FooterLink = styled(Link)`
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 37px;
  color: #898888 !important;
  vertical-align: middle;
`

const LinkArrow = styled(ArrowForwardIosIcon)`
  height: 35px;
  vertical-align: middle;
  margin-left: 5px;
  color: #898888;
`

const ProjectsFooter = ({ firstLink, secondLink }) => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={2} />
        <Grid item xs={3}>
          <LinkDecorator />
        </Grid>
        <Grid item xs={2} />
        <Grid item xs={3}>
          <LinkDecorator />
        </Grid>
        <Grid item xs={2} />
        <Grid item xs={3} />
        <Grid item xs={3}>
          <FooterLink to={firstLink.url}>{firstLink.text}</FooterLink>
          <LinkArrow />
        </Grid>
        <Grid item xs={2} />
        <Grid item xs={3}>
          <FooterLink to={secondLink.url}>{secondLink.text}</FooterLink>
          <LinkArrow />
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </Container>
  )
}

export default ProjectsFooter
