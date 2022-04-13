import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Container } from '@mui/material';
import RandomCharacter from '../app/random';
import { fetchAllCharacters } from '../slices/characters/all';

const Quiz = () => {
  const dispatch = useDispatch();
  // const { allCharacters } = useSelector((state) => state.allCharacters);
  const allCharacters = JSON.parse(localStorage.getItem('breakingBad'));

  const random = RandomCharacter(allCharacters);
  const [options, setOptions] = useState([random(), random(), random()]);
  const [character, setChar] = useState(options[Math.floor(Math.random() * 3)]);
  const [result, setResult] = useState();

  const handleScore = (choice) => {
    const answer = choice === character.name ? 'Right' : 'Wrong';
    setResult(answer);
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

  return (
    <Container>
      <h2>WHO IS THIS CHARACTER?</h2>
      <img src={character.img} alt="Who is this character?" />
      <p>
        {
          result
        }
      </p>
      <Container>
        <Button variant="contained" color="primary" value={options[0].name} onClick={handleClick} type="button">{options[0].name}</Button>
        <Button variant="contained" color="primary" value={options[1].name} onClick={handleClick} type="button">{options[1].name}</Button>
        <Button variant="contained" color="primary" value={options[2].name} onClick={handleClick} type="button">{options[2].name}</Button>
      </Container>
    </Container>
  );
};

export default Quiz;
