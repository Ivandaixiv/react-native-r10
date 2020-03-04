// js/App.js
import {NavigationContainer} from '@react-navigation/native';
import React, {Component} from 'react';
import RootNav from './navigation';
import {ApolloProvider} from '@apollo/react-hooks';
import client from './config/api';

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <NavigationContainer>
          <RootNav />
        </NavigationContainer>
      </ApolloProvider>
    );
  }
}
