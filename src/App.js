import React from 'react';
import {StyleSheet, StatusBar, View} from 'react-native';

import TemperatureUnit from '../src/components/TemperatureUnitComponent';
import ReloadIcon from '../src/components/ReloadIconComponent';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="#fff" barStyle="dark-content" />

      <View style={styles.header}>
        <TemperatureUnit />
        <ReloadIcon />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
