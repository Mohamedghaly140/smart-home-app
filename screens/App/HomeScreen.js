import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Logo from '../../components/UI/Logo';

const Home = () => {
  return (
    <View style={styles.screen}>
      <Logo />
      <Text>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
