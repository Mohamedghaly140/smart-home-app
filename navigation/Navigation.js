import React from 'react';
import { StyleSheet, Platform, Image, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {
  Ionicons,
  FontAwesome,
  MaterialIcons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

import HomeScreen, {
  screenOptions as homeScreenOptions,
} from '../screens/App/HomeScreen';
import ProfileScreen from '../screens/App/ProfileScreen';
import SettingsScreen from '../screens/App/SettingsScreen';
import StaticsScreen from '../screens/App/StaticsScreen';
import Signup from '../screens/auth/SignupScreen';
import Login from '../screens/auth/LoginScreen';

import Logo from '../components/UI/Logo';

import Colors from '../constants/Colors';

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
  },
  headerTintColor: Platform.OS === 'android' ? '#fff' : Colors.primary,
  headerTitleStyle: {
    fontFamily: 'open-sans-bold',
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans',
  },
};

const HomeStack = createStackNavigator();

const AuthStack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        title: 'Home',
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: Colors.accent,
          shadowColor: 'transparent',
        },
      }}
    >
      <HomeStack.Screen
        name='home'
        component={HomeScreen}
        options={homeScreenOptions}
      />
    </HomeStack.Navigator>
  );
};

const StaticsStack = createStackNavigator();

const StaticsNavigator = () => {
  return (
    <StaticsStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        title: 'Statics',
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: Colors.accent,
          shadowColor: 'transparent',
        },
      }}
    >
      <StaticsStack.Screen name='statics' component={StaticsScreen} />
    </StaticsStack.Navigator>
  );
};

const ProfileStack = createStackNavigator();

export const ProfileNavigator = () => {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        title: 'Profile',
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: Colors.accent,
          shadowColor: 'transparent',
        },
      }}
    >
      <ProfileStack.Screen name='profile' component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
};

const SettingsStack = createStackNavigator();

const SettingsNavigator = () => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        title: 'Settings',
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: Colors.accent,
          shadowColor: 'transparent',
        },
      }}
    >
      <SettingsStack.Screen name='settings' component={SettingsScreen} />
    </SettingsStack.Navigator>
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

const Tab = createMaterialBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName='home'
      activeColor='#fff'
      barStyle={{ backgroundColor: Colors.accent }}
    >
      <Tab.Screen
        name='home'
        component={HomeNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarAccessibilityLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons name='ios-home' size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='statics'
        component={StaticsNavigator}
        options={{
          tabBarLabel: 'Statics',
          tabBarAccessibilityLabel: 'Statics',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name='monitor-dashboard'
              size={26}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name='profile'
        component={ProfileNavigator}
        options={{
          tabBarLabel: 'Profile',
          tabBarAccessibilityLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <FontAwesome name='user' size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='settings'
        component={SettingsNavigator}
        options={{
          tabBarLabel: 'Settings',
          tabBarAccessibilityLabel: 'Settings',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name='settings' size={26} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const AppDrawer = createDrawerNavigator();

export const AppDrawerNavigator = () => {
  return (
    <AppDrawer.Navigator headerMode='none'>
      <AppDrawer.Screen name='Home' component={BottomTabNavigator} />
    </AppDrawer.Navigator>
  );
};

const styles = StyleSheet.create({});
