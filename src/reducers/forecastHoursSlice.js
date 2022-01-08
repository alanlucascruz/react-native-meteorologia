import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {cidadeId, get} from '../api';

const fetchData = async () => {
  const response = await get(`/api/v1/forecast/locale/${cidadeId}/hours/72`);
  return response.data;
};

export const fetchForecastHours = createAsyncThunk(
  'fetchForecastHours',
  async () => {
    return await fetchData();
  },
);

export const refreshForecastHours = createAsyncThunk(
  'refreshForecastHours',
  async () => {
    return await fetchData();
  },
);

export const forecastHours = createSlice({
  name: 'forecastHours',
  initialState: {
    status: 'loading',
    data: [],
    error: '',
  },
  extraReducers(builder) {
    builder
      .addCase(fetchForecastHours.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchForecastHours.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(refreshForecastHours.pending, state => {
        state.status = 'refreshing';
      })
      .addCase(refreshForecastHours.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(refreshForecastHours.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default forecastHours.reducer;
