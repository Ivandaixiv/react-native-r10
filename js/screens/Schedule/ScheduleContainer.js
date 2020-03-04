import React, {Component} from 'react';
import Schedule from './Schedule';
import {Query} from '@apollo/react-components';
import {gql} from 'apollo-boost';
import {Text} from 'react-native';
import {FavesContext} from '../../context/FavesContext';

export default class ScheduleContainer extends Component {
  render() {
    return (
      <FavesContext.Consumer>
        {({addFaveSession, getFavedSessionIds, removeFaveSession, faveIds}) => (
          <Query
            query={gql`
              {
                allSessions {
                  id
                  description
                  location
                  speaker {
                    id
                    bio
                    image
                    name
                    url
                  }
                  startTime
                  title
                }
              }
            `}>
            {({loading, error, data}) => {
              if (loading) return <Text>Loading...</Text>;
              if (error) return <Text>Error</Text>;
              console.log('Faveids: ', faveIds);
              return (
                <Schedule
                  navigation={this.props.navigation}
                  allSessions={data.allSessions}
                  addFaveSession={addFaveSession}
                  getFavedSessionIds={getFavedSessionIds}
                  removeFaveSession={removeFaveSession}
                />
              );
            }}
          </Query>
        )}
      </FavesContext.Consumer>
    );
  }
}
