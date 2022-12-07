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
  background-color: #D9D9D9;
`

const LogoButton = styled.ul`
  margin-top: 0;
  // width: 353px;
  // align-items: center;
`

const NavButton = styled.ul`
  //width: 189px;
  //height: 140px;
  margin-top: 0px;
  padding-top: 58px;
  padding-bottom: 58px;
  text-transform: uppercase;
  text-align: center;
  :hover {
    background-color: #E81818;
  }
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
        <Grid container>
          <Grid item xs={3}>
            <LogoButton>
              <img src={pmjLogo} />
            </LogoButton>
          </Grid>
          <Grid item xs={9}>
            <Grid container columns={10}>
              <Grid item xs={2}>
                <NavButton>
                  <NavLink to="/" activeStyle={{"background-color": "#E81818"}}>Home</NavLink>
                </NavButton>
              </Grid>
              <Grid item xs={2}>
                <NavButton>
                  <NavLink to="/nosotros/intro">Nosotros</NavLink>
                </NavButton>
              </Grid>
              <Grid item xs={2}>
                <NavButton onClick={handleClick} id="proyectos-button">
                  <NavLink to="/proyectos">Proyectos</NavLink>
                </NavButton>
                <Menu
                  id="proyectos-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "proyectos-button",
                  }}
                  TransitionComponent={Fade}
                >
                  <MenuList>
                    <MenuItem onClick={handleClose}>Corporativos</MenuItem>
                    <MenuItem onClick={handleClose}>Comerciales</MenuItem>
                    <MenuItem onClick={handleClose}>Inmobiliarios</MenuItem>
                  </MenuList>
                </Menu>
              </Grid>
              <Grid item xs={2}>
                <NavButton>Servicios</NavButton>
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
