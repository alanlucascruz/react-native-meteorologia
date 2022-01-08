import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../styles';
import Icon from 'react-native-vector-icons/Fontisto';
import { WeatherIcon } from '../../../components';

export default ({ item }) => {

  return (
    <View style={styles.container}>
      <View style={styles.sectionTemperature}>
        <WeatherIcon style={styles.icon} size={56} icon={item.text_icon.icon.day} />
        <Text style={styles.textMaxTemperature}>{item.temperature.max}º</Text>
        <Text style={styles.textMinTemperature}>{item.temperature.min}º</Text>
      </View>
      <View style={styles.sectionDetails}>
        <Text style={styles.textDetails}>{item.text_icon.text.pt}</Text>
        <Text style={styles.textDetails}>Probabilidade de Chuva: {item.rain.probability}%</Text>
        <Text style={styles.textDetails}>Velocidade Média do Vento: {item.wind.velocity_avg} km/h</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24
  },
  sectionTemperature: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    borderRightWidth: 0.4,
    borderRightColor: colors.textLight,
    paddingRight: 28,
  },
  textMaxTemperature: {
    color: colors.textLight,
    fontSize: 48,
    marginLeft: 28,
  },
  textMinTemperature: {
    color: colors.textSecondary,
    fontSize: 48,
    marginLeft: 16,
  },
  sectionDetails: {
    marginTop: 24,
    alignItems: 'center',
  },
  textDetails: {
    marginBottom: 2,
    fontSize: 16,
    color: colors.textLight
  }
});