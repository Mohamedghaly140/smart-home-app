import React from 'react';
import { StyleSheet, Text, View, Platform, FlatList } from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/UI/HeaderButton';
import Logo from '../../components/UI/Logo';

import Device from '../../components/Smart/Device';

const devices = [
  { id: 1, name: 'Smart Home', icon: 'lock-smart' },
  { id: 2, name: 'Smart TV', icon: 'monitor-screenshot' },
  { id: 3, name: 'Alert Office', icon: 'office-building' },
];

const Home = props => {
  return (
    <View style={styles.screen}>
      <FlatList
        style={{
          width: '100%',
        }}
        data={devices}
        key={devices.id}
        renderItem={({ item }) => <Device name={item.name} icon={item.icon} />}
      />
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
  },
});
