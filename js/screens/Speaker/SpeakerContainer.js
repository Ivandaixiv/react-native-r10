import React, {Component} from 'react';
import Speaker from './Speaker';
import {FavesContext} from '../../context/FavesContext';

class SpeakerContainer extends Component {
  render() {
    console.log('Props:', this.props.navigation);
    const {navigation} = this.props;
    const {speaker} = this.props.route.params;
    return <Speaker speaker={speaker} navigation={navigation} />;
  }
}
export default SpeakerContainer;
