import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Image, ThemeConsumer } from 'react-native-elements'
import location from './loaction'
import phone from './contactdata'
import chat from './Chat'

const ContactUs = () => {
  return (
    <ThemeConsumer>
      { ({theme})=>(
      <View style={theme.Contactstyles.view1}>
        <Image source={require("../Screens/assets/contact.jpg")} style={theme.Contactstyles.image1} />
        <View>
          <Text style={theme.Contactstyles.text1}>
            GetIn Touch
          </Text>
        </View>
        <View style={theme.Contactstyles.view2}>
          <Icon name='location-pin' color="#77a8ab" size={30} />
          <Ionicons name='call' color="#77a8ab" size={30} style={theme.Contactstyles.icon1} />
          <Icon name='chat' color="#77a8ab" size={30} style={theme.Contactstyles.icon2} />
        </View>
        <View style={theme.Contactstyles.view3}>
          <Text style={theme.Contactstyles.text2}>
            {location}
          </Text>
          <Text style={theme.Contactstyles.text3}>
            {phone}
          </Text>
          <Text style={theme.Contactstyles.text4}>
            {chat}
          </Text>
        </View>
        <Image source={require("../Screens/assets/contact1.jpg")} style={theme.Contactstyles.image2} />
      </View>
      )}
    </ThemeConsumer>
  )
}

export default ContactUs

const styles = StyleSheet.create({})