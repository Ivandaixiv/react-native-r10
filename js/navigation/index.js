import BottomTabNavScreens from './BottomTabNav';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const RootStack = createStackNavigator();

const RootStackScreens = props => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="BottomTab" component={BottomTabNavScreens} />
  </RootStack.Navigator>
);

export default RootStackScreens;
