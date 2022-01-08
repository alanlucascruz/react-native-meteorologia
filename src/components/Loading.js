import React from 'react';
import {ActivityIndicator, StatusBar, StyleSheet, View} from 'react-native';
import {colors} from '../styles';

export default () => (
  <View style={styles.container}>
    <StatusBar
      animated={true}
      backgroundColor={colors.bgPrimary}
      showHideTransition="fade"
    />
    <ActivityIndicator size="large" color={colors.textLight} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.bgPrimary,
  },
});
