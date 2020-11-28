
// THIS MINI CARD IS USED IN THE SEARCH QUERY PAGE

import React from 'react';
import {View, Text, Image, Dimensions, TouchableOpacity} from 'react-native';

import { useNavigation } from '@react-navigation/native';


const MiniCard = ({title,channel,videoId}) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity 
                onPress={()=>navigation.navigate('videoplayer', {videoId:videoId,title:title})}>
            <View style={{
                flexDirection:'row',
                padding:12,
                marginTop:0,
                elevation:4
            }}>
                <Image source={{uri:`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}}
                    style={{
                        width:'45%',
                        height:100,
                    }}
                />

                <View style={{paddingLeft:7,}}>
                    <Text style={{
                        fontSize:12,
                        width:Dimensions.get('screen').width/2,
                        color:'white'
                    }}
                    ellipsizeMode="tail"
                    numberOfLines={3}>{title}</Text>

                    <Text style={{fontSize:11,color:'white',marginTop:5}}>{channel}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default MiniCard
