import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../styles';

export default ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Temperatura Detalhada</Text>

      <View style={styles.row}>
        <View style={styles.col}>
          <Text style={styles.subTitle}>Madrugada</Text>
          <Text style={styles.maxTemperature}>{item.temperature.dawn.max}º</Text>
          <Text style={styles.minTemperature}>{item.temperature.dawn.min}º</Text>
        </View>
        <View style={styles.col}>
          <Text style={styles.subTitle}>Manhã</Text>
          <Text style={styles.maxTemperature}>{item.temperature.morning.max}º</Text>
          <Text style={styles.minTemperature}>{item.temperature.morning.min}º</Text>
        </View>
        <View style={styles.col}>
          <Text style={styles.subTitle}>Tarde</Text>
          <Text style={styles.maxTemperature}>{item.temperature.afternoon.max}º</Text>
          <Text style={styles.minTemperature}>{item.temperature.afternoon.min}º</Text>
        </View>
        <View style={styles.col}>
          <Text style={styles.subTitle}>Noite</Text>
          <Text style={styles.maxTemperature}>{item.temperature.night.max}º</Text>
          <Text style={styles.minTemperature}>{item.temperature.night.min}º</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  title: {
    fontSize: 16,
    textTransform: 'uppercase',
    color: colors.textLight,
    marginBottom: 16,
    fontWeight: '700'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  col: {
    alignItems: 'center'
  },
  subTitle: {
    fontSize: 16,
    color: colors.textLight,
    marginBottom: 8,
    fontWeight: '500'
  },
  maxTemperature: {
    fontSize: 16,
    color: colors.textLight,
    marginBottom: 4,
  },
  minTemperature: {
    fontSize: 16,
    color: colors.textSecondary,
  },
})