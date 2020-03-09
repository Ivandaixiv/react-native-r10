import React, {Component} from 'react';
import Schedule from './Schedule';
import {Query} from '@apollo/react-components';
import {gql} from 'apollo-boost';
import {Text} from 'react-native';
import {FavesContext} from '../../context/FavesContext';
import Loader from '../../components/Loader';

const GET_ALL_SESSIONS = gql`
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
`;
export default class ScheduleContainer extends Component {
  render() {
    return (
      <FavesContext.Consumer>
        {({faveIds}) => (
          <Query query={GET_ALL_SESSIONS}>
            {({loading, error, data}) => {
              if (loading) return <Loader />;
              if (error) return <Text>Error</Text>;
              return (
                <Schedule
                  faveIds={faveIds}
                  navigation={this.props.navigation}
                  allSessions={data.allSessions}
                />
              );
            }}
          </Query>
        )}
      </FavesContext.Consumer>
    );
  }
}
