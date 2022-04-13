import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

export default function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Breaking Bad Quizmo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/quiz">Quiz</Nav.Link>
            <Nav.Link href="/">Characters</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
