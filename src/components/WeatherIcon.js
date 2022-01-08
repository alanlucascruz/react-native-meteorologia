import React from 'react';
import Icon from 'react-native-vector-icons/Fontisto';
import { colors } from '../styles';

export default ({ style, icon, size }) => {
  let name = '';

  if (icon === '1') {
    name = 'day-sunny';
  } else if ((icon === '2') || (icon === '2r') || (icon === '9')) {
    name = 'day-cloudy';
  } else if ((icon === '3') || (icon === '5')) {
    name = 'rain';
  } else if (icon === '3TM') {
    name = 'cloudy';
  } else if ((icon === '4') || (icon === '4r')) {
    name = 'day-rain';
  } else if (icon === '4t') {
    name = 'day-lightning';
  } else if (icon === '6') {
    name = 'lightning';
  } else if ((icon === '7') || (icon === '8')) {
    name = 'snow';
  }

  return (
    <Icon style={style} name={name} size={size} color={colors.textLight} />
  );
}