import React, {Component} from 'react';
import About from './About';
import {Text} from 'react-native';
import {Query} from '@apollo/react-components';
import {gql} from 'apollo-boost';
import Loader from '../../components/Loader';

const GET_ALL_CONDUCTS = gql`
  {
    allConducts {
      id
      description
      title
      order
    }
  }
`;
class AboutContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Query query={GET_ALL_CONDUCTS}>
        {({loading, error, data}) => {
          if (loading) return <Loader />;
          if (error) return <Text>{error}</Text>;
          return <About data={data.allConducts} />;
        }}
      </Query>
    );
  }
}
export default AboutContainer;
