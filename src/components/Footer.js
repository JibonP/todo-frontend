import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => (
  <footer className="bg-dark text-white mt-5 p-4 text-center">
    <Container>
      <Row>
        <Col md="12">
          <p>&copy; {new Date().getFullYear()} To-Do List</p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
