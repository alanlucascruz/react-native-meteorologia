import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../styles';

export default () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Criciúma, Santa Catarina</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgPrimary,
    padding: 12,
    alignItems: 'center',
  },
  text: {
    color: colors.textLight,
    fontSize: 20,
    fontFamily: 'Poppins',
    fontWeight: '700'
  }
});