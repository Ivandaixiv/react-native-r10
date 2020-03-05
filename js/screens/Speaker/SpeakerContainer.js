import React, {Component} from 'react';
import Speaker from './Speaker';

class SpeakerContainer extends Component {
  render() {
    const {speaker} = this.props.route.params;
    return <Speaker speaker={speaker} />;
  }
}
export default SpeakerContainer;
