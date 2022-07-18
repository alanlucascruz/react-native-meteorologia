import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../styles';

export default ({item}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Umidade Relativa do Ar</Text>

      <View style={styles.row}>
        <View style={styles.col}>
          <Text style={styles.subTitle}>Madrugada</Text>
          <Text style={styles.humidityMax}>{item.humidity.dawn.max}%</Text>
          <Text style={styles.humidityMin}>{item.humidity.dawn.min}%</Text>
        </View>
        <View style={styles.col}>
          <Text style={styles.subTitle}>Manhã</Text>
          <Text style={styles.humidityMax}>{item.humidity.morning.max}%</Text>
          <Text style={styles.humidityMin}>{item.humidity.morning.min}%</Text>
        </View>
        <View style={styles.col}>
          <Text style={styles.subTitle}>Tarde</Text>
          <Text style={styles.humidityMax}>{item.humidity.afternoon.max}%</Text>
          <Text style={styles.humidityMin}>{item.humidity.afternoon.min}%</Text>
        </View>
        <View style={styles.col}>
          <Text style={styles.subTitle}>Noite</Text>
          <Text style={styles.humidityMax}>{item.humidity.night.max}%</Text>
          <Text style={styles.humidityMin}>{item.humidity.night.min}%</Text>
        </View>
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
    marginBottom: 16,
    fontWeight: '700',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  col: {
    alignItems: 'center',
  },
  subTitle: {
    fontSize: 16,
    color: colors.textLight,
    marginBottom: 8,
    fontWeight: '500',
  },
  humidityMax: {
    fontSize: 16,
    color: colors.textLight,
    marginBottom: 4,
  },
  humidityMin: {
    fontSize: 16,
    color: colors.textSecondary,
  },
});
