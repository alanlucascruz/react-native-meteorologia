import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../../styles';
import { getDateFull, getWeekday } from '../../../utils';
import Icon from 'react-native-vector-icons/Fontisto';

export default ({ item }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}>
        <Icon name="angle-left" size={21} color={colors.textLight} />
      </TouchableOpacity>
      <Text style={styles.text}>{getWeekday(item.date)}, {getDateFull(item.date)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.bgSecondary,
    padding: 16,
  },
  text: {
    color: colors.textLight,
    fontSize: 20,
    marginLeft: 24,
    fontWeight: '700'
  }
});