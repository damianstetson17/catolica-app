import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {HomeScreen} from '../screens/home/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AboutScreen from '../screens/about/AboutScreen';
import ContactScreen from '../screens/contact/ContactScreen';
import {HomeIcon, IDIcon, ChurchIcon} from '../icons/Icons';
import GospelScreen from '../screens/gospel/GospelScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {RootTabParamList, StackParamList} from './types';

export const Navigator = () => {
  const Tabs = createBottomTabNavigator<RootTabParamList>();
  const Stack = createStackNavigator<StackParamList>();

  const StackScreens = () => (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="USPage" component={AboutScreen} />
      <Stack.Screen name="GOSPEL" component={GospelScreen} />
    </Stack.Navigator>
  );

  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="HOME">
        <Tabs.Screen
          name="HOME"
          component={HomeScreen}
          options={{
            title: 'Inicio',
            tabBarIcon: ({focused}) => (
              <HomeIcon color={focused ? 'blue' : 'gray'} />
            ),
          }}
        />
        <Tabs.Screen
          name="US"
          component={StackScreens}
          options={{
            title: 'Nosotros',
            tabBarIcon: ({focused}) => (
              <ChurchIcon color={focused ? 'blue' : 'gray'} />
            ),
            popToTopOnBlur: true,
          }}
        />
        <Tabs.Screen
          name="CONTACT"
          component={ContactScreen}
          options={{
            title: 'Contacto',
            tabBarIcon: ({focused}) => (
              <IDIcon color={focused ? 'blue' : 'gray'} />
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};
