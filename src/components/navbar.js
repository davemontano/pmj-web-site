import React from "react"
import styled from "@emotion/styled"

import Grid from "@mui/material/Grid"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import MenuList from "@mui/material/MenuList"
import Fade from "@mui/material/Fade"
import { Link } from "gatsby"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"

import pmjLogo from "../images/pmj-logo.png"

const NavContainer = styled.nav`
  position: fixed;
  height: 140px;
  width: 100%;
  z-index: 1;
  top: 0;
  font-weight: bold;
  color: #fff;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  background-color: #525150;
`

const LogoButton = styled.div`
  margin-top: 0;
  padding-left: 100px;
  // width: 353px;
  // align-items: center;
`

const NavButton = styled.div`
  width: 189px;
  height: 24px;
  background-color: #525150;
  border: none;
  margin-top: 0px;
  padding-top: 58px;
  padding-bottom: 58px;
  text-transform: uppercase;
  text-align: center;
  :hover:after {
    background-color: #e81818;
  }
  :hover {
    background-color: #e81818;
  }

  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #ffffff;
`

const NavLink = styled(Link)`
  //text-align: center;
`

const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <NavContainer>
        <Grid container spacing={0}>
          <Grid item xs={3}>
            <LogoButton>
              <img src={pmjLogo} style={{ width: "6.9vw" }} />
            </LogoButton>
          </Grid>
          <Grid item xs={9}>
            <Grid container columns={10}>
              <Grid item xs={2}>
                <NavButton>
                  <NavLink to="/">Home</NavLink>
                </NavButton>
              </Grid>
              <Grid item xs={2}>
                <NavButton>
                  <NavLink to="/nosotros/intro">Nosotros</NavLink>
                </NavButton>
              </Grid>
              <Grid item xs={2}>
                <NavButton id="proyectos-button">
                  <NavLink to="/proyectos">Proyectos</NavLink>
                </NavButton>
              </Grid>
              <Grid item xs={2}>
                <NavButton id="servicios-button">
                  <Link to="/servicios">Servicios</Link>
                </NavButton>
              </Grid>
              <Grid item xs={2}>
                <NavButton>Contacto</NavButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </NavContainer>
    </>
  )
}

export default NavBar
