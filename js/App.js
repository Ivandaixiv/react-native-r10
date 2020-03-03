// js/App.js
import {NavigationContainer} from '@react-navigation/native';
import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import About from './screens/About';
import Speaker from './screens/Speaker';
import Schedule from './screens/Schedule';
import Session from './screens/Session';
import ScheduleNav from './navigation';
import styles from './config/styles';

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <ScheduleNav />
      </NavigationContainer>
    );
  }
}
