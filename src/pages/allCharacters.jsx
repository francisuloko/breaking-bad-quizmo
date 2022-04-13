import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllCharacters } from '../slices/characters/all';

const allCharacters = () => {
  const { allCharacters } = useSelector((state) => state.allCharacters);
  // localStorage.setItem('breakingBad', JSON.stringify(allCharacters));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCharacters());
  }, []);

  const characters = allCharacters.map((character) => (
    <li key={character.char_id}>{ character.name }</li>
  ));

  return (
    <div>
      <h1>Characters</h1>
      <ul>
        { characters }
      </ul>
    </div>
  );
};

export default allCharacters;
