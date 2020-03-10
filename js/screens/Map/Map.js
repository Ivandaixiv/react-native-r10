import React from 'react';
import {Text} from 'react-native';
import MapView from 'react-native-maps';
import styles from './styles';

const Map = () => {
  return (
    <MapView
      style={styles.map}
      region={{
        latitude: 49.263388,
        longitude: -123.138126,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      showsUserLocation={true}
    />
  );
};
export default Map;
