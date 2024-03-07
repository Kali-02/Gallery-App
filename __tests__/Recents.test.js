import React from "react"
import { fireEvent, render } from "@testing-library/react-native"
import { ThemeProvider } from 'react-native-elements'
import { NavigationContainer } from "@react-navigation/native"
import theme from "../Screens/theme"
import UserContext from "../Screens/Context"
import ImageViewer from "../Screens/ImageViewer"
import Recents from "../Screens/Recents"

jest.mock('@react-navigation/native', () => {
    const actualNav = jest.requireActual("@react-navigation/native");
    return {
        ...actualNav,
        useNavigation: () => ({
            navigate: jest.fn(),
            goBack: jest.fn(),
        }),
        useRoute:()=>({
            params:{img: '../Screens/assets/img11.jpg'}
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
            <UserContext.Provider value={{
                deleted: [{
                    title: 'My Photos',
                    uri: require('../Screens/assets/img11.jpg'),
                    id:1,
                },{
                    title: 'My Phot',
                    uri: require('../Screens/assets/img11.jpg'),
                    id:2,
                }]


            }}>    <ThemeProvider theme={theme}>
                    <Recents/>
                </ThemeProvider>
            </UserContext.Provider>
        </NavigationContainer>
    )

})