import React from 'react';
import {Text, TouchableHighlight, SectionList, View} from 'react-native';
import styles from './styles';
import moment from 'moment';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import formatSessionData from '../../config/helper';

const Schedule = ({faveIds, navigation, allSessions}) => {
  return (
    <View>
      <SectionList
        sections={formatSessionData(allSessions)}
        renderItem={({item}) => (
          <TouchableHighlight
            underlayColor="#e6e6e6"
            style={styles.session}
            onPress={() => {
              navigation.navigate('Session', {
                session: item,
              });
            }}>
            <>
              <View>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.location}>{item.location}</Text>
              </View>
              <Text>
                {faveIds.includes(item.id, 0) ? (
                  <MaterialCommunityIcons name="heart" color="#cf392a" />
                ) : null}
              </Text>
            </>
          </TouchableHighlight>
        )}
        renderSectionHeader={({section}) => (
          <Text style={styles.time}>{moment(section.title).format('LT')}</Text>
        )}
        stickySectionHeadersEnabled={false}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
export default Schedule;
