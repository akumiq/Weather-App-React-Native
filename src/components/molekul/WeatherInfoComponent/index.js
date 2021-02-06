import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {colors} from '../../../utils/Colors';

const {SECONDARY_COLOR} = colors;

const WeatherInfoComponent = ({currentWeather, currentWeatherDetails}) => {
  const {
    main: {temp},
    weather: [details],
    name,
  } = currentWeatherDetails;

  const {icon, main, description} = details;

  const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;

  return (
    <View style={styles.weatherInfo}>
      <Text>{name}</Text>
      <Image style={styles.weatherIcon} source={{uri: iconUrl}} />
      <Text style={styles.textPrimary}>{temp}°</Text>
      <Text style={styles.weatherDescription}>{description}</Text>
      <Text style={styles.textSecondary}>{main}</Text>
    </View>
  );
};

export default WeatherInfoComponent;

const styles = StyleSheet.create({
  weatherInfo: {
    alignItems: 'center',
  },
  weatherIcon: {
    width: 100,
    height: 100,
  },
  weatherDescription: {
    textTransform: 'capitalize',
  },
  textPrimary: {
    fontSize: 40,
    color: SECONDARY_COLOR,
  },
  textSecondary: {
    fontSize: 20,
    fontWeight: '500',
    marginTop: 10,
  },
});
