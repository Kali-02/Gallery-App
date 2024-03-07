import {  View } from 'react-native'
import React from 'react'
import { Image, ThemeConsumer } from 'react-native-elements'
import { useRoute } from '@react-navigation/native'

const AlbumPhoto = () => {
  const route = useRoute()
  const item = route.params
  return (
    <ThemeConsumer>
      {
        ({ theme }) =>
        (<View style={theme.AlbumPhotostyles.container}>
          {
            <Image source={item.source} testID='Img' style={ theme.AlbumPhotostyles.img} resizeMode='contain' />
          }
        </View>)
      }
    </ThemeConsumer>
  )
}

export default AlbumPhoto

