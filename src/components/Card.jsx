
// THIS COMPONENT IS USED TO DISPLAY THE VIDEOS ON THE HOME PAGE


import React from 'react';
import {View, Text, Image, Dimensions, TouchableOpacity} from 'react-native';

import { useNavigation } from '@react-navigation/native';


import {MaterialIcons } from '@expo/vector-icons'
// import Constant from 'expo-constants'


const Card = (props) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity 
        onPress={()=>navigation.navigate('videoplayer', {videoId:props.videoId,title:props.title})}>
        <View style={{
            marginBottom:15,
            elevation:4
        }}>
            <Image source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}
                style={{
                    width:'100%',
                    height:250,
                }}
            />

            <View style={{
                flexDirection:'row',
                padding:10,
            }}>
                {/* <MaterialIcons name="account-circle" size={45} color="red" /> */}
                <Image source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}
                style={{
                    width:'15%',
                    height:50,
                    borderRadius:150,
                    borderColor:'white',
                    borderWidth:2,
                }}
                />

                <View style={{
                    marginLeft:10,

                    
                }}>
                    <Text style={{
                        fontSize:18,
                        width:Dimensions.get("screen").width - 95,
                        color:'white'
                    }}
                    ellipsizeMode='tail'
                    numberOfLines={1}>{props.title}</Text>
                    <Text style={{color:'white'}}>{props.channel}</Text>
                </View>
            </View>
        </View>
        </TouchableOpacity>
    )
}

export default Card
