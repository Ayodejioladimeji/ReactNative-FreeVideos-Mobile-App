import React from 'react'
import { View, Text,  Image, Dimensions, TouchableOpacity } from 'react-native';
import Constant from 'expo-constants'

import { WebView } from 'react-native-webview';

import { useNavigation } from '@react-navigation/native';



const VideoPlayer = ({route}) => {
    const navigation = useNavigation();
    const {videoId, title, channel} = route.params
    return (
        <View style={{flex:1,marginTop:Constant.statusBarHeight,backgroundColor:'#151c58'}}>
            <View style={{
                width:'100%',
                height:350,
            }}>
                <WebView
                javaScriptEnabled={true}
                domStorageEnabled={true}
                 source={{uri:`https://www.youtube.com/embed/${videoId}`}}/>
            </View>
            <Text style={{
                width:Dimensions.get('screen').width - 50,
                fontSize:18,
                margin:9,
                color:'white'
            }}
            numberOfLines={2}
            ellipsizeMode="tail">
                {title}
            </Text>

            <View style={{
                borderBottomWidth:1
            }}/>


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
        </View>
    )
}

export default VideoPlayer
