import React from "react"
import { fireEvent, render } from "@testing-library/react-native"
import Loginpage from "../Screens/Loginpage"
import { ThemeProvider } from 'react-native-elements'
import { NavigationContainer } from "@react-navigation/native"
import theme from "../Screens/theme"

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

it('It is for loginPage', () => {
  const page = render(<NavigationContainer>
    <ThemeProvider theme={theme}>
      <Loginpage />
    </ThemeProvider>
  </NavigationContainer>)

  fireEvent.changeText(page.getByTestId('email'), 'kall.com')
  fireEvent.press(page.getByTestId('navText'))
  fireEvent.press(page.getByTestId("navText1"))

})


it("succrss", () => {
  const page = render(<NavigationContainer>
    <ThemeProvider theme={theme}>
      <Loginpage />
    </ThemeProvider>
  </NavigationContainer>)

  fireEvent.changeText(page.getByTestId('email'), 'kali123@gmail.com')
  fireEvent.changeText(page.getByTestId('password'), 'Kali@19723')
  fireEvent.press(page.getByTestId('loginButton'))
})


it("failure", () => {
  const page = render(<NavigationContainer>
    <ThemeProvider theme={theme}>
      <Loginpage />
    </ThemeProvider>
  </NavigationContainer>)
  fireEvent.changeText(page.getByTestId('email'), 'kali1gh23@gmail.com')
  fireEvent.changeText(page.getByTestId('password'), 'Ka@1Ka@1')
  fireEvent.press(page.getByTestId('loginButton'))
})