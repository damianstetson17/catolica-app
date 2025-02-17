import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { HomeScreen } from '../screens/home/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AboutScreen from '../screens/about/AboutScreen';
import ContactScreen from '../screens/contact/ContactScreen';
import { HomeIcon, IDIcon, ChurchIcon } from '../icons/Icons';

export const Navigator = () => {

    const Tabs = createBottomTabNavigator({
      screens: {
        Home: HomeScreen,
      },
    });

  return (
    <NavigationContainer>
        <Tabs.Navigator screenOptions={{headerShown: false}} initialRouteName="HOME">
            <Tabs.Screen name="HOME" component={HomeScreen} options={{
              title: 'Inicio',
              tabBarIcon: ({focused}) => (
                <HomeIcon color={ focused ? 'blue' : 'gray' }/>
              ),
            }}/>
            <Tabs.Screen name="US" component={AboutScreen} options={{
              title: 'Nosotros',
              tabBarIcon: ({focused}) => (
                <ChurchIcon color={ focused ? 'blue' : 'gray' }/>
              ),
            }}/>
            <Tabs.Screen name="CONTACT" component={ContactScreen} options={{
              title: 'Contacto',
              tabBarIcon: ({focused}) => (
                <IDIcon color={ focused ? 'blue' : 'gray' }/>
              ),
            }}/>
        </Tabs.Navigator>
    </NavigationContainer>
  )
}