import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Temperature from 'react-native-vector-icons/FontAwesome5';
import Water from 'react-native-vector-icons/MaterialCommunityIcons';
import WetaherWindy from 'react-native-vector-icons/MaterialCommunityIcons';
import Speedometer from 'react-native-vector-icons/MaterialCommunityIcons';

const WeatherDetail = () => {
  const borderTopWidth = 1;

  return (
    <View style={styles.weatherDetails}>
      <View style={styles.weatherDetailsRow}>
        <View style={styles.weatherDetailsBox}>
          <View style={styles.weatherDetailsRow}>
            <Temperature name="temperature-low" size={25} color="#ff304f" />

            <View style={styles.weatherDetailsItems}>
              <Text>Feels like :</Text>

              <Text style={styles.textSecondary}>43.39°</Text>
            </View>
          </View>
        </View>

        <View style={styles.weatherDetailsBox}>
          <View style={styles.weatherDetailsRow}>
            <Water name="water" size={30} color="#ff304f" />

            <View style={styles.weatherDetailsItems}>
              <Text>Humidity :</Text>

              <Text style={styles.textSecondary}>93%</Text>
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          ...styles.weatherDetailsRow,
          borderTopWidth: borderTopWidth,
        }}>
        <View style={styles.weatherDetailsBox}>
          <View style={styles.weatherDetailsRow}>
            <WetaherWindy name="weather-windy" size={30} color="#ff304f" />

            <View style={styles.weatherDetailsItems}>
              <Text>Wind Speed :</Text>

              <Text style={styles.textSecondary}>2 miles/h</Text>
            </View>
          </View>
        </View>

        <View style={styles.weatherDetailsBox}>
          <View style={styles.weatherDetailsRow}>
            <Speedometer name="speedometer" size={30} color="#ff304f" />

            <View style={styles.weatherDetailsItems}>
              <Text>Pressure :</Text>

              <Text style={styles.textSecondary}>1025 hPa</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default WeatherDetail;

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
  weatherDetailsBox: {
    flex: 1,
    padding: 20,
    borderRightWidth: 1,
  },
  weatherDetailsItems: {
    alignItems: 'flex-end',
  },
  textSecondary: {
    fontSize: 15,
    fontWeight: '700',
    margin: 7,
  },
});
