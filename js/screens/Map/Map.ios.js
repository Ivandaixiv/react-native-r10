import React from 'react';
import {Image} from 'react-native';
import {Marker} from 'react-native-maps';
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
      showsUserLocation={true}>
      <Marker coordinate={{latitude: 49.263388, longitude: -123.138126}}>
        <Image source={require('../../assets/images/map_pin.png')} />
      </Marker>
    </MapView>
  );
};
export default Map;
