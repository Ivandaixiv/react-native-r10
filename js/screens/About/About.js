import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './styles';

const About = () => {
  return (
    <View style={styles.content}>
      <Text style={styles.header}>Title Placeholder</Text>
      <Image
        source={require('../../assets/images/r10_logo.png')}
        style={styles.logo}
      />
      <Text>Description Placeholder</Text>
      <Text style={styles.title}>Title Placeholder</Text>
      <Text>Another Description Placeholder</Text>
      <Text style={styles.title}>Another Title Placeholder</Text>
      <Text style={styles.listItems}>Placeholder list items</Text>
      <Text style={styles.listItems}>Placeholder list items</Text>
      <Text style={styles.listItems}>Placeholder list items</Text>
      <Text style={styles.listItems}>Placeholder list items</Text>
      <Text style={styles.listItems}>Placeholder list items</Text>
      <Text style={styles.listItems}>Placeholder list items</Text>
      <Text style={styles.listItems}>Placeholder list items</Text>
      <Text>&copy; Ivan Dai 2020</Text>
    </View>
  );
};
export default About;
