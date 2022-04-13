import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
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
    <div>
      <h2>WHO IS THIS CHARACTER?</h2>
      <img src={character.img} alt="Who is this character?" />
      <p>
        {
          result
        }
      </p>
      <button name="A" value={options[0].name} onClick={handleClick} type="button">{options[0].name}</button>
      <button name="B" value={options[1].name} onClick={handleClick} type="button">{options[1].name}</button>
      <button name="C" value={options[2].name} onClick={handleClick} type="button">{options[2].name}</button>
    </div>
  );
};

export default Quiz;
