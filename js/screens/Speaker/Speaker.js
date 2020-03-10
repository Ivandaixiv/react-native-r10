import React from 'react';
import {
  Text,
  Image,
  Linking,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

const Speaker = ({speaker, navigation}) => {
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.close}
          onPress={() => {
            navigation.goBack();
          }}>
          <MaterialCommunityIcons name="close" color="white" size={25} />
        </TouchableOpacity>
        <Text style={styles.headerText}>About the Speaker</Text>
      </View>
      <View style={styles.speaker}>
        <Image source={{uri: `${speaker.image}`}} style={styles.profile} />
        <Text style={styles.speakerName}>{speaker.name}</Text>
        <Text style={styles.bio}>{speaker.bio}</Text>
        <TouchableOpacity style={styles.buttonParent}>
          <LinearGradient
            colors={['#cf392a', '#9963ea']}
            start={{x: 0.0, y: 1.0}}
            end={{x: 1.0, y: 0.0}}
            style={[StyleSheet.absoluteFill, {...styles.button}]}
          />
          <Text
            style={styles.buttonText}
            onPress={() => {
              Linking.openURL(speaker.url);
            }}>
            Read More on Wikipedia
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

Speaker.propTypes = {
  speaker: PropTypes.object,
  navigation: PropTypes.objectOf(PropTypes.func),
};
export default Speaker;
