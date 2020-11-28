
import React from 'react';
import { View, Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import { MaterialIcons } from '@expo/vector-icons';

import Homescreen from './src/screens/Home';
import Search from './src/screens/Search';
import VideoPlayer from './src/screens/VideoPlayer';
import Explore from './src/screens/Explore';
import Subscribe from './src/screens/Subscribe';

import {reducer} from './src/reducers/reducer'

import {Provider} from 'react-redux'
import {createStore} from 'redux'


const store = createStore(reducer)

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const RootHome = ()=>{
  return(
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconName;

            if (route.name === 'home') {
              iconName = "home";
            } else if (route.name === 'explore') {
              iconName ="explore"
            } else if(route.name === 'subscribe'){
              iconName="subscriptions"
            }

            // You can return any component that you like here!
            return <MaterialIcons name={iconName} size={32} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#151c58',
          inactiveTintColor: 'gray',
        }}>
      <Tab.Screen name="home" component={Homescreen}/>
      <Tab.Screen name="explore" component={Explore}/>
      <Tab.Screen name="subscribe" component={Subscribe}/>
      
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="rootHome" component={RootHome}/>
          <Stack.Screen name="search" component={Search}/>
          <Stack.Screen name="videoplayer" component={VideoPlayer}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


