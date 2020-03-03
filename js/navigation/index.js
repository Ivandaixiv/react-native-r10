import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ScheduleScreen from '../screens/Schedule';
import SessionScreen from '../screens/Session';

import MapScreen from '../screens/Map';

import FavesScreen from '../screens/Faves';

import AboutScreen from '../screens/About';

const ScheduleStack = createStackNavigator();
const MapStack = createStackNavigator();
const FavesStack = createStackNavigator();
const AboutStack = createStackNavigator();

const ScheduleStackScreens = () => (
  <ScheduleStack.Navigator>
    <ScheduleStack.Screen name="Schedule" component={ScheduleScreen} />
    <ScheduleStack.Screen name="Session" component={SessionScreen} />
  </ScheduleStack.Navigator>
);

const MapStackScreens = () => (
  <MapStack.Navigator>
    <MapStack.Screen name="Map" component={MapScreen} />
  </MapStack.Navigator>
);

const FavesStackScreens = () => (
  <FavesStack.Navigator>
    <FavesStack.Screen name="Faves" component={FavesScreen} />
    <FavesStack.Screen name="Session" component={SessionScreen} />
  </FavesStack.Navigator>
);

const AboutStackScreens = () => (
  <AboutStack.Navigator>
    <AboutStack.Screen name="About" component={AboutScreen} />
  </AboutStack.Navigator>
);
export {MapStackScreens, FavesStackScreens, AboutStackScreens};
export default ScheduleStackScreens;
