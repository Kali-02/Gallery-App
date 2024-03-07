import React from "react"
import { fireEvent, render } from "@testing-library/react-native"
import { ThemeProvider } from 'react-native-elements'
import { NavigationContainer } from "@react-navigation/native"
import theme from "../Screens/theme"
import AlbumPhoto from "../Screens/AlbumPhoto"

jest.mock('@react-navigation/native', () => {
    const actualNav = jest.requireActual("@react-navigation/native");
    return {
        ...actualNav,
        useNavigation: () => ({
            navigate: jest.fn(),
            goBack: jest.fn(),
        }),
        useRoute: () => ({
            params: { img: '../Screens/assets/img11.jpg' }
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
                <AlbumPhoto />
            </ThemeProvider>
        </NavigationContainer>
    )

})