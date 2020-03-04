import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import moment from 'moment';

const Session = ({route, navigation}) => {
  const {
    addFaveSession,
    getFavedSessionIds,
    removeFaveSession,
    session,
  } = route.params;
  return (
    <View>
      {console.log('Route', route)}
      <Text>{session.location}</Text>
      <Text>{session.title}</Text>
      <Text>{moment(session.startTime).format('LT')}</Text>
      <Text>{session.location}</Text>
      <Text>Presented By: {session.speaker.name}</Text>
      <TouchableOpacity
        onPress={() => {
          addFaveSession(session.id);
        }}>
        <Text>Add To Faves</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Session;
