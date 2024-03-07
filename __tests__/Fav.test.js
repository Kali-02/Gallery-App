import React from "react"
import { fireEvent, render } from "@testing-library/react-native"
import { ThemeProvider } from 'react-native-elements'
import { NavigationContainer } from "@react-navigation/native"
import theme from "../Screens/theme"
import UserContext from "../Screens/Context"
import Favourites from "../Screens/Favourites"

jest.mock('@react-navigation/native', () => {
    const actualNav = jest.requireActual("@react-navigation/native");
    return {
        ...actualNav,
        useNavigation: () => ({
            navigate: jest.fn(),
            goBack: jest.fn(),
        }),
        useIsFocused: () => {
            return true
        },
        isFocused: () => {
            return true
        }
    }
});
it('It is for loginPage1', () => {
    const page = render(
        <NavigationContainer>
            <UserContext.Provider value={{
                fav: [{
                    title: 'My Photos',
                    uri: require('../Screens/assets/img11.jpg')
                }]


            }}>    <ThemeProvider theme={theme}>
                    <Favourites />
                </ThemeProvider>
            </UserContext.Provider>
        </NavigationContainer>
    )

})