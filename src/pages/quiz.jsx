import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import RandomCharacter from '../app/random';
import { fetchAllCharacters } from '../slices/characters/all';

const Quiz = () => {
  const dispatch = useDispatch();
  // const { allCharacters } = useSelector((state) => state.allCharacters);
  const allCharacters = JSON.parse(localStorage.getItem('breakingBad'));
  const [state, setState] = useState({
    round: 20,
  });

  const random = RandomCharacter(allCharacters);
  const [options, setOptions] = useState([random(), random(), random()]);
  const [char, setChar] = useState(options[Math.floor(Math.random() * 3)].name);

  const handleScore = (choice) => {
    if (choice === char) {
      console.log('Right');
    } else {
      console.log('Wrong');
    }
  };

  const handleClick = (e) => {
    const choice = e.target.value;
    setState({
      round: state.round - 1,
    });

    handleScore(choice);
    setOptions([random(), random(), random()]);
  };

  useEffect(() => {
    dispatch(fetchAllCharacters());
    setChar(options[Math.floor(Math.random() * 3)].name);
  }, [handleClick]);

  return (
    <div>
      <h1>Quiz</h1>
      <h2>WHO IS THIS CHARACTER?</h2>
      <p>
        {
          char
        }
      </p>
      <button name="A" value={options[0].name} onClick={handleClick} type="button">{options[0].name}</button>
      <button name="B" value={options[1].name} onClick={handleClick} type="button">{options[1].name}</button>
      <button name="C" value={options[2].name} onClick={handleClick} type="button">{options[2].name}</button>
    </div>
  );
};

export default Quiz;
