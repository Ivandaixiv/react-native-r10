import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './styles';

const About = () => {
  return (
    <View style={styles.content}>
      <Text>Title Placeholder</Text>
      <Image
        source={require('../../assets/images/r10_logo.png')}
        style={styles.logo}
      />
      <Text>Description Placeholder</Text>
      <Text>Title Placeholder</Text>
      <Text>Another Description Placeholder</Text>
      <Text>Another Title Placeholder</Text>
      <Text>Placeholder list items</Text>
      <Text>Placeholder list items</Text>
      <Text>Placeholder list items</Text>
      <Text>Placeholder list items</Text>
      <Text>Placeholder list items</Text>
      <Text>Placeholder list items</Text>
      <Text>Placeholder list items</Text>
      <Text>&copy; Ivan Dai 2020</Text>
    </View>
  );
};
export default About;
