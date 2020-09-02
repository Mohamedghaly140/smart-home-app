import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, Title } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../../constants/Colors';

const Signup = () => {
  return (
    <View style={styles.screen}>
      <LinearGradient
        style={styles.gradient}
        colors={[Colors.primary, Colors.accent, Colors.secondary]}
      >
        <View style={styles.signup}></View>
        <Title style={styles.title}>Create new account</Title>
        <View style={styles.form}>
          <TextInput
            style={styles.formControl}
            label='Username'
            mode='outlined'
          />
        </View>
      </LinearGradient>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
  },
  gradient: {
    flex: 1,
  },
  signup: {
    margin: '5%',
  },
  title: {
    fontFamily: 'open-sans',
    color: '#fff',
    fontSize: 22,
    textAlign: 'center',
  },
  form: {
    width: '100%',
    justifyContent: 'center',
  },
  formControl: {
    marginHorizontal: '5%',
  },
});
