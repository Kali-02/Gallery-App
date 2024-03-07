import React from "react"
import { fireEvent, render } from "@testing-library/react-native"
import { ThemeProvider } from 'react-native-elements'
import { NavigationContainer } from "@react-navigation/native"
import theme from "../Screens/theme"
import Allphotos from "../Screens/Allphotos"
import UserContext from "../Screens/Context"
import Data from "../Screens/Data"

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
jest.mock('axios', () => ({ post: jest.fn(), create: jest.fn() }));
jest.mock('react-native-image-picker', () => ({
    launchCamera: jest.fn()
}));
it('It is for AllPhotos', () => {
    const page = render(
        <NavigationContainer>
            <UserContext.Provider value={{
                photos: Data,
                setFav: () => { },
                setPhoto:()=>{},
                setIconVisible:()=>{},


                fav: [{
                    id: 0,
                    fileName: "rn_image_picker_lib_temp_4c1cdbbb-ac8f-4a63-90d2-a45c80c3cd15.jpg",
                    fileSize: 153558,
                    height: 1280,
                    type: "image/jpeg",
                    uri: "https://static.vecteezy.com/system/resources/previews/000/407/588/original/welcome-in-neon-sign-vector.jpg",
                    width: 960,
                    tick: true,
                    heart: true,
                    Info: "h"
                }]
            }}>
                <ThemeProvider theme={theme}>
                    <Allphotos />
                </ThemeProvider>
            </UserContext.Provider>
        </NavigationContainer>
    )
    fireEvent.press(page.getByTestId('photo1'))
    fireEvent.press(page.getByTestId('fav2'))
    fireEvent.press(page.getByTestId('Undone'))



})

it('It is for AllPhotos', () => {
    const page = render(
        <NavigationContainer>
            <UserContext.Provider value={{
                photos: [{
                    id: 0,
                    fileName: "rn_image_picker_lib_temp_4c1cdbbb-ac8f-4a63-90d2-a45c80c3cd15.jpg",
                    fileSize: 153558,
                    height: 1280,
                    type: "image/jpeg",
                    uri: "https://static.vecteezy.com/system/resources/previews/000/407/588/original/welcome-in-neon-sign-vector.jpg",
                    width: 960,
                    tick: true,
                    heart: true,
                    Info: "h"
                }],
                setFav: () => { },
                setPhoto:()=>{},
                setIconVisible:()=>{},
                setPhotos:()=>{},
                fav: [{
                    id: 0,
                    fileName: "rn_image_picker_lib_temp_4c1cdbbb-ac8f-4a63-90d2-a45c80c3cd15.jpg",
                    fileSize: 153558,
                    height: 1280,
                    type: "image/jpeg",
                    uri: "https://static.vecteezy.com/system/resources/previews/000/407/588/original/welcome-in-neon-sign-vector.jpg",
                    width: 960,
                    tick: true,
                    heart: false,
                    Info: "h"
                }]

            }}>
                <ThemeProvider theme={theme}>
                    <Allphotos />
                </ThemeProvider>
            </UserContext.Provider>
        </NavigationContainer>
    )
    fireEvent.press(page.getByTestId('photo1'))
    fireEvent.press(page.getByTestId('fav1'))
    fireEvent.press(page.getByTestId('done'))
    fireEvent.press(page.getByTestId('Delete'))




})