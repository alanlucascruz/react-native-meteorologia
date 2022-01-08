import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../styles';
import Icon from 'react-native-vector-icons/Fontisto';
import {useSelector} from 'react-redux';
import {formatNumber} from '../../../utils';

export default () => {
  const dataCurrentWeather = useSelector(state => state.currentWeather.data);
  const dataForecastWeek = useSelector(state => state.forecastWeek.data[0]);

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Icon
          style={styles.icon}
          name="blood-drop"
          size={24}
          color={colors.textLight}
        />
        <Text style={styles.text}>
          {dataCurrentWeather.humidity.toFixed(0)}%
        </Text>
      </View>

      <View style={styles.item}>
        <Icon
          style={styles.icon}
          name="wind"
          size={24}
          color={colors.textLight}
        />
        <Text style={styles.text}>
          {formatNumber(dataCurrentWeather.wind_velocity)} km/h
        </Text>
      </View>

      <View style={styles.item}>
        <Icon
          style={styles.icon}
          name="rains"
          size={24}
          color={colors.textLight}
        />
        <Text style={styles.text}>{dataForecastWeek.rain.probability}%</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 24,
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 86,
    height: 86,
    backgroundColor: colors.bgTerciary,
    borderRadius: 43,
  },
  icon: {
    marginBottom: 4,
  },
  text: {
    color: colors.textLight,
    fontSize: 14,
  },
});
