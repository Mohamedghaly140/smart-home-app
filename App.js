import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Signup from './screens/auth/Signup';
import Login from './screens/auth/Login';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'hemi-head': require('./assets/fonts/hemiheadbdit.ttf'),
  });
};

export default function App() {
  const [loadedFonts, setLoadedFonts] = useState(false);

  if (!loadedFonts) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setLoadedFonts(true);
        }}
      />
    );
  }
  return (
    <PaperProvider>
      <StatusBar style='auto' />
      <Login />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
