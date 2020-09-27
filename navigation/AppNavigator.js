import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import {
  AuthNavigator,
  BottomTabNavigator,
  AppDrawerNavigator,
} from './Navigation';

const AppNavigator = props => {
  return (
    <NavigationContainer>
      <AppDrawerNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
