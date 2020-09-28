import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider as ReduxProvider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Signup from './screens/auth/SignupScreen';
import Login from './screens/auth/LoginScreen';
import AppNavigator from './navigation/AppNavigator';
import authReducer from './store/reducers/auth';

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

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
    <ReduxProvider store={store}>
      <PaperProvider>
        <StatusBar style='light' />
        <AppNavigator />
      </PaperProvider>
    </ReduxProvider>
  );
}
