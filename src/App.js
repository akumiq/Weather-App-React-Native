import React from 'react';
import {StyleSheet, StatusBar, View} from 'react-native';

import TemperatureUnit from '../src/components/TemperatureUnitComponent';
import ReloadIcon from '../src/components/ReloadIconComponent';
import WeatherInfoComponent from '../src/components/WeatherInfoComponent';
import WeatherDetailComponent from '../src/components/WeatherDetailComponent';
import {colors} from '../src/components/utils/Colors';

const {PRIMARY_COLOR} = colors;

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor={PRIMARY_COLOR}
        barStyle="dark-content"
      />

      <View style={styles.header}>
        <TemperatureUnit />
        <ReloadIcon />
      </View>

      <View style={styles.content}>
        <WeatherInfoComponent />
        <WeatherDetailComponent />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR,
    paddingTop: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 40,
  },
});
