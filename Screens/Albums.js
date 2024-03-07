import React, {useState, useContext} from 'react';
import {Text, View, FlatList, TextInput, TouchableOpacity} from 'react-native';
import {Image, Overlay, ThemeConsumer} from 'react-native-elements';

import Icon from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import UserContext from './Context';

const AlbumViewer = () => {
  const [key, setKey] = useState();
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [oldName, setOldName] = useState('');
  const [visible, setVisible] = useState(false);
  const [selectedAlbum, setSelectedAlbum] = useState([]);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const {albumdata, setAlbumData, archived, setArchived, hidden, setHidden} =
    useContext(UserContext);

  const onOpenOverlay = item => {
    setVisible(!visible);
    setOldName(item.title);
    setKey(item.id);
  };
  const onEditHandler = () => {
    setOverlayVisible(true);
    setVisible(false);
  };
  const onNameHandler = () => {
    if (name != null) {
      let data1 = [...albumdata];
      let index = data1.findIndex(item => item.title == oldName);
      data1[index].title = name;
      setAlbumData([...data1]);
      setOverlayVisible(false);
    }
  };
  const onTitleHandler = item => {
    setSelectedAlbum(item);
    let temp = [];
    albumdata.map(album => {
      if (album.id == item.id) {
        let local = album;
        local.selected = true;
        temp.push(local);
      } else {
        let notsel = album;
        notsel.selected = false;
        temp.push(notsel);
      }
    });
    setAlbumData([...temp]);
  };
  const onCancelHandler = () => {
    setOverlayVisible(false);
  };
  const onHideHandler = () => {
    setArchived(true);
    let temp = [];
    let hide = [];
    albumdata.map(album => {
      if (album.id != key) {
        temp.push(album);
      }
      if (album.id == key) {
        hide.push(album);
      }
    });
    setVisible(false);
    if (selectedAlbum.id == key) {
      setSelectedAlbum([]);
    }
    setAlbumData([...temp]);
    let thide = hidden;
    thide.push(hide[0]);
    setHidden([...thide]);
  };
  const renderAlbum = ({item}) => (
    <ThemeConsumer>
      {({theme}) => (
        <View testID={item.id + 'e2e'}>
          <TouchableOpacity
            key={item.id}
            style={
              item.selected
                ? theme.Albumstyles.albumContainer
                : theme.Albumstyles.albumContainer1
            }
            testID={item.title}
            onPress={() => onTitleHandler(item)}
            onLongPress={() => onOpenOverlay(item)}>
            <Text style={theme.Albumstyles.albumTitle}>{item.title}</Text>
          </TouchableOpacity>
        </View>
      )}
    </ThemeConsumer>
  );

  const renderPhoto = ({item}) => (
    <ThemeConsumer>
      {({theme}) => (
        <View style={theme.Albumstyles.View1}>
          <Image
            style={theme.Albumstyles.photo}
            testID={item.id + '1'}
            source={item.source}
            onPress={() => navigation.navigate('AlbumPhoto', item)}
          />
        </View>
      )}
    </ThemeConsumer>
  );

  return (
    <ThemeConsumer>
      {({theme}) => (
        <View testID="Album" style={theme.Albumstyles.container}>
          <FlatList
            testID="flatlist"
            showsHorizontalScrollIndicator={false}
            data={albumdata}
            renderItem={renderAlbum}
            keyExtractor={(item, index) => item.id}
            horizontal={true}
          />
          <View style={theme.Albumstyles.albumPhotos}>
            {archived ? (
              <View>
                <TouchableOpacity
                  style={theme.Albumstyles.row}
                  testID="Id"
                  onPress={() => navigation.navigate('Archived', hidden)}>
                  <Icon name="archive" size={25} color="white" />
                  <Text style={theme.Albumstyles.text}>Archived</Text>
                  <Text style={theme.Albumstyles.text1}> {hidden.length} </Text>
                </TouchableOpacity>
              </View>
            ) : null}
            <View>
              <FlatList
                data={selectedAlbum.photos}
                renderItem={renderPhoto}
                keyExtractor={item => item.id.toString()}
                numColumns={3}
              />
            </View>
          </View>
          <Overlay
            visible={overlayVisible}
            onBackdropPress={onEditHandler}
            animationType="fade"
            overlayStyle={theme.Mainpagestyles.Overlay4}
            backdropStyle={theme.Mainpagestyles.transparent}>
            <View>
              <Text style={theme.Mainpagestyles.overlayText}>
                Title for your Album
              </Text>
              <View style={{padding: 10}}>
                <TextInput
                  testID="Txt1"
                  placeholder="Type a Title"
                  placeholderTextColor="#a4dcf5"
                  defaultValue={oldName}
                  style={theme.Mainpagestyles.textInput1}
                  onChangeText={e => setName(e)}
                  cursorColor="#a4dcf5"
                />
              </View>
              <View style={theme.Mainpagestyles.View4}>
                <Text
                  style={theme.Mainpagestyles.colors}
                  testID="Cancel"
                  onPress={onCancelHandler}>
                  Cancel
                </Text>
                <Text
                  style={theme.Mainpagestyles.colors1}
                  testID="Name"
                  onPress={onNameHandler}>
                  Save
                </Text>
              </View>
            </View>
          </Overlay>
          <Overlay
            visible={visible}
            onBackdropPress={onOpenOverlay}
            animationType="fade"
            overlayStyle={theme.Mainpagestyles.Overlay4}
            backdropStyle={theme.Mainpagestyles.transparent}>
            <View>
              <Text
                style={theme.Mainpagestyles.overlayText}
                testID="T2"
                onPress={() => onHideHandler()}>
                Hide Album
              </Text>
            </View>
            <Text
              testID="Edit"
              style={theme.Mainpagestyles.overlayText}
              onPress={onEditHandler}>
              Edit Album Title
            </Text>
          </Overlay>
        </View>
      )}
    </ThemeConsumer>
  );
};

export default AlbumViewer;
