import React from 'react';
import {
  Text,
  Image,
  Button,
  Linking,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Speaker = ({speaker, navigation}) => {
  console.log('Speaker.js:', navigation);
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
