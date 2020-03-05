import React from 'react';
import {Text, TouchableOpacity, SectionList, View} from 'react-native';
import styles from './styles';
import moment from 'moment';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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

const Schedule = ({faveIds, navigation, allSessions}) => {
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
              });
            }}>
            <View>
              <Text>{item.title}</Text>
              <Text>{item.location}</Text>
            </View>
            <Text>
              {faveIds.includes(item.id, 0) ? (
                <MaterialCommunityIcons name="heart" color="#cf392a" />
              ) : null}
            </Text>
          </TouchableOpacity>
        )}
        renderSectionHeader={({section}) => (
          <Text>{moment(section.title).format('LT')}</Text>
        )}
        stickySectionHeadersEnabled={false}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
export default Schedule;
