import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Container } from 'react-bootstrap';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import RandomCharacter from '../app/random';
import { fetchAllCharacters } from '../slices/characters/all';

const Quiz = () => {
  const allCharacters = JSON.parse(
    localStorage.getItem('breakingBadCharacters'),
  );
  const dispatch = useDispatch();
  const random = RandomCharacter(allCharacters);
  const [options, setOptions] = useState([random(), random(), random()]);
  const [character, setChar] = useState(options[Math.floor(Math.random() * 3)]);
  const [result, setResult] = useState([]);

  const handleScore = (choice) => {
    const answer = choice === character.name ? (
      <CheckIcon htmlColor="green" />
    ) : (
      <CloseIcon htmlColor="red" />
    );

    setResult([...result, answer]);
  };

  const handleClick = (e) => {
    const choice = e.target.value;
    handleScore(choice);
    setOptions([random(), random(), random()]);
  };

  useEffect(() => {
    dispatch(fetchAllCharacters());
    setChar(options[Math.floor(Math.random() * 3)]);
  }, [handleClick]);

  const controls = options.map((option) => (
    <Button color="primary" value={option.name} onClick={handleClick} type="button" key={option.id}>
      {option.name}
    </Button>
  ));

  return (
    <Container className="text-center p-2">
      <h3>WHO IS THIS CHARACTER?</h3>
      <div className="character">
        <img src={character.img} alt="Who is this character?" />
      </div>
      <p className="m-0 p-2">{result}</p>
      <Container className="options d-flex align-items-center justify-content-center">
        { controls }
      </Container>
    </Container>
  );
};

export default Quiz;
