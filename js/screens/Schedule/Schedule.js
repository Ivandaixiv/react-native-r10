import React from 'react';
import {Text, TouchableOpacity, View, SectionList} from 'react-native';
import styles from './styles';

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

const Schedule = ({navigation, allSessions}) => {
  console.log(allSessions);
  return (
    <View>
      <SectionList
        sections={formatSessionData(allSessions)}
        renderItem={({item}) => (
          <View style={styles.session}>
            <Text>{item.title}</Text>
            <Text>{item.location}</Text>
          </View>
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
