import React from 'react';
import {
  Text,
  ScrollView,
  Image,
  Button,
  Linking,
  View,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
const Speaker = ({speaker}) => {
  console.log('Speaker.js:', speaker);
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}>About the Speaker</Text>
      </View>
      <View style={styles.speaker}>
        <Image source={{uri: `${speaker.image}`}} style={styles.profile} />
        <Text style={styles.speakerName}>{speaker.name}</Text>
        <Text style={styles.bio}>{speaker.bio}</Text>
        <View style={styles.buttonParent}>
          <LinearGradient
            colors={['#cf392a', '#9963ea']}
            start={{x: 0.0, y: 1.0}}
            end={{x: 1.0, y: 0.0}}
            style={[StyleSheet.absoluteFill, {...styles.button}]}
          />
          <Button
            color="white"
            title="Read More on Wikipedia"
            onPress={() => {
              Linking.openURL(speaker.url);
            }}
          />
        </View>
      </View>
    </View>
  );
};
export default Speaker;
