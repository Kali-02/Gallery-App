import { Text, View, FlatList,TouchableOpacity } from 'react-native'
import React,{useContext} from 'react'
import UserContext from './Context'
import { Image, ThemeConsumer } from 'react-native-elements'


const Recents = () => {
    const {deleted}=useContext(UserContext)
    const renderAlbumPhotos = ({ item }) => {
        return (
          <ThemeConsumer>
            {({ theme }) => (<TouchableOpacity>
              <View style={theme.favstyles.view1}>
                <Image source={{ uri: item.uri }} style={theme.favstyles.image1} />
                <Text style={theme.favstyles.white}>{item.Title}</Text>
              </View>
            </TouchableOpacity>)}
          </ThemeConsumer>
        )
      }
    
      return (
        <ThemeConsumer>
          {
            ({theme})=>(<View style={theme.favstyles.view1}>
            <FlatList
              data={deleted}
              numColumns={3}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderAlbumPhotos}
              style={theme.favstyles.FlatList}
    
            />
          </View>)}
        </ThemeConsumer>
      )
    }

export default Recents

