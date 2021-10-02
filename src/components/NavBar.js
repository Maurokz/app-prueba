import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'


export const NavBar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">SuperTienda</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#">Zapatilas</Nav.Link>
              <Nav.Link href="#">Buzos</Nav.Link>
              <Nav.Link href="#">Remeras</Nav.Link>
              <NavDropdown title="Otras Categorias" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Camperas</NavDropdown.Item>
                <NavDropdown.Item href="#">Pantalones</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">Joggins</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
