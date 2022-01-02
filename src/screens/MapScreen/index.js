import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, LatLng} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

export default function MapScreen({navigation}) {

  const [coord, setCoord] = useState({
    latitude: 41.0391683,
    longitude: 28.9982707,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  });

  useEffect(() => {
    getCurrentLocation();
  }, []);

  function getCurrentLocation() {
    Geolocation.getCurrentPosition(
      c => {
        setCoord({
          ...coord,
          latitude: c.coords.latitude,
          longitude: c.coords.longitude,
        });
      },
      error => console.log(error),
      {
        enableHighAccuracy: true,
      },
    );
  }

  function onRegionChange(region) {
    setCoord(region);
  }

  return (
    <View style={{flex: 1}}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{flex: 1, borderWidth: 1}}
        initialRegion={coord}
        onRegionChange={onRegionChange}>
        <Marker coordinate={coord} />
      </MapView>
      <View style={{padding: 10}}>
        <Button
          onPress={() => navigation.push('Videos',{coord})}
          title="Bu Adresi Kullan"
          color="#841584"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
