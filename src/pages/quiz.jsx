import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import RandomCharacter from '../app/random';
import { fetchAllCharacters } from '../slices/characters/all';

const Quiz = () => {
  const dispatch = useDispatch();
  // const { allCharacters } = useSelector((state) => state.allCharacters);
  const allCharacters = JSON.parse(localStorage.getItem('breakingBad'));

  const random = RandomCharacter(allCharacters);
  const [options, setOptions] = useState({
    character: random(),
    control: random(),
  });

  useEffect(() => {
    dispatch(fetchAllCharacters());
  }, []);

  const handleScore = (choice) => {
    if (choice === options.character.name) {
      console.log('Win');
    } else {
      console.log('Lose');
    }
  };

  const handleClick = (e) => {
    const choice = e.target.value;
    console.log(choice, options.character.name);
    handleScore(choice);
    setOptions({
      character: random(),
      control: random(),
    });
  };

  return (
    <div>
      <h1>Quiz</h1>
      <h2>WHO IS THIS?</h2>
      <p>
        {
          options.character.name
        }
      </p>
      <button name="A" value={options.control.name} onClick={handleClick} type="button">{options.control.name}</button>
      <button name="B" value={options.character.name} onClick={handleClick} type="button">{options.character.name}</button>
    </div>
  );
};

export default Quiz;
