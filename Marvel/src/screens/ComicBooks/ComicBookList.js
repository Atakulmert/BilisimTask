import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity, Alert} from 'react-native';
import {URL, hash, apikey} from '../../api/index';
import {Avatar, Divider, ActivityIndicator} from 'react-native-paper';
import {LogBox} from 'react-native';
import {useNavigation} from '@react-navigation/native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications
const ComicBookList = ({navigation}) => {
  const [comicBooks, setComicBooks] = useState();
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(
        URL + '/v1/public/comics?ts=1' + apikey + hash,
      );
      if (res !== undefined) {
        setComicBooks(res.data.data.results);
      } else {
        Alert.alert('Api ile Bağlantı Kurulamadı!');
      }
    };
    fetch();
  }, []);
  const renderItem = item => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.push('ComicBookDetail', {
            item: item.item,
            navigation: navigation,
          });
        }}
        style={{
          borderWidth: 1,
          borderColor: '#707070',
          borderRadius: 10,
          height: 75,
          marginVertical: 2,
          marginHorizontal: 5,
          justifyContent: 'flex-start',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Avatar.Image
          style={{marginHorizontal: 15}}
          size={50}
          source={{
            uri: item.item.thumbnail.path + '.' + item.item.thumbnail.extension,
          }}
        />
        <Text style={{flex: 1, fontSize: 20, marginLeft: 20, color: 'black'}}>
          {item.item.title}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      {comicBooks !== undefined ? (
        <>
          <FlatList
            data={comicBooks}
            renderItem={renderItem}
            keyExtractor={(item, index) => {
              return index.toString();
            }}
            ItemSeparatorComponent={() => <Divider bold={true} />}
          />
        </>
      ) : (
        <View
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator animating={true} size={72} color="red" />
        </View>
      )}
    </View>
  );
};
export default ComicBookList;
