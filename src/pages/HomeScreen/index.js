import React, {useCallback, useEffect} from 'react';
import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchCurrentWeather,
  refreshCurrentWeather,
} from '../../reducers/currentWeatherSlice';
import {
  fetchForecastWeek,
  refreshForecastWeek,
} from '../../reducers/forecastWeekSlice';
import {
  fetchForecastHours,
  refreshForecastHours,
} from '../../reducers/forecastHoursSlice';
import {
  Header,
  CurrentWeather,
  ForecastWeek,
  CurrentWeatherDetails,
  ForecastNextHours,
} from './Components';
import {Loading, Failed} from '../../components';
import {colors} from '../../styles';

export default () => {
  const dispatch = useDispatch();

  const statusCurrentWeather = useSelector(
    state => state.currentWeather.status,
  );
  const statusForecastWeek = useSelector(state => state.forecastWeek.status);
  const statusForecastHours = useSelector(state => state.forecastHours.status);

  const errorCurrentWeather = useSelector(state => state.currentWeather.error);

  useEffect(() => {
    dispatch(fetchCurrentWeather());
    dispatch(fetchForecastWeek());
    dispatch(fetchForecastHours());
  }, [dispatch]);

  const onRefresh = useCallback(() => {
    dispatch(refreshCurrentWeather());
    dispatch(refreshForecastWeek());
    dispatch(refreshForecastHours());
  });

  const isLoading = () => {
    return (
      statusCurrentWeather === 'loading' ||
      statusForecastWeek === 'loading' ||
      statusForecastHours === 'loading'
    );
  };

  const isFailed = () => {
    return statusCurrentWeather === 'failed';
  };

  if (isLoading()) {
    return <Loading />;
  }

  if (isFailed()) {
    return <Failed error={errorCurrentWeather} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor={colors.bgPrimary}
        showHideTransition="fade"
      />
      <Header />
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={
              statusCurrentWeather === 'refreshing' ||
              statusForecastWeek === 'refreshing' ||
              statusForecastHours === 'refreshing'
            }
            onRefresh={onRefresh}
            colors={[colors.bgPrimary]}
          />
        }>
        <CurrentWeather />
        <ForecastWeek />
        <CurrentWeatherDetails />
        <ForecastNextHours />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgSecondary,
  },
});
