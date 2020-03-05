import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './styles';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

const About = ({data}) => {
  return (
    <View style={styles.content}>
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
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View>
            <TouchableOpacity>
              {/* TODO If true/false dispaly + or -  */}
              <Text>{item.title}</Text>
            </TouchableOpacity>
            <Text>{item.description}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
      <Text>&copy; Ivan Dai 2020</Text>
    </View>
  );
};
export default About;
