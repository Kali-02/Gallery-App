import {View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {Image, ThemeConsumer} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import UserContext from './Context';

const ImageViewer = () => {
  const {photos} = useContext(UserContext);
  const route = useRoute();
  const {img} = route.params;
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(img.id);
  const handleChange = index => {
    setCurrentIndex(index);
  };

  return (
    <ThemeConsumer>
      {({theme}) => (
        <View testID="ImageViewer" style={theme.Imagestyles.View1}>
          <Swiper
            loop={false}
            testID="k"
            onIndexChanged={handleChange}
            index={currentIndex}>
            {photos.map((res, i) => (
              <View key={res.id}>
                <View>
                  <View style={{flexDirection: 'row'}}>
                    <Icon
                      name="arrow-back"
                      size={30}
                      color="white"
                      testID={res.title}
                      onPress={() => navigation.navigate('Allphotos')}
                      style={theme.Imagestyles.icon1}
                    />
                    <Icon
                      name="information-circle"
                      size={30}
                      color="white"
                      testID={`${i}`}
                      style={theme.Imagestyles.icon2}
                      onPress={() => navigation.navigate('Info', {res})}
                    />
                  </View>
                  <Image
                    source={{uri: res.uri}}
                    style={theme.Imagestyles.image1}
                    resizeMode="stretch"
                  />
                </View>
              </View>
            ))}
          </Swiper>
        </View>
      )}
    </ThemeConsumer>
  );
};

export default ImageViewer;
