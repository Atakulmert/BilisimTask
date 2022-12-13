import * as React from 'react';
import { View,Button,Text } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CharacterList from './src/screens/Characters/CharacterList';
import ComicBookList from './src/screens/ComicBooks/ComicBookList';
const Tab = createBottomTabNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarStyle:{
          alignItems:'center',justifyContent:'center',paddingBottom:20
        },
        headerShown: false, tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray', tabBarIconStyle: { display: "none" }
      }}>
        <Tab.Screen name="CharacterList" component={CharacterList} options={{ tabBarLabel: 'Characters' }} />
        <Tab.Screen name="ComicBookList" component={ComicBookList} options={{ tabBarLabel: 'Comic Books', }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
