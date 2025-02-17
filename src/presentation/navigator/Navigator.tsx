import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { HomeScreen } from '../screens/home/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AboutScreen from '../screens/about/AboutScreen';
import ContactScreen from '../screens/contact/ContactScreen';

export const Navigator = () => {
    const Tabs = createBottomTabNavigator({
      screens: {
        Home: HomeScreen,
      },
    });

  return (
    <NavigationContainer>
        <Tabs.Navigator screenOptions={{headerShown: false}}>
            <Tabs.Screen name="HOME" component={HomeScreen} options={{
              title: 'Inicio',
            }}/>
            <Tabs.Screen name="US" component={AboutScreen} options={{
              title: 'Nosotros',
            }}/>
            <Tabs.Screen name="CONTACT" component={ContactScreen} options={{
              title: 'Contacto',
            }}/>
        </Tabs.Navigator>
    </NavigationContainer>
  )
}