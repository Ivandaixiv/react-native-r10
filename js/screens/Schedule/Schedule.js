import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const Schedule = ({navigation}) => {
  return (
    <View>
      <Text>This is the Schedule Screen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Session');
        }}>
        <Text>Go To Session --></Text>
      </TouchableOpacity>
    </View>
  );
};
export default Schedule;
