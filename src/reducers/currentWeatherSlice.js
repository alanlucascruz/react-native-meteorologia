import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {cidadeId, get} from '../api';

const fetchData = async () => {
  const response = await get(`/api/v1/weather/locale/${cidadeId}/current`);
  return response.data;
};

export const fetchCurrentWeather = createAsyncThunk(
  'fetchCurrentWeather',
  async () => {
    return await fetchData();
  },
);

export const refreshCurrentWeather = createAsyncThunk(
  'refreshCurrentWeather',
  async () => {
    return await fetchData();
  },
);

export const currentWeather = createSlice({
  name: 'currentWeather',
  initialState: {
    status: 'loading',
    data: {},
    error: '',
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCurrentWeather.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchCurrentWeather.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(refreshCurrentWeather.pending, state => {
        state.status = 'refreshing';
      })
      .addCase(refreshCurrentWeather.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(refreshCurrentWeather.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default currentWeather.reducer;
