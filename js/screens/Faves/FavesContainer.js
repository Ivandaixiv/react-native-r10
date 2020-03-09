import React, {Component} from 'react';
import Faves from './Faves';
import {Text} from 'react-native';
import {Query} from '@apollo/react-components';
import {gql} from 'apollo-boost';
import {FavesContext} from '../../context/FavesContext';
import Loader from '../../components/Loader';

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
              if (loading) return <Loader />;
              if (error) return <Text>{error}</Text>;
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
