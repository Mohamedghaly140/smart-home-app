import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const StaticsScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Statics Screen</Text>
    </View>
  );
};

export default StaticsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
