import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ScheduleScreen from '../screens/Schedule';
import SessionScreen from '../screens/Session';
import MapScreen from '../screens/Map';
import FavesScreen from '../screens/Faves';
import AboutScreen from '../screens/About';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {sharedScreenOptions} from './config';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ScheduleStack = createStackNavigator();
const MapStack = createStackNavigator();
const FavesStack = createStackNavigator();
const AboutStack = createStackNavigator();
const BottomTabNav = createBottomTabNavigator();

const ScheduleStackScreens = () => (
  <ScheduleStack.Navigator screenOptions={sharedScreenOptions}>
    <ScheduleStack.Screen name="Schedule" component={ScheduleScreen} />
    <ScheduleStack.Screen name="Session" component={SessionScreen} />
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
    <FavesStack.Screen name="Session" component={SessionScreen} />
  </FavesStack.Navigator>
);

const AboutStackScreens = () => (
  <AboutStack.Navigator screenOptions={sharedScreenOptions}>
    <AboutStack.Screen name="About" component={AboutScreen} />
  </AboutStack.Navigator>
);

const BottomTabNavScreens = props => (
  <BottomTabNav.Navigator
    tabBarOptions={{
      activeTintColor: 'white',
      inactiveTintColor: '#999999',
      labelStyle: {fontSize: 10, fontFamily: 'Montserrat'},
      style: {backgroundColor: 'black'},
    }}
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;

        if (route.name === 'Schedule') {
          iconName = focused ? 'calendar-blank' : 'calendar-blank-outline';
        } else if (route.name === 'Map') {
          iconName = focused ? 'map' : 'map-outline';
        } else if (route.name === 'Faves') {
          iconName = focused ? 'heart' : 'heart-outline';
        } else if (route.name === 'About') {
          iconName = focused ? 'information' : 'information-outline';
        }
        return (
          <MaterialCommunityIcons name={iconName} size={size} color={color} />
        );
      },
    })}>
    <BottomTabNav.Screen name="Schedule" component={ScheduleStackScreens} />
    <BottomTabNav.Screen name="Map" component={MapStackScreens} />
    <BottomTabNav.Screen name="Faves" component={FavesStackScreens} />
    <BottomTabNav.Screen name="About" component={AboutStackScreens} />
  </BottomTabNav.Navigator>
);

export default BottomTabNavScreens;
