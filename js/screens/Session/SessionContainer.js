import React, {Component} from 'react';
import Session from './Session';

class SessionContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Session navigation={this.props.navigation} route={this.props.route} />
    );
  }
}
export default SessionContainer;
