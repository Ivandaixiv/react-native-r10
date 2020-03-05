import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ScheduleScreen from '../screens/Schedule';
import SessionScreen from '../screens/Session';
import MapScreen from '../screens/Map';
import FavesScreen from '../screens/Faves';
import AboutScreen from '../screens/About';
import {sharedScreenOptions, sharedBackOptions} from './config';
import {createDrawerNavigator} from '@react-navigation/drawer';

const ScheduleStack = createStackNavigator();
const MapStack = createStackNavigator();
const FavesStack = createStackNavigator();
const AboutStack = createStackNavigator();

const ScheduleStackScreens = props => (
  <ScheduleStack.Navigator screenOptions={sharedScreenOptions}>
    <ScheduleStack.Screen name="Schedule" component={ScheduleScreen} />
    <ScheduleStack.Screen
      name="Session"
      component={SessionScreen}
      options={sharedBackOptions}
      navigation={props.navigation}
    />
  </ScheduleStack.Navigator>
);

const MapStackScreens = () => (
  <MapStack.Navigator screenOptions={sharedScreenOptions}>
    <MapStack.Screen name="Map" component={MapScreen} />
  </MapStack.Navigator>
);

const FavesStackScreens = () => (
  <FavesStack.Navigator screenOptions={sharedScreenOptions}>
    <FavesStack.Screen name="Faves" component={FavesScreen} />
    <FavesStack.Screen
      name="Session"
      component={SessionScreen}
      options={sharedBackOptions}
    />
  </FavesStack.Navigator>
);

const AboutStackScreens = () => (
  <AboutStack.Navigator screenOptions={sharedScreenOptions}>
    <AboutStack.Screen name="About" component={AboutScreen} />
  </AboutStack.Navigator>
);

const Drawer = createDrawerNavigator();

const DrawerNav = props => (
  <Drawer.Navigator>
    <Drawer.Screen name="Schedule" component={ScheduleStackScreens} />
    <Drawer.Screen name="Map" component={MapStackScreens} />
    <Drawer.Screen name="Faves" component={FavesStackScreens} />
    <Drawer.Screen name="About" component={AboutStackScreens} />
  </Drawer.Navigator>
);
export default DrawerNav;
