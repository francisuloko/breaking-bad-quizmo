/* eslint no-param-reassign: "error" */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import breakingBadAPI from '../../app/api';

export const fetchOneCharacter = createAsyncThunk(
  'breakingBad/OneCharacter',
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
  character: [],
};

const userSlice = createSlice({
  name: 'characters',
  initialState,
  extraReducers: {
    [fetchOneCharacter.fulfilled]: (state, action) => {
      state.character = action.payload;
    },
  },
});

const { reducer } = userSlice;
export default reducer;
