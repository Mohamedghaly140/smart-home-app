import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const HomeStack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
