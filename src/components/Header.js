import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="#">To-Do List</Navbar.Brand>
    <Nav className="ml-auto">
      <Nav.Link href="#">Home</Nav.Link>
    </Nav>
  </Navbar>
);

export default Header;
