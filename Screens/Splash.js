import { View, ImageBackground } from 'react-native'
import { ThemeConsumer } from 'react-native-elements'
import React from 'react'

const Splash = () => {
    return (
        <View >
            <ImageBackground
            testID='Splash'
                resizeMode="cover"
                style={{ height: "100%" }}
                source={require("../Screens/assets/Splashbg.jpeg")}
            >
            </ImageBackground>
        </View>
    )
}

export default Splash

