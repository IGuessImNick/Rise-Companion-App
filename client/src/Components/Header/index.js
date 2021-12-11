import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import Auth from '../../utils/auth'


function Header() {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };
    return(
        <Navbar bg="light" expand="lg" className="fixed-top mb-3">
            <Container>
                <Navbar.Brand href="#home">Rise</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Character</Nav.Link>
                    <NavDropdown title="Login" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                    <NavDropdown.Item href="/signup">Signup</NavDropdown.Item>
                    </NavDropdown>
                    <Button onClick={logout}>Logout</Button>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;