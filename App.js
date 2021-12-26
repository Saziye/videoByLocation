import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const App: () => Node = () => {
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={{flex: 1}}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
    />
  );
};

const styles = StyleSheet.create({
  
});

export default App;
