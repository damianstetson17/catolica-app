import {  StackNavigationProp } from '@react-navigation/stack';
import { NavigatorScreenParams } from '@react-navigation/native';

// US Stack
export type StackParamList = {
  USPage: undefined;
  GOSPEL: undefined;
};

//Bottom Tab, indicando que "US" es un Stack anidado
export type RootTabParamList = {
  HOME: undefined;
  US: NavigatorScreenParams<StackParamList>; 
  CONTACT: undefined;
};

// Define el tipo de navegación para el useNavigation hook
export type RootTabNavigationProp = StackNavigationProp<RootTabParamList>;
