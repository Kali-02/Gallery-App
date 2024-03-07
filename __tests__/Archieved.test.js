import React from "react"
import { fireEvent, render } from "@testing-library/react-native"
import { ThemeProvider } from 'react-native-elements'
import { NavigationContainer } from "@react-navigation/native"
import theme from "../Screens/theme"
import Archived from "../Screens/Archived"
import UserContext from "../Screens/Context"

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
                hidden: [{
                    id: 1,
                    title: 'Whatsapp Images',
                    selected: true,
                    tick: false,

                },],
                setHidden: () => { },
                setArchived: () => { }



            }}>    <ThemeProvider theme={theme}>
                    <Archived />
                </ThemeProvider>
            </UserContext.Provider>
        </NavigationContainer>
    )
    fireEvent.press(page.getByTestId('T'))
    fireEvent(page.getByTestId('0'), 'onLongPress')
    fireEvent.press(page.getByTestId('Whatsapp Images'))
    fireEvent.press(page.getByTestId('UN'))

})


it('It is for loginPage', () => {
    const page = render(
        <NavigationContainer>
            <UserContext.Provider value={{
                hidden: [{
                    id: 1,
                    title: 'Whatsapp Images',
                    selected: true,
                    tick: true,

                },
                ],
                setHidden: () => { },
                setArchived: () => { }



            }}>    <ThemeProvider theme={theme}>
                    <Archived />
                </ThemeProvider>
            </UserContext.Provider>
        </NavigationContainer>
    )
    fireEvent.press(page.getByTestId('T'))
    fireEvent(page.getByTestId('0'), 'onLongPress')
    fireEvent.press(page.getByTestId('Whatsapp Images'))
    fireEvent.press(page.getByTestId('UN'))

})


