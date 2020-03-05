import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import moment from 'moment';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Session = ({
  session,
  navigation,
  faveIds,
  addFaveSession,
  getFavedSessionIds,
  removeFaveSession,
}) => {
  return (
    <View>
      <Text>{session.location}</Text>
      <Text>
        {faveIds.includes(session.id, 0) ? (
          <MaterialCommunityIcons name="heart" color="#cf392a" />
        ) : null}
      </Text>
      <Text>{session.title}</Text>
      <Text>{moment(session.startTime).format('LT')}</Text>
      <Text>{session.location}</Text>
      <Text>Presented By: </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Speaker', {speaker: session.speaker});
        }}>
        <Text>{session.speaker.name}</Text>
      </TouchableOpacity>
      {!faveIds.includes(session.id, 0) ? (
        <TouchableOpacity
          onPress={() => {
            addFaveSession(session.id);
          }}>
          <Text>Add To Faves</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            removeFaveSession(session.id);
          }}>
          <Text>Remove From Faves</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
export default Session;
