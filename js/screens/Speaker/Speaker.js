import React from 'react';
import {Text, ScrollView, Image, Button, Linking, View} from 'react-native';
import styles from './styles';

const Speaker = ({speaker}) => {
  console.log('Speaker.js:', speaker);
  return (
    <ScrollView>
      <Text>About the Speaker</Text>
      <View style={styles.speaker}>
        <Image source={{uri: `${speaker.image}`}} style={styles.profile} />
        <Text>{speaker.name}</Text>
        <Text>{speaker.bio}</Text>
        <Button
          title="Read More on Wikipedia"
          onPress={() => {
            Linking.openURL(speaker.url);
          }}
        />
      </View>
    </ScrollView>
  );
};
export default Speaker;
