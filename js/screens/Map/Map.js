import React from 'react';
import {Text, Platform, Image, View} from 'react-native';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import styles from './styles';

const Map = () => {
  return Platform.OS === 'ios' ? (
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
  ) : (
    <View style={styles.android}>
      <Text>This feature is coming to Android soon!</Text>
    </View>
  );
};
export default Map;
