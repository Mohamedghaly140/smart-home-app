import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';

const Device = props => {
  return (
    <View style={styles.card}>
      <View style={styles.deviceContainer}>
        <View style={styles.deviceImage}>
          <MaterialCommunityIcons name={props.icon} size={90} color='#fff' />
        </View>
        <View style={styles.deviceName}>
          <Text style={styles.name}>{props.name}</Text>
        </View>
      </View>
    </View>
  );
};

export default Device;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: '8%',
  },
  deviceContainer: {
    flex: 1,
    height: 100,
    width: 170,
  },
  deviceImage: {
    backgroundColor: Colors.secondary,
    padding: '5%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  deviceName: {
    backgroundColor: Colors.accent,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  name: {
    color: '#fff',
    paddingVertical: '5%',
    fontSize: 19,
  },
});
