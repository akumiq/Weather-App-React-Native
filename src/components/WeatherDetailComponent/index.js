import React from 'react';
import {View, StyleSheet} from 'react-native';
import Temperature from 'react-native-vector-icons/FontAwesome5';
import Water from 'react-native-vector-icons/MaterialCommunityIcons';
import WetaherWindy from 'react-native-vector-icons/MaterialCommunityIcons';
import Speedometer from 'react-native-vector-icons/MaterialCommunityIcons';

import WeatherDetailBox from '../atom/WeatherDetailBox';
import {colors} from '../utils/Colors';

const {SECONDARY_COLOR} = colors;

const WeatherDetailComponent = () => {
  const borderTopWidth = 1;

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
          textSecondary="43.39°"
        />

        <WeatherDetailBox
          icon={<Water name="water" size={30} color={SECONDARY_COLOR} />}
          textPrimary="Humidity :"
          textSecondary="93%"
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
          textSecondary="2 miles/h"
        />

        <WeatherDetailBox
          icon={
            <Speedometer name="speedometer" size={30} color={SECONDARY_COLOR} />
          }
          textPrimary="Pressure :"
          textSecondary="1025 hPa"
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
