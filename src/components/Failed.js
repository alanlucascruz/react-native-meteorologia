import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import {colors} from '../styles';

export default ({error}) => {
  if (error === '') {
    error = 'Sem conexão com a Internet';
  }

  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor={colors.bgPrimary}
        showHideTransition="fade"
      />
      <Icon name="wifi" size={48} color={colors.textLight} />
      <Text style={styles.title}>Falha de comunicação</Text>
      <Text style={styles.subtitle}>{error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.bgPrimary,
  },
  icon: {},
  title: {
    marginTop: 16,
    color: colors.textLight,
    fontSize: 24,
  },
  subtitle: {
    color: colors.textLight,
    opacity: 0.8,
  },
});
