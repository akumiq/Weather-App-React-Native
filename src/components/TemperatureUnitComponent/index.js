import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Picker} from '@react-native-community/picker';

const TemperatureUnit = ({unitsSystem, setUnitsSystem}) => {
  return (
    <View style={styles.unitsSystem}>
      <Picker
        selectedValue={unitsSystem}
        onValueChange={(item) => setUnitsSystem(item)}
        mode="dropdown">
        <Picker.Item label="C°" value="metric" />
        <Picker.Item label="F°" value="imperial" />
      </Picker>
    </View>
  );
};

export default TemperatureUnit;

const styles = StyleSheet.create({
  unitsSystem: {
    left: 10,
    height: 50,
    width: 85,
  },
});
