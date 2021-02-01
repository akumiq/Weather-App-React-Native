import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const WeatherDetailBox = (props) => {
  return (
    <View style={styles.weatherDetailsBox}>
      <View style={styles.weatherDetailsRow}>
        {props.icon}

        <View style={styles.weatherDetailsItems}>
          <Text>{props.textPrimary}</Text>

          <Text style={styles.textSecondary}>{props.textSecondary}</Text>
        </View>
      </View>
    </View>
  );
};

export default WeatherDetailBox;

const styles = StyleSheet.create({
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
