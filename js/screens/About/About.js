import React from 'react';
import {Text, Image, View, ScrollView} from 'react-native';
import styles from './styles';
import ConductItem from '../../components/Conduct';
import PropTypes from 'prop-types';

const About = ({data}) => {
  return (
    <ScrollView contentContainerStyle={styles.content}>
      <View style={styles.borderBottom}>
        <Image
          source={require('../../assets/images/r10_logo.png')}
          style={styles.logo}
        />
      </View>
      <Text>
        R10 is a conference that focuses on just about any topic related to dev.
      </Text>
      <Text style={styles.title}>Date & Venue</Text>
      <Text>
        The R10 conference will take place on Saturday, December 8, 2020 in
        Vancouver, BC
      </Text>
      <Text style={styles.title}>Code of Conduct</Text>
      {data.map(item => (
        <ConductItem key={item.id} item={item} />
      ))}
      <View style={styles.borderTop}>
        <Text>&copy; Ivan Dai 2020</Text>
      </View>
    </ScrollView>
  );
};

About.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default About;
