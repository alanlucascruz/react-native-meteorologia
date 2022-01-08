import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {colors} from '../../../styles';

export default () => {
  const dataCurrentWeather = useSelector(state => state.currentWeather.data);
  const dataForecastWeek = useSelector(state => state.forecastWeek.data[0]);

  return (
    <View>
      <ImageBackground
        source={require('../../../assets/img/background.png')}
        resizeMode="cover"
        style={styles.bgImage}>
        <View style={styles.viewTemperature}>
          <Text style={styles.textTemperature}>
            {dataCurrentWeather.temperature}º
          </Text>

          <View style={{marginLeft: 16, marginTop: 16}}>
            <Text style={styles.textMaxTemperature}>
              {dataForecastWeek.temperature.max}º
            </Text>
            <Text style={styles.textMinTemperature}>
              {dataForecastWeek.temperature.min}º
            </Text>
          </View>
        </View>

        <View style={styles.viewDetails}>
          <Text style={styles.textDetail}>{dataCurrentWeather.condition}</Text>
          <Text style={styles.textDetail}>
            Sensação térmica: {dataCurrentWeather.sensation}º
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    alignItems: 'center',
    width: '100%',
    height: 270,
  },
  viewTemperature: {
    flexDirection: 'row',
    marginTop: 16,
  },
  textTemperature: {
    fontSize: 64,
    color: colors.textLight,
  },
  textMaxTemperature: {
    fontSize: 18,
    color: colors.textLight,
  },
  textMinTemperature: {
    fontSize: 18,
    color: colors.textSecondary,
    marginTop: 8,
  },
  viewDetails: {
    alignItems: 'center',
  },
  textDetail: {
    fontSize: 18,
    color: colors.textLight,
    marginTop: 4,
  },
});
