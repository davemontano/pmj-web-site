import React from "react"
import styled from "@emotion/styled"

const NavContainer = styled.nav`
    position: fixed;
    display: flex;
    height: 140px;
    z-index: 1;
    top: 0;
`

const LogoButton = styled.ul`
    width: 353px;
    align-items: center;
`

const NavButton = styled.ul`
    width: 189px;
    height: 140px;
    :hover {
        background-color: red;
    }
`

const NavBar = () => {
    return <>
        <NavContainer>
            <LogoButton></LogoButton>
            <NavButton>Home</NavButton>
            <NavButton>Nosotros</NavButton>
            <NavButton>Proyectos</NavButton>
            <NavButton>Servicios</NavButton>
            <NavButton>Contacto</NavButton>
        </NavContainer>
    </>
}

export default NavBar