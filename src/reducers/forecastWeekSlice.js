import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {cidadeId, get} from '../api';

const fetchData = async () => {
  const response = await get(`/api/v1/forecast/locale/${cidadeId}/days/15`);
  return response.data;
};

export const fetchForecastWeek = createAsyncThunk(
  'fetchForecastWeek',
  async () => {
    return await fetchData();
  },
);

export const refreshForecastWeek = createAsyncThunk(
  'refreshForecastWeek',
  async () => {
    return await fetchData();
  },
);

export const forecastWeek = createSlice({
  name: 'forecastWeek',
  initialState: {
    status: 'loading',
    data: [],
    error: '',
  },
  extraReducers(builder) {
    builder
      .addCase(fetchForecastWeek.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchForecastWeek.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(refreshForecastWeek.pending, state => {
        state.status = 'refreshing';
      })
      .addCase(refreshForecastWeek.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(refreshForecastWeek.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default forecastWeek.reducer;
