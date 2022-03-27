import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Navigation = () => {
    return (
        <div>
            <Navbar collapseOnSelect fixed="top" expands="sm" bg="dark" variant="dark">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link href="/">Explore</Nav.Link>
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link href="/signup">Sign Up</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation;