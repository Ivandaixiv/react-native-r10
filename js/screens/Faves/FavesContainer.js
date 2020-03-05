import React, {Component} from 'react';
import Faves from './Faves';
import {Query} from '@apollo/react-components';

class FavesContainer extends Component {
  render() {
    return (
      <Query>
        <Faves />
      </Query>
    );
  }
}
export default FavesContainer;
