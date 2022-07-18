import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {colors} from '../../../styles';
import {formatNumber, getDateFull, getWeekday} from '../../../utils';

export default () => {
  const data = useSelector(state => state.forecastHours.data);
  const dateCurrentWeather = useSelector(
    state => state.currentWeather.data.date,
  );

  const filteredData = data.slice().filter(item => {
    const dateItem = item.date;

    const year = dateItem.substr(0, 4);
    const month = dateItem.substr(5, 2);
    const day = dateItem.substr(8, 2);
    const hours = dateItem.substr(11, 2);

    const date = new Date(year, month - 1, day, hours, 0);
    const currentDate = new Date();

    return date.getTime() > currentDate.getTime();
  });

  const getHoursMinutes = stringDate => {
    return `${stringDate.substr(11, 5)}h`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {getWeekday(dateCurrentWeather)}, {getDateFull(dateCurrentWeather)}
      </Text>

      <View style={styles.list}>
        {filteredData.map((item, index) => {
          if (index < 24) {
            return (
              <View style={styles.listItem} key={index}>
                <Text style={[styles.listText, {width: 64}]}>
                  {getHoursMinutes(item.date)}
                </Text>
                <Text
                  style={[styles.listText, {width: 48, textAlign: 'right'}]}>
                  {item.temperature.temperature}º
                </Text>
                <Text
                  style={[styles.listText, {width: 48, textAlign: 'right'}]}>
                  {item.humidity.humidity.toFixed(0)}%
                </Text>
                <Text
                  style={[styles.listText, {width: 88, textAlign: 'right'}]}>
                  {formatNumber(item.wind.velocity)} km/h
                </Text>
              </View>
            );
          }
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  title: {
    fontSize: 16,
    textTransform: 'uppercase',
    color: colors.textLight,
    marginLeft: 4,
    fontWeight: '700',
  },
  list: {
    marginTop: 24,
    paddingHorizontal: 4,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  listText: {
    fontSize: 16,
    color: colors.textLight,
  },
});
