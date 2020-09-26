import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  CheckBox,
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
              behavior='height'
              keyboardVerticalOffset={100}
              style={{ flex: 1 }}
            >
              <View style={styles.signup}>
                <Title style={styles.title}>Create new account</Title>
                <View style={styles.form}>
                  <View style={styles.formControl}>
                    <Input
                      id='username'
                      label='User Name'
                      keyboardType='default'
                      autoCapitalize='sentences'
                      autoCorrect
                      returnKeyType='next'
                      onInputChange={() => {}}
                      required
                    />
                  </View>
                  <View style={styles.formControl}>
                    <Input
                      id='email'
                      label='E-mail'
                      keyboardType='email-address'
                      autoCapitalize='sentences'
                      autoCorrect
                      returnKeyType='next'
                      onInputChange={() => {}}
                      required
                      email
                    />
                  </View>
                  <View style={styles.formControl}>
                    <Input
                      id='phone'
                      label='Phone Number'
                      keyboardType='phone-pad'
                      returnKeyType='next'
                      onInputChange={() => {}}
                      required
                    />
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
                  <View style={styles.formControl}>
                    <Input
                      id='confirmPassword'
                      label='Confirm Password'
                      keyboardType='default'
                      returnKeyType='next'
                      onInputChange={() => {}}
                      required
                    />
                  </View>
                  <View style={styles.formControl}>
                    <View style={styles.checkboxContainer}>
                      <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}
                        style={styles.checkbox}
                      />
                      <Text style={styles.label}>
                        Agree the <Text style={styles.strong}>terms</Text> and{' '}
                        <Text style={styles.strong}>privacy policy</Text>
                      </Text>
                    </View>
                  </View>
                  <View style={styles.formControl}>
                    <Button
                      mode='contained'
                      style={{ backgroundColor: Colors.secondary }}
                      onPress={() => {}}
                    >
                      Sign up
                    </Button>
                  </View>
                  <View style={styles.btn}>
                    <Button
                      mode='text'
                      color='#fff'
                      uppercase={false}
                      onPress={() => {}}
                    >
                      Already have an account ?
                    </Button>
                  </View>
                  <View style={styles.btn}>
                    <Button
                      style={styles.signinBtn}
                      mode='contained'
                      color={Colors.primary}
                      onPress={() => {
                        props.navigation.navigate('LoginScreen');
                      }}
                    >
                      Sign in
                    </Button>
                  </View>
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
    marginRight: '2%',
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
  signinBtn: {
    backgroundColor: '#fff',
  },
});
