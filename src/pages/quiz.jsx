import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Container } from 'react-bootstrap';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import RandomCharacter from '../app/random';
import { fetchAllCharacters } from '../slices/characters/all';

const Quiz = () => {
  const dispatch = useDispatch();
  const { allCharacters } = useSelector((state) => state.allCharacters);

  const random = RandomCharacter(allCharacters);
  const [options, setOptions] = useState([random(), random(), random()]);
  const [character, setChar] = useState(options[Math.floor(Math.random() * 3)]);
  const [result, setResult] = useState([]);

  const handleScore = (choice) => {
    const answer = choice === character.name ? <CheckIcon htmlColor="green" /> : <CloseIcon htmlColor="red" />;
    setResult([
      ...result,
      answer,
    ]);
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
    <Container className="text-center p-2">
      <h3>WHO IS THIS CHARACTER?</h3>
      <div className="character">
        <img src={character.img} alt="Who is this character?" />
      </div>
      <p className="m-0 p-2">
        {
          result
        }
      </p>
      <Container className="options d-flex align-items-center justify-content-center">
        <Button color="primary" value={options[0].name} onClick={handleClick} type="button">{options[0].name}</Button>
        <Button color="primary" value={options[1].name} onClick={handleClick} type="button">{options[1].name}</Button>
        <Button color="primary" value={options[2].name} onClick={handleClick} type="button">{options[2].name}</Button>
      </Container>
    </Container>
  );
};

export default Quiz;
