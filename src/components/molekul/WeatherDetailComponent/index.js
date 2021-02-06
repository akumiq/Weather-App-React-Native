import React from 'react';
import {View, StyleSheet} from 'react-native';
import Temperature from 'react-native-vector-icons/FontAwesome5';
import Water from 'react-native-vector-icons/MaterialCommunityIcons';
import WetaherWindy from 'react-native-vector-icons/MaterialCommunityIcons';
import Speedometer from 'react-native-vector-icons/MaterialCommunityIcons';

import WeatherDetailBox from '../../atom/WeatherDetailBox';
import {colors} from '../../../utils/Colors';

const {SECONDARY_COLOR} = colors;

const WeatherDetailComponent = ({
  currentWeather,
  currentWeatherDetails,
  unitsSystem,
}) => {
  const borderTopWidth = 1;

  const {
    main: {feels_like, humidity, pressure},
    wind: {speed},
  } = currentWeatherDetails;

  const windSpeed =
    unitsSystem === 'metric'
      ? `${Math.round(speed)} m/s`
      : `${Math.round(speed)} miles/h`;

  return (
    <View style={styles.weatherDetails}>
      <View style={styles.weatherDetailsRow}>
        <WeatherDetailBox
          icon={
            <Temperature
              name="temperature-low"
              size={25}
              color={SECONDARY_COLOR}
            />
          }
          textPrimary="Feels Like :"
          textSecondary={`${feels_like}°`}
        />

        <WeatherDetailBox
          icon={<Water name="water" size={30} color={SECONDARY_COLOR} />}
          textPrimary="Humidity :"
          textSecondary={`${humidity}%`}
        />
      </View>

      <View
        style={{
          ...styles.weatherDetailsRow,
          borderTopWidth: borderTopWidth,
        }}>
        <WeatherDetailBox
          icon={
            <WetaherWindy
              name="weather-windy"
              size={30}
              color={SECONDARY_COLOR}
            />
          }
          textPrimary="Wind Speed :"
          textSecondary={windSpeed}
        />

        <WeatherDetailBox
          icon={
            <Speedometer name="speedometer" size={30} color={SECONDARY_COLOR} />
          }
          textPrimary="Pressure :"
          textSecondary={`${pressure} hPa`}
        />
      </View>
    </View>
  );
};

export default WeatherDetailComponent;

const styles = StyleSheet.create({
  weatherDetails: {
    margin: 20,
    marginTop: 'auto',
    borderWidth: 1,
    borderRadius: 10,
  },
  weatherDetailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
