import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Weather from 'react-native-vector-icons/MaterialCommunityIcons';

const WeatherInfo = () => {
  return (
    <View style={styles.weatherInfo}>
      <Text>Mountain View</Text>
      <Weather name="weather-partly-cloudy" size={80} />
      <Text style={styles.textPrimary}>42.17°</Text>
      <Text style={styles.weatherDescription}>Overcast Cluds</Text>
      <Text style={styles.textSecondary}>Clouds</Text>
    </View>
  );
};

export default WeatherInfo;

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
    color: '#ff304f',
  },
  textSecondary: {
    fontSize: 20,
    color: '#002651',
    fontWeight: '500',
    marginTop: 10,
  },
});
