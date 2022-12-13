import React from 'react';
import { View,Text } from 'react-native';
const CharacterDetail = (item,navigation) => {
    return (
        <View>
            <Text style={{ flex: 1, fontSize: 20, marginLeft: 20, color: 'black' }}>
                    {item.name}
                </Text>
        </View>
    );
};
export default CharacterDetail;
