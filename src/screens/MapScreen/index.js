import React, {useState, useEffect, useRef} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  PermissionsAndroid,
  Platform
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

export default function MapScreen({navigation}) {
  const mapRef = useRef(null);

  const [coord, setCoord] = useState({
    latitude: 37.874641,
    longitude: 32.493156,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  useEffect(() => {
    async function fetchPermission() {
      await requestLocationPermission();
      getCurrentLocation();
    }
    fetchPermission();
  }, []);

  async function requestLocationPermission() {
    try {
      if(Platform.OS == 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location App',
            message: 'Location App access to your location ',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can use the location');
        } else {
          console.log('location permission denied');
        }
      }
    } catch (err) {
      console.warn(err);
    }
  }

  function getCurrentLocation() {
    Geolocation.getCurrentPosition(
      c => {
        setCoord({
          ...coord,
          latitude: c.coords.latitude,
          longitude: c.coords.longitude,
        });
      },
      error => {
        // alert(error.message);
        console.log({error});
      },
      {
        enableHighAccuracy: true,
        timeout: 6000,
        maximumAge: 10000,
      },
    );
    mapRef.current.animateToRegion({
      ...coord,
      latitude: c.coords.latitude,
      longitude: c.coords.longitude,
    },300);

  }

  function onRegionChange(region) {
    setCoord(region);
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" backgroundColor={'transparent'} />
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{flex: 1, borderWidth: 1}}
        initialRegion={coord}
        onRegionChange={onRegionChange}
        ref={mapRef}>
        <Marker coordinate={coord} />
      </MapView>
      <TouchableOpacity  onPress={() => navigation.push('Videos',{coord})} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Use This Location</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '400',
  },
  buttonContainer: {
    padding: 5,
    margin:5,
    backgroundColor: '#197278',
    borderRadius: Platform.OS == 'ios' ? 30 : 50,
    borderBottomRightRadius: 0,
    height: 50,
    width: 150,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
