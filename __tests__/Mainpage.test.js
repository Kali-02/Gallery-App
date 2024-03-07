import React from "react"
import { fireEvent, render } from "@testing-library/react-native"
import { ThemeProvider } from 'react-native-elements'
import { NavigationContainer } from "@react-navigation/native"
import theme from "../Screens/theme"
import UserContext from "../Screens/Context"
import Mainpage from "../Screens/Mainpage"

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
jest.useFakeTimers()
it('It is for Mainpage1', () => {



    const page = render(
        <NavigationContainer>
            <UserContext.Provider value={{
                photos: [],
                iconVisible: true,
                setPhotos: () => { },
                setDeleted: () => { },
                setIconVisible: () => { }

            }}>
                <ThemeProvider theme={theme}>
                    <Mainpage />
                </ThemeProvider>
            </UserContext.Provider>
        </NavigationContainer>
    )
    fireEvent.press(page.getByTestId('Overlay'))
    fireEvent.press(page.getByTestId('Delete'))
    jest.advanceTimersByTime(2000)


})

it('It is for Mainpage2', () => {
    const page = render(
        <NavigationContainer>
            <UserContext.Provider value={{
                iconVisible: false,


            }}>    <ThemeProvider theme={theme}>
                    <Mainpage />
                </ThemeProvider>
            </UserContext.Provider>
        </NavigationContainer>
    )
    fireEvent.press(page.getByTestId('OnOverlay'))
    fireEvent.press(page.getByTestId('Logout'))
    fireEvent.press(page.getByTestId('No'))
   
    fireEvent.press(page.getByTestId('ContactUs'))
})

it('It is for Mainpage3', () => {
    const page = render(
        <NavigationContainer>
            <UserContext.Provider value={{
                iconVisible: false,
            }}>    <ThemeProvider theme={theme}>
                    <Mainpage />
                </ThemeProvider>
            </UserContext.Provider>
        </NavigationContainer>
    )

    fireEvent.press(page.getByTestId('OnOverlay'))
    fireEvent.press(page.getByTestId('Recents'))
})

it('It is for Mainpage3', () => {
    const page = render(
        <NavigationContainer>
            <UserContext.Provider value={{
                iconVisible: false,
            }}>    <ThemeProvider theme={theme}>
                    <Mainpage />
                </ThemeProvider>
            </UserContext.Provider>
        </NavigationContainer>
    )

    fireEvent.press(page.getByTestId('OnOverlay'))
    fireEvent.press(page.getByTestId('Logout'))
    fireEvent.press(page.getByTestId('Clear'))
})


it('It is for Mainpage4', () => {
    const page = render(
        <NavigationContainer>
            <UserContext.Provider value={{
                iconVisible: false,

            }}>    <ThemeProvider theme={theme}>
                    <Mainpage />
                </ThemeProvider>
            </UserContext.Provider>
        </NavigationContainer>
    )
    fireEvent.press(page.getByTestId('OnOverlay'))
    fireEvent.press(page.getByTestId('Logout'))
    fireEvent(page.getByTestId('Back'), 'backdropPress')

})
