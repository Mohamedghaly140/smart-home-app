import React, { useState, useReducer, useEffect, useCallback } from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { Title, Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import Input from '../../components/UI/Input';
import Colors from '../../constants/Colors';
import * as authActions from '../../store/actions/auth';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues,
    };
  }
  return state;
};

const Signup = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const dispatch = useDispatch();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: '',
      password: '',
    },
    inputValidities: {
      email: false,
      password: false,
    },
    formIsValid: false,
  });

  useEffect(() => {
    if (error) {
      Alert.alert('An Error Occurred!', error, [{ text: 'Okay' }]);
    }
  }, [error]);

  const authHandler = async () => {
    setError(null);
    setIsLoading(true);
    try {
      await dispatch(
        authActions.login(
          formState.inputValues.email,
          formState.inputValues.password
        )
      );
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [dispatchFormState]
  );

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
                      onInputChange={inputChangeHandler}
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
                    autoCapitalize='none'
                    secureTextEntry
                    onInputChange={inputChangeHandler}
                    required
                  />
                </View>
                <View style={styles.btn}>
                  {isLoading ? (
                    <ActivityIndicator size='small' color={Colors.primary} />
                  ) : (
                    <Button
                      mode='contained'
                      color='#fff'
                      style={{ backgroundColor: Colors.secondary }}
                      onPress={authHandler}
                    >
                      Login
                    </Button>
                  )}
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
                    style={styles.signupBtn}
                    color={Colors.primary}
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
    marginTop: '7%',
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
  signupBtn: {
    backgroundColor: '#fff',
  },
});
