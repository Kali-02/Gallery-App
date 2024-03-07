import React from "react"
import { fireEvent, render } from "@testing-library/react-native"
import { ThemeProvider } from 'react-native-elements'
import { NavigationContainer } from "@react-navigation/native"
import theme from "../Screens/theme"
import UserContext from "../Screens/Context"
import Info from "../Screens/Info"

jest.mock('@react-navigation/native', () => {
    const actualNav = jest.requireActual("@react-navigation/native");
    return {
        ...actualNav,
        useNavigation: () => ({
            navigate: jest.fn(),
            goBack: jest.fn(),
        }),
        useRoute:()=>({
            params:{Info:[{ id: 0,
                fileName: "rn_image_picker_lib_temp_4c1cdbbb-ac8f-4a63-90d2-a45c80c3cd15.jpg",
                fileSize: 153558,
                height: 1280,
                type: "image/jpeg",
                uri: "https://static.vecteezy.com/system/resources/previews/000/407/588/original/welcome-in-neon-sign-vector.jpg",
                width: 960,
                tick:false,
                heart:false,
                Info:"h"}]}
        }),
        useIsFocused: () => {
            return true
        },
        isFocused: () => {
            return true
        },
      
    }
});
it('It is for loginPage1', () => {
    const page = render(
        <NavigationContainer>
               <ThemeProvider theme={theme}>
                    <Info />
                </ThemeProvider>
        </NavigationContainer>
    )
fireEvent.press(page.getByTestId('My Photos'))
fireEvent.press(page.getByTestId('0'))

})