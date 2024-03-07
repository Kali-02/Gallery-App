import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {ThemeConsumer} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import UserContext from './Context';

const Archived = () => {
  const {albumdata, hidden, setHidden, setArchived} = useContext(UserContext);
  const [visible, setVisible] = useState(false);
  const onSelectHandler = rest => {
    let arr = [...hidden];
    if (rest.tick == false) {
      rest.tick = !rest.tick;
    } else {
      rest.tick = false;
    }
    setHidden(arr);
  };
  const onUnArchiveHandler = () => {
    let arr = [...hidden];
    let data = hidden.filter(prev => prev.tick == true);
    data.map((arc, i) => {
      albumdata.unshift(data[i]);
      arr = arr.filter(ins => ins.id != arc.id);
    });
    setHidden(arr);
    if (arr.length == 0) {
      setArchived(false);
    }
  };

  return (
    <ThemeConsumer>
      {({theme}) => (
        <View style={theme.Albumstyles.container1}>
          <TouchableWithoutFeedback
            style={theme.Albumstyles.View5}
            testID="T"
            onPress={() => {
              setVisible(false);
            }}>
            <View style={theme.Albumstyles.View5}>
              {hidden.map((res, i) => (
                <View key={i} style={theme.Albumstyles.View2}>
                  <TouchableOpacity
                    testID={`${i}`}
                    onLongPress={() => setVisible(true)}>
                    <View style={theme.Albumstyles.row1}>
                      <Text style={theme.Albumstyles.text2}>{res.title}</Text>
                      <TouchableOpacity>
                        {visible && (
                          <Icon
                            name="done"
                            color="white"
                            size={22}
                            style={
                              res.tick
                                ? theme.Albumstyles.Icon3
                                : theme.Albumstyles.Icon2
                            }
                            testID={res.title}
                            onPress={() => onSelectHandler(res)}
                          />
                        )}
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </TouchableWithoutFeedback>
          <MatIcon
            testID="UN"
            name="unarchive"
            color="white"
            size={40}
            style={theme.Albumstyles.Icon4}
            onPress={onUnArchiveHandler}
          />
        </View>
      )}
    </ThemeConsumer>
  );
};

export default Archived;

const styles = StyleSheet.create({});
