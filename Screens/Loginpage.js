import React, {useEffect, useState} from 'react';
import {Text, View, TextInput, Alert} from 'react-native';
import {Button, ThemeConsumer} from 'react-native-elements';
import axios from 'axios';
import * as yup from 'yup';
import {Formik} from 'formik';
import {useNavigation} from '@react-navigation/native';
import Anticon from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Loginpage = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState();
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const res = await axios.get(
        'https://summa-7423d-default-rtdb.asia-southeast1.firebasedatabase.app/summa.json',
      );
      setUserData(Object.values(res.data));
    } catch (error) {
      console.log(error);
    }
    await AsyncStorage.setItem('login', '1');
  };
  const onClickHandler = async values => {
    let invalid = true;
    userData?.map((result, i) => {
      if (
        result?.email === values?.email &&
        result?.password === values?.password
      ) {
        navigation.navigate('Mainpage');
        invalid = false;
      }
    });
    if (invalid) {
      Alert.alert('invalid');
    }
  };
  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('please enter valid email')
      .trim()
      .required('Email Address is required'),
    password: yup
      .string()
      .matches(/^\S*$/, 'Enter without spaces')
      .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
      .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
      .matches(/\d/, 'Password must have a number')
      .matches(
        /[!@#$%^&*()\-_"=+{}; :,<.>]/,
        'Password must have a special character',
      )
      .required('password is required'),
  });
  return (
    <ThemeConsumer>
      {({theme}) => (
        <View testID="LoginPage1" style={theme.Loginstyles.mainView}>
          <View style={theme.Loginstyles.View1}>
            <Anticon name="login" color="#121b22" size={25} />
            <Text style={theme.Loginstyles.Text1}>Login</Text>
          </View>
          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{email: '', password: ''}}
            onSubmit={values => onClickHandler(values)}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              touched,
              values,
              errors,
              isValid,
            }) => (
              <View>
                <View style={theme.Loginstyles.View2}>
                  <Text style={theme.Loginstyles.Text2}>Email :</Text>
                  <TextInput
                    placeholder="Enter Your Email"
                    style={theme.Loginstyles.textInput}
                    testID="email"
                    cursorColor="#43a6d1"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    keyboardType="email-address"
                  />
                  {errors.email && <Text>{errors.email}</Text>}
                  <View style={theme.Loginstyles.View3}>
                    <Text style={theme.Loginstyles.Text2}>Password :</Text>
                    <TextInput
                      placeholder="Password"
                      testID="password"
                      style={theme.Loginstyles.textInput}
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                      placeholderTextColor="grey"
                      secureTextEntry
                      keyboardType="email-address"
                    />
                    {errors.password && <Text>{errors.password}</Text>}
                  </View>
                </View>
                <Button
                  testID="loginButton"
                  title="LOGIN"
                  buttonStyle={theme.Loginstyles.button}
                  titleStyle={theme.Loginstyles.buttonTitle}
                  onPress={handleSubmit}
                  disabled={!isValid}
                />
                <Text
                  style={theme.Loginstyles.text3}
                  testID="navText"
                  onPress={() => navigation.navigate('SignUp')}>
                  Dont have an account?
                </Text>
                <Text
                  style={theme.Loginstyles.text3}
                  testID="navText1"
                  onPress={() => navigation.navigate('Mainpage')}>
                  Skip for now!
                </Text>
              </View>
            )}
          </Formik>
        </View>
      )}
    </ThemeConsumer>
  );
};

export default Loginpage;
