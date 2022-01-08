import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { colors } from '../../../styles';
import { useNavigation } from '@react-navigation/core';
import { useSelector } from 'react-redux';
import { getWeekday } from '../../../utils';
import { WeatherIcon } from '../../../components';

export default () => {
  const navigation = useNavigation();
  const data = useSelector(state => state.forecastWeek.data);

  return (
    <View style={styles.container}>
      {data.map((item, index) => {
        if (index > 0) {
          return (
            <TouchableOpacity
              style={styles.item}
              key={index}
              onPress={() => navigation.navigate("ForecastDayDetails", { date: item.date })}
            >
              <Text style={styles.textWeekday}>{getWeekday(item.date).substr(0, 3)}</Text>
              <WeatherIcon style={styles.icon} icon={item.text_icon.icon.day} size={21} />
              <Text style={styles.textMaxTemperature}>{item.temperature.max}º</Text>
              <Text style={styles.textMinTemperature}>{item.temperature.min}º</Text>
            </TouchableOpacity>
          )
        }
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 24,
  },
  item: {
    alignItems: 'center',
  },
  textWeekday: {
    color: colors.textLight,
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: '700'
  },
  icon: {
    marginVertical: 28,
  },
  textMaxTemperature: {
    color: colors.textLight,
    fontSize: 16,
    marginBottom: 8,
  },
  textMinTemperature: {
    color: colors.textSecondary,
    fontSize: 16,
  },
});