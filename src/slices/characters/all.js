/* eslint no-param-reassign: "error" */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import breakingBadAPI from '../../app/api';

export const fetchAllCharacters = createAsyncThunk(
  'breakingBad/AllCharacters',
  async (thunkAPI) => {
    try {
      const response = await breakingBadAPI.get('characters');
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  },
);

const initialState = {
  allCharacters: [],
};

const userSlice = createSlice({
  name: 'allCcharacters',
  initialState,
  extraReducers: {
    [fetchAllCharacters.fulfilled]: (state, action) => {
      state.allCharacters = action.payload;
    },
  },
});

const { reducer } = userSlice;
export default reducer;
