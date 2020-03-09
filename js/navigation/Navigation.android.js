import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ScheduleScreen from '../screens/Schedule';
import SessionScreen from '../screens/Session';
import MapScreen from '../screens/Map';
import FavesScreen from '../screens/Faves';
import AboutScreen from '../screens/About';
import {sharedScreenOptions, sharedBackOptions} from './config';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
  <Drawer.Navigator
    drawerContentOptions={{
      activeTintColor: '#9963ea',
      labelStyle: {fontSize: 12, fontFamily: 'Montserrat'},
      style: {backgroundColor: '#e6e6e6'},
    }}
    screenOptions={({route}) => ({
      drawerIcon: ({focused, color, size}) => {
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
    <Drawer.Screen name="Schedule" component={ScheduleStackScreens} />
    <Drawer.Screen name="Map" component={MapStackScreens} />
    <Drawer.Screen name="Faves" component={FavesStackScreens} />
    <Drawer.Screen name="About" component={AboutStackScreens} />
  </Drawer.Navigator>
);
export default DrawerNav;
