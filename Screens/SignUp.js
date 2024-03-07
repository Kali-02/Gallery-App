import React, { useState } from 'react'
import { Text, View, TextInput } from 'react-native'
import { Button, ThemeConsumer } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Anticon from 'react-native-vector-icons/AntDesign'

const SignUp = () => {
    const navigation = useNavigation()
    const [text, setText] = useState('')
    const onClickHandler = async (val) => {
        setText(val)
        const res = await axios
            .post("https://summa-7423d-default-rtdb.asia-southeast1.firebasedatabase.app/summa.json", val)
            .catch((err) => console.log(err))
        await AsyncStorage.setItem('login', '1')
        navigation.navigate("Loginpage")
    }
    const loginValidationSchema = yup.object().shape({
        email: yup
            .string()
            .email("please enter valid email")
            .trim()
            .required("Email Address is required"),
        password: yup
            .string()
            .matches(/^\S*$/, "Enter without spaces")
            .min(5, ({ min }) => `password must be at least ${min} characters`)
            .max(15, ({ max }) => `password should only contain below ${max} character`)
            .matches(/\w*[a-z]\w*/, "Password must have a small letter")
            .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
            .matches(/\d/, "Password must have a number")
            .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password must have a special character")
            .required('password is required'),
    })

    return (
        <ThemeConsumer>
            {({ theme }) => (
                <View testID='SignUp' style={theme.styles.mainView}>
                    <View style={theme.styles.View1}>
                        <Anticon name='login' color="#121b22" size={25} />
                        <Text style={theme.styles.Text1} >SignUp</Text>
                    </View>
                    <Formik
                        validationSchema={loginValidationSchema}
                        initialValues={{ email: '', password: '', Changepassword: '' }}
                        onSubmit={values => onClickHandler(values)}
                    >
                        {({ handleBlur, handleChange, values, handleSubmit, isValid, touched, errors }) =>
                        (<View>
                            <View testID='Visible' style={theme.styles.View2}>
                                <Text style={theme.styles.Text2}>Email :</Text>
                                <TextInput
                                    testID='email1'
                                    placeholder='Enter Your Email'
                                    style={theme.styles.textInput}
                                    cursorColor="#43a6d1"
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    keyboardType="email-address"
                                />
                                {errors.email && touched.email &&
                                    <Text style={theme.Loginstyles.textInput1}>
                                        {errors.email}
                                    </Text>
                                }
                                <View style={theme.styles.View3}>
                                    <Text style={theme.styles.Text2}>Password :</Text>
                                    <TextInput
                                        testID='password'
                                        placeholder='Enter Password'
                                        style={theme.styles.textInput}
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        value={values.password}
                                        secureTextEntry
                                        keyboardType='default'
                                    />
                                    {errors.password && touched.password &&
                                        <Text style={theme.Loginstyles.textInput1}>
                                            {errors.password}
                                        </Text>
                                    }
                                </View>
                                <View style={theme.styles.View3}>
                                    <Text style={theme.styles.Text2}>Conform Password:</Text>
                                    <TextInput
                                        testID='Renter'
                                        placeholder='Re-enter password'
                                        style={theme.styles.textInput}
                                        onChangeText={handleChange('Changepassword')}
                                        onBlur={handleBlur('Changepassword')}
                                        value={values.Changepassword}
                                        secureTextEntry
                                        keyboardType='default'
                                    />
                                    {
                                        errors.Changepassword && touched.Changepassword &&
                                        <Text style={theme.Loginstyles.textInput1}>
                                            {errors.Changepassword}
                                        </Text>
                                    }
                                </View>
                            </View>
                            <Button
                                testID='Button'
                                title="SIGNUP"
                                buttonStyle={theme.styles.button}
                                titleStyle={theme.styles.buttonTitle}
                                onPress={handleSubmit}
                                disabled={!isValid}
                            />
                            <Text testID='All' style={theme.styles.text3} onPress={() => navigation.navigate("Loginpage")}>Already Have an account!</Text>
                        </View>
                        )}
                    </Formik>
                </View>
            )}
        </ThemeConsumer>
    )
}

export default SignUp
