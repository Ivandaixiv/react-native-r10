import MainScreens from './Navigation';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SpeakerModal from '../screens/Speaker';

const RootStack = createStackNavigator();

const RootStackScreens = props => (
  <RootStack.Navigator mode="modal" headerMode="none">
    <RootStack.Screen name="BottomTab" component={MainScreens} />
    <RootStack.Screen name="Speaker" component={SpeakerModal} />
  </RootStack.Navigator>
);

export default RootStackScreens;
