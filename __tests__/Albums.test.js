import React from "react"
import { fireEvent, render } from "@testing-library/react-native"
import { ThemeProvider } from 'react-native-elements'
import theme from "../Screens/theme"
import AlbumViewer from "../Screens/Albums"
import UserContext from "../Screens/Context"
import albums from "../Screens/AlbumData"

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

it('albumviewer', () => {


    const pager = render(

        <UserContext.Provider value={
            {
                albumdata: albums,
                hidden:[],
                setAlbumData: () => { },
                setArchived: () => { },
                setHidden: () => { },
                archived:true
            }
        }>
            <ThemeProvider theme={theme}>
                <AlbumViewer />
            </ThemeProvider>
        </UserContext.Provider>
    )
    fireEvent.press(pager.getByTestId('Whatsapp Images'))
    fireEvent(pager.getByTestId('Whatsapp Images'), 'onLongPress')
    fireEvent.press(pager.getByTestId('11'))
    fireEvent.press(pager.getByTestId('T2'))
    fireEvent.press(pager.getByTestId('Id'))
})

it('edit',()=>{
    
    const pager = render(

        <UserContext.Provider value={
            {
                albumdata: albums,
                hidden:[],
                setAlbumData: () => { },
                setArchived: () => { },
                setHidden: () => { },
            }
        }>
            <ThemeProvider theme={theme}>
                <AlbumViewer />
            </ThemeProvider>
        </UserContext.Provider>
    )
    fireEvent.press(pager.getByTestId('Whatsapp Images'))
    fireEvent(pager.getByTestId('Whatsapp Images'), 'onLongPress')
    fireEvent.press(pager.getByTestId('Edit'))
    fireEvent.changeText(pager.getByTestId('Txt1'),'kali')
    fireEvent.press(pager.getByTestId('Name'))
})


