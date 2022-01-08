import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import {useSelector} from 'react-redux';
import {colors} from '../../styles';
import {Header, Temperature, Humidity, TemperatureDetails} from './Components';

export default ({route}) => {
  const {date} = route.params;

  const data = useSelector(state => state.forecastWeek.data);

  const item = data.slice().find(item => item.date === date);

  return (
    <SafeAreaView style={{backgroundColor: colors.bgSecondary, flex: 1}}>
      <StatusBar
        animated={true}
        backgroundColor={colors.bgSecondary}
        showHideTransition="fade"
      />
      <Header item={item} />
      <ScrollView>
        <Temperature item={item} />
        <Humidity item={item} />
        <TemperatureDetails item={item} />
      </ScrollView>
    </SafeAreaView>
  );
};
