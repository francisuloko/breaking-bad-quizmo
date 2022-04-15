import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

export default function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="d-none d-md-block" href="/">Breaking Bad Quizmo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Characters</Nav.Link>
            <Nav.Link href="/quiz">Quiz</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
