import React from "react"
import styled from "@emotion/styled"

import Grid from "@mui/material/Grid"

import FacebookIcon from "@mui/icons-material/Facebook"
import TwitterIcon from "@mui/icons-material/Twitter"
import InstagramIcon from "@mui/icons-material/Instagram"
import LinkedInIcon from "@mui/icons-material/LinkedIn"

const FooterContainer = styled.footer`
  height: 302px;
  width: 100%;
  background-color: #322b2b;
  margin-top: 100px;
`

const IconsContainer = styled.div`
  width: 222px;
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 30px;
  padding-left: 64px;
`

const FollowUs = styled.p`
  padding-top: 25px;
  padding-left: 64px;
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 21px;
  color: #ffffff;
`

const FooterDivider = styled.hr`
  border: 1px solid rgba(255, 255, 255, 0.25);
`

const Footer = () => {
  return (
    <FooterContainer>
      <Grid container>
        <Grid item xs={7}>
          <FollowUs>Siguenos</FollowUs>
          <IconsContainer>
            <FacebookIcon sx={{ fontSize: "48px" }} htmlColor="#FFFFFF" />
            <TwitterIcon sx={{ fontSize: "48px" }} htmlColor="#FFFFFF" />
            <InstagramIcon sx={{ fontSize: "48px" }} htmlColor="#FFFFFF" />
            <LinkedInIcon sx={{ fontSize: "48px" }} htmlColor="#FFFFFF" />
          </IconsContainer>
        </Grid>
        <Grid item xs={5}>
          Contactanos
        </Grid>
      </Grid>
    </FooterContainer>
  )
}

export default Footer
