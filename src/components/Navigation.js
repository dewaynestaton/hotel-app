import React from 'react';
import './Navigation.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => {
    return (
        <div>
            <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className="navbar--brand" href="#home">HOTEL APP</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="navbar--links">
                            <Nav.Link href="#home">Stays</Nav.Link>
                            <Nav.Link href="#login">Login</Nav.Link>
                            <Nav.Link href="#signup">Sign Up</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation;