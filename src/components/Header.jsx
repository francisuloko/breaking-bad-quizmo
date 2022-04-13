import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';

export default function Header() {
  return (
    <Container>
      <h1>Breaking Bad Quizmo</h1>
      <Link to="/">
        Quiz
      </Link>
      <Link to="/characters">
        Characters
      </Link>
    </Container>
  );
}
