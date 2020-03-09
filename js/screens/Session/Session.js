import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

const Session = ({
  session,
  navigation,
  faveIds,
  addFaveSession,
  removeFaveSession,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoTop}>
        <Text style={styles.grayText}>{session.location}</Text>
        <Text>
          {faveIds.includes(session.id, 0) ? (
            <MaterialCommunityIcons name="heart" color="#cf392a" />
          ) : null}
        </Text>
      </View>
      <Text style={styles.title}>{session.title}</Text>
      <Text style={styles.time}>{moment(session.startTime).format('LT')}</Text>
      <Text style={styles.description}>{session.description}</Text>
      {session.speaker && <Text style={styles.grayText}>Presented By: </Text>}
      {session.speaker ? (
        <TouchableOpacity
          style={styles.speaker}
          onPress={() => {
            navigation.navigate('Speaker', {
              speaker: session.speaker,
            });
          }}>
          <Image
            source={{uri: `${session.speaker.image}`}}
            style={styles.profile}
          />
          <Text>{session.speaker.name}</Text>
        </TouchableOpacity>
      ) : null}
      <View style={styles.buttonContainer}>
        {!faveIds.includes(session.id, 0) ? (
          <View style={styles.buttonParent}>
            <LinearGradient
              colors={['#cf392a', '#9963ea']}
              start={{x: 0.0, y: 1.0}}
              end={{x: 1.0, y: 0.0}}
              style={[StyleSheet.absoluteFill, {...styles.button}]}
            />
            <Button
              color="white"
              title="Add To Faves"
              onPress={() => {
                addFaveSession(session.id);
              }}
            />
          </View>
        ) : (
          <View style={styles.buttonParent}>
            <LinearGradient
              colors={['#cf392a', '#9963ea']}
              start={{x: 0.0, y: 1.0}}
              end={{x: 1.0, y: 0.0}}
              style={[StyleSheet.absoluteFill, {...styles.button}]}
            />
            <Button
              color="white"
              title="Remove From Faves"
              onPress={() => {
                removeFaveSession(session.id);
              }}
            />
          </View>
        )}
      </View>
    </View>
  );
};
export default Session;
