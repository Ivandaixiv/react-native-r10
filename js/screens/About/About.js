import React, {useState} from 'react';
import {Text, Image, ScrollView} from 'react-native';
import styles from './styles';
import ConductItem from '../../components/Conduct';

const About = ({data}) => {
  return (
    <ScrollView style={styles.content}>
      <Image
        source={require('../../assets/images/r10_logo.png')}
        style={styles.logo}
      />
      <Text>
        R10 is a conference that focuses on just about any topic related to dev.
      </Text>
      <Text>Date & Venue</Text>
      <Text>
        The R10 conference will take place on Saturday, December 8, 2020 in
        Vancouver, BC
      </Text>
      <Text>Code of Conduct</Text>
      {data.map(item => (
        <ConductItem key={item.id} item={item} />
      ))}
      <Text>&copy; Ivan Dai 2020</Text>
    </ScrollView>
  );
};
export default About;
