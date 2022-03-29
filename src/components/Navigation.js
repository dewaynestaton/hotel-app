import React from 'react';
import './Navigation.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => {
    // function handleMouseOver() {}

    return (
        <div>
            <Navbar collapseOnSelect fixed="top" expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand className="navbar--brand" href="#home">HOTEL APP</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="navbar--links">
                            <Nav.Link href="#stays">Stays</Nav.Link>
                            <Nav.Link href="#flights">Flights</Nav.Link>
                            <Nav.Link href="#cars">Cars</Nav.Link>
                            <Nav.Link href="#login">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation;