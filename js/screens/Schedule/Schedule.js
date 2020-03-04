import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

const Schedule = ({navigation, data}) => {
  return (
    <View style={styles.container}>
      <Text>This is the Schedule Screen</Text>
      {/* <TouchableOpacity
        onPress={() => {
          navigation.navigate('Session');
        }}>
        <Text>Go To Session --></Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Speaker');
        }}>
        <Text>Go To Speaker --></Text>
      </TouchableOpacity> */}
    </View>
  );
};
export default Schedule;
