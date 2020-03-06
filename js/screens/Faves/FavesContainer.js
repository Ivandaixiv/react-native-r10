import React, {Component} from 'react';
import Faves from './Faves';
import {Text} from 'react-native';
import {Query} from '@apollo/react-components';
import {gql} from 'apollo-boost';
import {FavesContext} from '../../context/FavesContext';

const GET_ALL_SESSION = gql`
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
class FavesContainer extends Component {
  render() {
    return (
      <FavesContext.Consumer>
        {({faveIds}) => (
          <Query query={GET_ALL_SESSION}>
            {({loading, error, data}) => {
              if (loading) return <Text>Loading...</Text>;
              if (error) return <Text>{error}</Text>;
              console.log('This is the data: ', data);
              console.log('This is the props: ', this.props);
              console.log('This is the faveIds: ', faveIds);
              const favedSessions = data.allSessions.filter(session =>
                faveIds.includes(session.id),
              );
              return (
                <Faves
                  faveIds={faveIds}
                  sessions={favedSessions}
                  navigation={this.props.navigation}
                />
              );
            }}
          </Query>
        )}
      </FavesContext.Consumer>
    );
  }
}
export default FavesContainer;
