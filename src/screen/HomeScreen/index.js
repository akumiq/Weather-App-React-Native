import React from 'react';
import {StyleSheet, StatusBar, View} from 'react-native';

import TemperatureUnit from '../../components/molekul/TemperatureUnitComponent';
import ReloadIcon from '../../components/molekul/ReloadIconComponent';
import WeatherInfoComponent from '../../components/molekul/WeatherInfoComponent';
import WeatherDetailComponent from '../../components/molekul/WeatherDetailComponent';
import {colors} from '../../utils/Colors';

const {PRIMARY_COLOR} = colors;

const HomeScreen = ({
  unitsSystem,
  setUnitsSystem,
  currentWeather,
  currentWeatherDetails,
}) => {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor={PRIMARY_COLOR}
        barStyle="dark-content"
      />

      <View style={styles.header}>
        <TemperatureUnit
          unitsSystem={unitsSystem}
          setUnitsSystem={setUnitsSystem}
        />

        <ReloadIcon />
      </View>

      <View style={styles.content}>
        <WeatherInfoComponent
          currentWeather={currentWeather}
          currentWeatherDetails={currentWeatherDetails}
        />

        <WeatherDetailComponent
          currentWeather={currentWeather}
          currentWeatherDetails={currentWeatherDetails}
          unitsSystem={unitsSystem}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

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
