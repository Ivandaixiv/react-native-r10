import React, {Component} from 'react';
import {queryFaves, deleteFave, createFave} from '../../config/models';

export const FavesContext = React.createContext();

class FavesProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faveIds: [],
    };
  }

  componentDidMount = () => {
    this.getFavedSessionIds();
  };

  getFavedSessionIds = async () => {
    try {
      const faves = await queryFaves();
      const sessionIds = faves.map(fave => fave[0]);
      this.setState({faveIds: sessionIds});
    } catch (e) {
      throw new Error(e);
    }
  };

  addFaveSession = async sessionId => {
    try {
      const newFav = await createFave(sessionId);
      if (newFav) {
        this.setState({faveIds: [...this.state.faveIds, newFav.id]});
      }
      this.getFavedSessionIds();
    } catch (e) {
      throw new Error(e);
    }
  };

  removeFaveSession = async sessionId => {
    try {
      await deleteFave(sessionId);
      this.getFavedSessionIds();
    } catch (e) {
      throw new Error(e);
    }
  };

  render() {
    return (
      <FavesContext.Provider
        value={{
          ...this.state,
          addFaveSession: this.addFaveSession,
          getFavedSessionIds: this.getFavedSessionIds,
          removeFaveSession: this.removeFaveSession,
        }}>
        {this.props.children}
      </FavesContext.Provider>
    );
  }
}
export default FavesProvider;
