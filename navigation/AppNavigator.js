import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthNavigator, BottomTabNavigator } from './Navigation';

const AppNavigator = props => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
