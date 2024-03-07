
import "react-native-gesture-handler"
import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Data from './Screens/Data';
import Info from './Screens/Info';
import theme from './Screens/theme';
import SignUp from './Screens/SignUp';
import Splash from './Screens/Splash';
import Recents from "./Screens/Recents";
import albums from "./Screens/AlbumData";
import Archived from "./Screens/Archived";
import Mainpage from './Screens/Mainpage';
import Loginpage from './Screens/Loginpage';
import UserContext from './Screens/Context';
import ContactUs from './Screens/ContactUs';
import AlbumPhoto from './Screens/AlbumPhoto';
import ImageViewer from './Screens/ImageViewer';


const App = () => {
  const Stack = createStackNavigator()
  const [loading, setLoading] = useState(true)
  const [newAlbum, setNewAlbum] = useState([])
  const [photo, setPhoto] = useState([])
  const [login, setLogin] = useState(false)
  const [data, setData] = useState([])
  const [fav, setFav] = useState([])
  const [hidden, setHidden] = useState([])
  const [archived, setArchived] = useState(false)
  const [iconVisible, setIconVisible] = useState(false)
  const [photos, setPhotos] = useState(Data)
  const [albumdata, setAlbumData] = useState(albums)
  const [deleted,setDeleted] = useState()
  useEffect(() => {
    get()
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  })
  const get = async () => {
    let res
    try {
      res = await AsyncStorage.getItem('login')
    } catch (err) {
      console.log(err)
    }
    if (res != null) {
      setLogin(true)
    }
  }


  return (
    <>
      {
        loading ? (<Splash />) : (
          <UserContext.Provider value={{
            data,
            setData,
            fav,
            setFav,
            photo,
            setPhoto,
            photos,
            setPhotos,
            newAlbum,
            setNewAlbum,
            iconVisible,
            setIconVisible,
            albumdata,
            setAlbumData,
            deleted,
            setDeleted,
            archived,
            setArchived,
            hidden,
            setHidden

          }}>
            <ThemeProvider theme={theme}>
              <NavigationContainer>
                <Stack.Navigator initialRouteName={login ? "Mainpage" : "SignUp"} >
                  <Stack.Screen component={Loginpage} name='Loginpage' options={{ header: () => null }} />
                  <Stack.Screen component={SignUp} name='SignUp' options={{ header: () => null }} />
                  <Stack.Screen component={Mainpage} name='Mainpage' options={{ header: () => null }} />
                  <Stack.Screen component={ImageViewer} name='ImageViewer' options={{ header: () => null }} />
                  <Stack.Screen component={ContactUs} name='ContactUs' options={{ header: () => null }} />
                  <Stack.Screen component={Info} name='Info' options={{ title:"Details", headerStyle: { backgroundColor: "#2a3b45" }, headerTitleStyle: { color: "#a4dcf5" }, headerTintColor: "#a4dcf5"   }} />
                  <Stack.Screen component={AlbumPhoto} name='AlbumPhoto' options={{ header: () => null }} />
                  <Stack.Screen component={Recents} name='Recently Deleted' options={{ title:"Recently Deleted", headerStyle: { backgroundColor: "#2a3b45" }, headerTitleStyle: { color: "#a4dcf5" }, headerTintColor: "#a4dcf5"   }} />
                  <Stack.Screen component={Archived} name='Archived' options={{ title:"Archived", headerStyle: { backgroundColor: "#2a3b45" }, headerTitleStyle: { color: "#a4dcf5" }, headerTintColor: "#a4dcf5"   }} />

                  
                </Stack.Navigator>
              </NavigationContainer>
            </ThemeProvider>
          </UserContext.Provider>
        )}
    </>

  )
}
export default App;
