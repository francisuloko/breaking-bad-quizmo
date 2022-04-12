import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from '../slices/characters/all';

const reducer = {
  allCharacters: charactersReducer,
};

const store = configureStore({
  reducer,
  devTools: true,
});

export default store;
