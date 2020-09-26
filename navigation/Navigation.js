import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Signup from '../screens/auth/Signup';
import Login from '../screens/auth/Login';

const HomeStack = createStackNavigator();

const AuthStack = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

export const AuthNavigator = () => {
  return (
    <AuthStack.Navigator headerMode='none'>
      <AuthStack.Screen name='SignUpScreen' component={Signup} />
      <AuthStack.Screen name='LoginScreen' component={Login} />
    </AuthStack.Navigator>
  );
};

const styles = StyleSheet.create({});
