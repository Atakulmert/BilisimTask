import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { URL, hash, apikey } from '../../api/index';
import { Avatar, Divider,ActivityIndicator } from "react-native-paper";
const CharacterList = (navigation) => {
    const [characters, setCharacters] = useState();
    useEffect(() => {
        const fetch = async () => {
            const res = await axios.get(URL + "/v1/public/characters?ts=1" + apikey + hash)
            setCharacters(res.data.data.results);
        }
        fetch();
    }, []);
    const renderItem = (item) => {

        return (

            <TouchableOpacity 
            onPress={()=>{navigation.navigate('CharacterDetail',{item:item})}}
            style={{ borderWidth:1,borderColor:'#707070',borderRadius:10,height: 75, marginVertical: 2, marginHorizontal: 5, justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center' }}>
            <Avatar.Image
                style={{marginHorizontal:15}}
                    size={50}
                    source={{
                        uri: item.item.thumbnail.path + "." + item.item.thumbnail.extension,
                    }}
                />
                <Text style={{ flex: 1, fontSize: 20, marginLeft: 20, color: 'black' }}>
                    {item.item.name}
                </Text>
            </TouchableOpacity>
        );
    }
    return (
        <View >
            {characters !== undefined ? (
                <>
                    <FlatList
                        data={characters}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => {
                            return index.toString();
                        }}
                        ItemSeparatorComponent={() => (
                            <Divider bold={true} />
                        )}
                    />
                </>) : (
                <View style={{
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
export default CharacterList;
