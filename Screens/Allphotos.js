import React, {useContext} from 'react';
import {
  View,
  FlatList,
  ToastAndroid,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {Image, ThemeConsumer} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import {launchCamera} from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/native';
import UserContext from './Context';
const Allphotos = () => {
  const navigation = useNavigation();
  const {setIconVisible, photos, setPhotos, setPhoto, setFav, fav} =
    useContext(UserContext);

  const onhandlePhoto = () => {
    const options = {
      mediaType: 'photo',
      multiple: true,
    };
    launchCamera(options, response => {
      if (response.didCancel) {
        ToastAndroid.show('photo cancelled', ToastAndroid.SHORT);
      } else {
        setPhotos(prev => [
          ...prev,
          {
            id: photos.length,
            uri: response.assets[0].uri,
            tick: false,
            heart: false,
            Info: response.assets[0],
          },
        ]);
      }
    });
  };
  const onDeleteHandler = item => {
    let data = [...photos];
    let index = data.findIndex(i => i.id == item.id);
    if (index > -1) {
      let filter = data.filter(i => i.id != item.id);
      setPhotos(filter);
    } else {
      setPhotos(prev => [...prev, val]);
    }
  };
  const onSelectHandler = (item, i) => {
    setPhoto(prev => {
      if (item.tick == false) {
        item.tick = !item.tick;
        setIconVisible(true);
        return [...prev, item];
      } else {
        item.tick = false;
        setIconVisible(false);
        return [...prev, item];
      }
    });
  };
  const onHeartHandler = item => {
    if (item.heart == false) {
      item.heart = true;
      setFav(prev => [...prev, item]);
      ToastAndroid.show('Favourite Added', ToastAndroid.SHORT);
    } else {
      item.heart = false;
      let newArr = [...fav];
      let i = newArr.filter(i => i.id != item.id);
      setFav(i);
      ToastAndroid.show('Favourite Removed', ToastAndroid.SHORT);
    }
  };

  const renderPhotoItem = ({item, i}) => {
    return (
      <ThemeConsumer>
        {({theme}) => (
          <TouchableWithoutFeedback>
            <View testID="Image">
              <Image
                testID="Nav1"
                source={{uri: item.uri}}
                style={
                  item.tick
                    ? theme.Allphotostyles.image2
                    : theme.Allphotostyles.image1
                }
                onPress={() => navigation.navigate('ImageViewer', {img: item})}
              />
              <View style={theme.Allphotostyles.View6}>
                {item.heart ? (
                  <Icon
                    name="heart"
                    testID="fav1"
                    size={25}
                    color="red"
                    style={theme.Allphotostyles.icon1}
                    onPress={() => onHeartHandler(item)}
                  />
                ) : (
                  <Icon
                    name="heart"
                    testID="fav2"
                    size={25}
                    color="white"
                    style={theme.Allphotostyles.icon1}
                    onPress={() => onHeartHandler(item)}
                  />
                )}
              </View>
              {item.tick ? (
                <View style={theme.Allphotostyles.View3}>
                  <TouchableOpacity>
                    <MatIcon
                      name="done"
                      color="white"
                      size={20}
                      style={theme.Allphotostyles.alignSelf}
                      testID="done"
                      onPress={() => onSelectHandler(item, i)}
                    />
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={theme.Allphotostyles.View4}>
                  <TouchableOpacity>
                    <MatIcon
                      name="done"
                      color="grey"
                      size={20}
                      style={theme.Allphotostyles.alignSelf}
                      testID={item.id.toString()}
                      onPress={() => onSelectHandler(item, i)}
                    />
                  </TouchableOpacity>
                </View>
              )}
              <View style={theme.Allphotostyles.View5}>
                <TouchableOpacity>
                  <Material
                    name="delete"
                    size={20}
                    color="white"
                    testID={`${item.id.toString()}delete`}
                    onPress={() => onDeleteHandler(item)}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        )}
      </ThemeConsumer>
    );
  };

  return (
    <ThemeConsumer>
      {({theme}) => (
        <View style={theme.Allphotostyles.MainView}>
          <FlatList
            data={photos}
            numColumns={3}
            keyExtractor={(item, index) => index}
            renderItem={renderPhotoItem}
            style={theme.Allphotostyles.top}
          />
          <View style={theme.Allphotostyles.View2}>
            <Icon
              name="camera-sharp"
              testID="photo1"
              color="white"
              size={29}
              onPress={() => onhandlePhoto()}
              style={theme.Allphotostyles.alignSelf}
            />
          </View>
        </View>
      )}
    </ThemeConsumer>
  );
};

export default Allphotos;
