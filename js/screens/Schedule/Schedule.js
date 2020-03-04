import React from 'react';
import {Text, TouchableOpacity, View, SectionList} from 'react-native';
import styles from './styles';
import moment from 'moment';

// Helper to format GraphQL data into section list data
export const formatSessionData = sessions => {
  return sessions
    .reduce((acc, curr) => {
      const timeExists = acc.find(section => section.title === curr.startTime);
      timeExists
        ? timeExists.data.push(curr)
        : acc.push({title: curr.startTime, data: [curr]});
      return acc;
    }, [])
    .sort((a, b) => a.title - b.title);
};

const Schedule = ({
  navigation,
  allSessions,
  addFaveSession,
  getFavedSessionIds,
  removeFaveSession,
}) => {
  return (
    <View>
      <SectionList
        sections={formatSessionData(allSessions)}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.session}
            onPress={() => {
              navigation.navigate('Session', {
                session: item,
                addFaveSession,
                getFavedSessionIds,
                removeFaveSession,
              });
            }}>
            <Text>{item.title}</Text>
            <Text>{item.location}</Text>
          </TouchableOpacity>
        )}
        renderSectionHeader={({section}) => (
          <Text>{moment(section.title).format('LT')}</Text>
        )}
        keyExtractor={item => item.id}
      />

      {/* <TouchableOpacity
        onPress={() => {
          navigation.navigate('Session');
        }}>
        <Text>Go To Session --></Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Speaker');
        }}>
        <Text>Go To Speaker --></Text>
      </TouchableOpacity> */}
    </View>
  );
};
export default Schedule;
