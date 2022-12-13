import React from 'react';
import { View,Text } from 'react-native';
const ComicBookDetail = (route,navigation) => {
    const  item = route.params;
    return (
        <View>
            <Text style={{ flex: 1, fontSize: 20, marginLeft: 20, color: 'black' }}>
                    {item.item.name}
                </Text>
        </View>
    );
};
export default ComicBookDetail;
