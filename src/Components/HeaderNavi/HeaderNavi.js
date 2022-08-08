import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import './HeaderNavi.css'
import Logo from '../HeaderNavi/logoGradient.png'

const HeaderNavi = () => {
    return (
        <>
            <div id="header">
                <img id='logo' src={Logo} alt='Personel brand logo for software developer Corey Long.' />

                <Navbar>
                    <Container className="navigation">
                        <Nav.Link href="./Work">Work</Nav.Link>
                        <Nav.Link href="./About">About</Nav.Link>
                        <Nav.Link href="./Contact">Contact</Nav.Link>
                    </Container>
                </Navbar>
                <div className="clear"></div>
            </div>
        </>
    )
}

export default HeaderNavi