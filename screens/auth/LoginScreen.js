import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import { Title, Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import Input from '../../components/UI/Input';
import Colors from '../../constants/Colors';

const Signup = props => {
  const [isSelected, setSelection] = useState(false);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <LinearGradient
          style={styles.gradient}
          colors={[Colors.accent, Colors.secondary]}
        >
          <ScrollView>
            <KeyboardAvoidingView
              behavior='padding'
              keyboardVerticalOffset={200}
              style={{ flex: 1 }}
            >
              <View style={styles.signup}>
                <Title style={styles.title}>Login</Title>
                <View style={styles.form}>
                  <View style={styles.formControl}>
                    <Input
                      id='email'
                      label='Email'
                      keyboardType='email-address'
                      autoCapitalize='sentences'
                      autoCorrect
                      returnKeyType='next'
                      onInputChange={() => {}}
                      required
                      email
                    />
                  </View>
                </View>
                <View style={styles.formControl}>
                  <Input
                    id='password'
                    label='Password'
                    keyboardType='default'
                    returnKeyType='next'
                    onInputChange={() => {}}
                    required
                  />
                </View>
                <View style={styles.btn}>
                  <Button mode='contained' onPress={() => {}}>
                    Login
                  </Button>
                </View>
                <View style={styles.btn}>
                  <Button
                    mode='text'
                    color='#fff'
                    uppercase={false}
                    onPress={() => {}}
                  >
                    Forget password ? Reset your password
                  </Button>
                </View>
                <View style={styles.btn}>
                  <Button
                    mode='text'
                    color='#fff'
                    uppercase={false}
                    onPress={() => {}}
                    style={{ marginTop: 25 }}
                  >
                    Don't have account yet ?
                  </Button>
                </View>
                <View style={styles.btn}>
                  <Button
                    mode='contained'
                    onPress={() => {
                      props.navigation.goBack();
                    }}
                  >
                    Sign up
                  </Button>
                </View>
              </View>
            </KeyboardAvoidingView>
          </ScrollView>
        </LinearGradient>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Signup;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  gradient: {
    flex: 1,
  },
  signup: {
    margin: '5%',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'open-sans',
    color: '#fff',
    fontSize: 22,
    textAlign: 'center',
    marginTop: '5%',
  },
  form: {
    width: '100%',
    justifyContent: 'center',
  },
  formControl: {
    marginVertical: '1%',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: '3%',
  },
  checkbox: {
    alignSelf: 'center',
    color: '#fff',
  },
  label: {
    color: '#fff',
  },
  strong: {
    fontFamily: 'open-sans-bold',
  },
  btn: {
    marginVertical: '3%',
  },
});
