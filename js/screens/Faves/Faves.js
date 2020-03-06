import React from 'react';
import {Text, TouchableOpacity, SectionList, View} from 'react-native';
import styles from './styles';
import moment from 'moment';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import formatSessionData from '../../config/helper';

const Faves = ({faveIds, navigation, sessions}) => {
  console.log('sessions:', sessions);
  return (
    <View>
      <SectionList
        sections={formatSessionData(sessions)}
        renderItem={({item}) =>
          faveIds.includes(item.id, 0) ? (
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
          ) : null
        }
        renderSectionHeader={
          ({section}) => (
            // section.data.includes(faveIds, 0) ? (
            <Text>{moment(section.title).format('LT')}</Text>
          )
          // ) : null
        }
        stickySectionHeadersEnabled={false}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
export default Faves;
