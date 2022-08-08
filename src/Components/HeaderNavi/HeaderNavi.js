import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import './HeaderNavi.css'

const HeaderNavi = () => {
    return(
    <>
        <Navbar>
            <Container className="navigation">
                <Nav.Link href="./Work">Work</Nav.Link>
                <Nav.Link href="./About">About</Nav.Link>
                <Nav.Link href="./Contact">Contact</Nav.Link>
            </Container>
        </Navbar>
        
    </>
    )
}

export default HeaderNavi