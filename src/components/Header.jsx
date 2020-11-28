import React from 'react';
import {View, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Entypo,Ionicons,MaterialIcons } from '@expo/vector-icons'
import Constant from 'expo-constants'

export default function Header() {
  const navigation = useNavigation();
  return (
    <View style={{
        marginTop:Constant.statusBarHeight,
        height:60,
        backgroundColor:'#060a2c',
        flexDirection:'row',
        justifyContent:'space-between',
        elevation:6,
    }}>

        {/* THE SECTION OF THE FIRST VIEW */}
      <View style={{
        flexDirection:'row',
        padding:17,
      }}>
        <Entypo name="youtube" size={24} color="red" />
        <Text style={{
            color:'white',
            fontWeight:'bold',
            fontSize:17,
            marginLeft:5,
        }}>FreeVideos</Text>
      </View>

        {/* THE SECTION OF THE SECOND VIEW */}
        <View style={{
            flexDirection:'row',
            padding:17,
            justifyContent:'space-evenly',
            width:160,
        }}>
        <Ionicons name="md-videocam" size={24} color="red" />
        <Ionicons name="md-search" size={24} color="red" onPress={()=>navigation.navigate("search")}/>
        <MaterialIcons name="account-circle" size={24} color="red" />
        
      </View>
    </View>
  );
}
