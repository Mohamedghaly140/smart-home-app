import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/UI/HeaderButton';
import Logo from '../../components/UI/Logo';

const Home = props => {
  return (
    <View style={styles.screen}>
      <Logo />
      <Text>Home</Text>
    </View>
  );
};

export const screenOptions = navData => {
  return {
    headerTitle: 'Home',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Menu'
          iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default Home;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
