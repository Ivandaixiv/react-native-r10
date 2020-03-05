import React, {Component} from 'react';
import Session from './Session';
import {FavesContext} from '../../context/FavesContext';

class SessionContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <FavesContext.Consumer>
        {({addFaveSession, getFavedSessionIds, removeFaveSession, faveIds}) => (
          <Session
            faveIds={faveIds}
            navigation={this.props.navigation}
            route={this.props.route}
            addFaveSession={addFaveSession}
            getFavedSessionIds={getFavedSessionIds}
            removeFaveSession={removeFaveSession}
          />
        )}
      </FavesContext.Consumer>
    );
  }
}
export default SessionContainer;
