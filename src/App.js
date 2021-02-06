import React, {useState, useEffect} from 'react';
import {Platform, Alert} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {request, PERMISSIONS} from 'react-native-permissions';

import HomeScreen from '../src/screen/HomeScreen';

const App = () => {
  const [initialRegion, setInitialRegion] = useState(null);
  const [unitsSystem, setUnitsSystem] = useState('metric');
  const [currentWeather, setCurrentWeather] = useState(null);
  const [currentWeatherDetails, setCurrentWeatherDetails] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const WEATHER_API_KEY = '36b0c9ddd4504f6c945088f81e9080f4';
  const BASE_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?';

  useEffect(() => {
    requestLocationPermission();
  });

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [unitsSystem]);

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      var permission = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);

      if (permission === 'granted') {
        return locateCurrentPosition();
      }
    } else {
      var permission = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);

      if (permission === 'granted') {
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

  const load = async () => {
    const {latitude, longitude} = initialRegion;
    const weatherUrl = `${BASE_WEATHER_URL}lat=${latitude}&lon=${longitude}&units=${unitsSystem}&appid=${WEATHER_API_KEY}`;
    const response = await fetch(weatherUrl);
    const result = await response.json();

    if (response.ok) {
      setCurrentWeather(result.main.temp);
      setCurrentWeatherDetails(result);
    } else {
      setErrorMessage(result.message);
    }
  };

  return (
    <HomeScreen
      unitsSystem={unitsSystem}
      setUnitsSystem={setUnitsSystem}
      currentWeather={currentWeather}
      currentWeatherDetails={currentWeatherDetails}
      errorMessage={errorMessage}
    />
  );
};

export default App;
