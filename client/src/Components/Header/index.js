import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import Auth from '../../utils/auth'


function Header() {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };
    return(
        <Navbar bg="black" expand="lg" className="fixed-top mb-3">
            <Container>
                <Navbar.Brand href="#home" style={{ "color": "white"}}>Rise</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#link" style={{ "color": "white"}}>Character</Nav.Link>
                    <Nav.Link href="/login" style={{ "color": "white"}}>Login</Nav.Link>
                    <Nav.Link href="/signup" style={{ "color": "white"}}>Signup</Nav.Link>
                    
                    <Button onClick={logout}>Logout</Button>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;