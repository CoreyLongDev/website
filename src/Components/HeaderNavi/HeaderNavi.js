import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import './HeaderNavi.css'
import Logo from '../HeaderNavi/logoGradient.png'

const HeaderNavi = () => {
    return (
        <>
            <div id="header">
                <Nav.Link href="./">
                <img id='logo' src={Logo} alt='Personel brand logo for software developer Corey Long.' />
                </Nav.Link>
                <Navbar>
                    <Container className="navigation">
                        <Nav.Link href="./web">Web</Nav.Link>
                        <Nav.Link href="./games">Games</Nav.Link>
                        <Nav.Link href="./about">About</Nav.Link>
                        <Nav.Link href="./contact">Contact</Nav.Link>
                    </Container>
                </Navbar>
                <div className="clear"></div>
            </div>
        </>
    )
}

export default HeaderNavi