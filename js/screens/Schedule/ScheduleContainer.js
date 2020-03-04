import React, {Component} from 'react';
import Schedule from './Schedule';
import {Query} from '@apollo/react-components';
import {gql} from 'apollo-boost';
import {Text} from 'react-native';

export default class ScheduleContainer extends Component {
  render() {
    return (
      <Query
        query={gql`
          {
            allSessions {
              id
              description
            }
          }
        `}>
        {({loading, error, data}) => {
          if (loading) return <Text>Loading</Text>;
          if (error) return <Text>Error</Text>;
          return <Schedule navigation={this.props.navigation} data={data} />;
        }}
      </Query>
    );
  }
}
