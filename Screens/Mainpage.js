import React, {useState, useContext} from 'react';
import {Text, View, ActivityIndicator, StatusBar} from 'react-native';
import {Overlay, ThemeConsumer} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AlbumViewer from './Albums';
import UserContext from './Context';
import Allphotos from './Allphotos';
import Favourites from './Favourites';

const Top = createMaterialTopTabNavigator();
const Mainpage = () => {
  const {iconVisible, setIconVisible, photos, setPhotos, setDeleted} =
    useContext(UserContext);
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [logVisible, setLogVisisble] = useState(false);
  const onSelectionOverlay = () => {
    setIsVisible(!isVisible);
  };
  const onOverlay = () => {
    setVisible(!visible);
  };

  const allDeleteHandler = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    let data = [photos];
    let del = data.filter(pre => pre.tick !== false);
    let arr = data.filter(prev => prev.tick == false);

    setPhotos(arr);
    setDeleted(del);
    setIsVisible(!isVisible);
    setVisible(false);
    setIconVisible(!iconVisible);
  };

  const clear = async () => {
    await AsyncStorage.clear();
    navigation.navigate('Loginpage');
    setIsVisible(false);
    setVisible(false);
  };

  return (
    <ThemeConsumer>
      {({theme}) => (
        <View testID="Mainpage" style={theme.Mainpagestyles.View1}>
          <StatusBar backgroundColor="#1a282e" />
          <View style={theme.Mainpagestyles.View2}>
            <Icon
              name="photo"
              color="#a4dcf5"
              size={20}
              style={theme.Mainpagestyles.Icon1}
            />
            <Text style={theme.Mainpagestyles.Text1}>Photo Gallery</Text>
            {iconVisible == false ? (
              <Ionicons
                name="settings"
                testID="OnOverlay"
                color="#a4dcf5"
                size={23}
                style={theme.Mainpagestyles.Icon2}
                onPress={onOverlay}
              />
            ) : (
              <Entypo
                name="dots-three-vertical"
                testID="Overlay"
                color="#a4dcf5"
                size={23}
                style={theme.Mainpagestyles.Icon2}
                onPress={onSelectionOverlay}
              />
            )}
          </View>
          {visible ? (
            <Text style={theme.Mainpagestyles.changeIcon}>Settings</Text>
          ) : null}
          {isVisible ? (
            <Text style={theme.Mainpagestyles.changeIcon1}>Options</Text>
          ) : null}
          <Overlay
            testID="overlay"
            visible={visible}
            onBackdropPress={onOverlay}
            animationType="fade"
            overlayStyle={theme.Mainpagestyles.overlay1}
            backdropStyle={theme.Mainpagestyles.transparent}>
            <View style={theme.Mainpagestyles.View3}>
              <Text
                style={theme.Mainpagestyles.overlayText}
                testID="Logout"
                onPress={() => {
                  setLogVisisble(true);
                }}>
                LogOut
              </Text>
              <Text
                style={theme.Mainpagestyles.overlayText}
                testID="ContactUs"
                onPress={() => {
                  navigation.navigate('ContactUs'), setVisible(false);
                }}>
                Contact Us
              </Text>
              <Text
                style={theme.Mainpagestyles.overlayText}
                testID="Recents"
                onPress={() => {
                  navigation.navigate('Recently Deleted'), setVisible(false);
                }}>
                Recently Deleted
              </Text>
            </View>
          </Overlay>
          <Overlay
            visible={logVisible}
            testID="Back"
            onBackdropPress={() => {
              setLogVisisble(false);
            }}
            overlayStyle={theme.Mainpagestyles.overlay5}>
            <View>
              <View>
                <Text style={theme.Mainpagestyles.Text3}>
                  Are you sure... You want to LogOut...
                </Text>
              </View>
              <View style={theme.Mainpagestyles.row1}>
                <Text
                  style={theme.Mainpagestyles.Text4}
                  testID="No"
                  onPress={() => setLogVisisble(false)}>
                  No
                </Text>
                <Text
                  style={theme.Mainpagestyles.Text5}
                  testID="Clear"
                  onPress={clear}>
                  Yes
                </Text>
              </View>
            </View>
          </Overlay>
          <Overlay
            testID="IsVis"
            visible={isVisible}
            onBackdropPress={onSelectionOverlay}
            animationType="fade"
            overlayStyle={theme.Mainpagestyles.Overlay3}
            backdropStyle={theme.Mainpagestyles.transparent}>
            <View style={theme.Mainpagestyles.View3}>
              <Text
                style={theme.Mainpagestyles.overlayText}
                testID="Delete"
                onPress={allDeleteHandler}>
                Delete
              </Text>
            </View>
          </Overlay>
          <Overlay
            visible={loading}
            overlayStyle={theme.Mainpagestyles.overlay2}
            backdropStyle={theme.Mainpagestyles.transparent}>
            <View style={theme.Mainpagestyles.row}>
              <ActivityIndicator size={30} />
              <Text style={theme.Mainpagestyles.Text2}>
                Deleting... Please wait...
              </Text>
            </View>
          </Overlay>
          <Top.Navigator
            screenOptions={{
              tabBarStyle: theme.Mainpagestyles.tabStyle,
              tabBarPressColor: '#ffff',
            }}>
            <Top.Screen
              name="Allphotos"
              component={Allphotos}
              options={{
                title: 'All photos',
                tabBarActiveTintColor: '#a4dcf5',
                tabBarInactiveTintColor: '#86888a',
                tabBarIndicatorStyle: {backgroundColor: '#a4dcf5'},
                tabBarTestID: 'AllPhoto',
              }}
            />
            <Top.Screen
              name="Albums"
              component={AlbumViewer}
              options={{
                title: 'Albums',
                tabBarActiveTintColor: '#a4dcf5',
                tabBarInactiveTintColor: '#727f88',
                tabBarIndicatorStyle: {backgroundColor: '#a4dcf5'},
                tabBarTestID: 'Albums',
              }}
            />
            <Top.Screen
              name="Favourites"
              component={Favourites}
              options={{
                title: 'favourites',
                tabBarActiveTintColor: '#a4dcf5',
                tabBarInactiveTintColor: '#727f88',
                tabBarIndicatorStyle: {backgroundColor: '#a4dcf5'},
                tabBarTestID: 'Fav',
              }}
            />
          </Top.Navigator>
        </View>
      )}
    </ThemeConsumer>
  );
};

export default Mainpage;
