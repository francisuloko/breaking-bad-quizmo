import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

export default function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Breaking Bad Quizmo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Quiz</Nav.Link>
            <Nav.Link href="/characters">Characters</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
