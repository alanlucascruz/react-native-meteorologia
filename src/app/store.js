import { configureStore } from '@reduxjs/toolkit'
import currentWeatherSlice from '../reducers/currentWeatherSlice';
import forecastHoursSlice from '../reducers/forecastHoursSlice';
import forecastWeekSlice from '../reducers/forecastWeekSlice';

export default configureStore({
  reducer: {
    currentWeather: currentWeatherSlice,
    forecastWeek: forecastWeekSlice,
    forecastHours: forecastHoursSlice
  },
});