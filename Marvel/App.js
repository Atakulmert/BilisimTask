import * as React from 'react';
import {View, Button, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CharacterList from './src/screens/Characters/CharacterList';
import ComicBookList from './src/screens/ComicBooks/ComicBookList';
import CharacterDetail from './src/screens/Characters/CharacterDetail';
import ComicBookDetail from './src/screens/ComicBooks/ComicBookDetail';
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications
const Tab = createBottomTabNavigator();
const ComicStack = createStackNavigator();
const CharacterStack = createStackNavigator();

function CharacterStackScreen() {
  return (
    <CharacterStack.Navigator
      screenOptions={{
        tabBarStyle: {
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: 20,
        },
        headerShown: false,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarIconStyle: {display: 'none'},
      }}>
      <CharacterStack.Screen name="Character" component={CharacterList} />
      <CharacterStack.Screen
        name="CharacterDetail"
        component={CharacterDetail}
      />
    </CharacterStack.Navigator>
  );
}

function ComicStackScreen() {
  return (
    <ComicStack.Navigator
      screenOptions={{
        tabBarStyle: {
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: 20,
        },
        headerShown: false,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarIconStyle: {display: 'none'},
      }}>
      <ComicStack.Screen name="ComicBook" component={ComicBookList} />
      <ComicStack.Screen name="ComicBookDetail" component={ComicBookDetail} />
    </ComicStack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: 20,
          },
          headerShown: false,
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarIconStyle: {display: 'none'},
        }}>
        <Tab.Screen
          name="CharacterList"
          component={CharacterStackScreen}
          options={{tabBarLabel: 'Characters'}}
        />
        <Tab.Screen
          name="ComicBookList"
          component={ComicStackScreen}
          options={{tabBarLabel: 'Comic Books'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
