// js/App.js
import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import About from './screens/About';
import Speaker from './screens/Speaker';
import Schedule from './screens/Schedule';
import Session from './screens/Session';
import styles from './config/styles';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <View>
          {/* <Text>Welcome to React Native!</Text> */}
          <About />
        </View>
      </SafeAreaView>
    );
  }
}
