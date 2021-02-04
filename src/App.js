import React, {useState, useEffect} from 'react';
import {Platform, Alert} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {request, PERMISSIONS} from 'react-native-permissions';

import HomeScreen from '../src/screen/HomeScreen';

const App = () => {
  const [initialRegion, setInitialRegion] = useState(null);

  useEffect(() => {
    requestLocationPermission();
  });

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      var response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);

      if (response === 'granted') {
        return locateCurrentPosition();
      }
    } else {
      var response = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);

      if (response === 'granted') {
        return locateCurrentPosition();
      }
    }
  };

  const locateCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const initialRegions = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };

        setInitialRegion(initialRegions);
      },
      (error) => Alert.alert(error.message),
      {timeout: 20000, maximumAge: 2000, enableHighAccuracy: false},
    );
  };

  return <HomeScreen />;
};

export default App;
