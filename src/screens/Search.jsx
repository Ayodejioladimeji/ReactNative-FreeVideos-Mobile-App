import React, {useState} from 'react';
import {View, Text, ScrollView, TextInput, FlatList, ActivityIndicator} from 'react-native';

import { Entypo,Ionicons,MaterialIcons } from '@expo/vector-icons'
import MiniCard from '../components/MiniCard';
import Constant from 'expo-constants'

import {useSelector, useDispatch} from 'react-redux'


// https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=songs&type=video&key=AIzaSyDtCWCduSedfthvh


const Search = ({navigation}) => {
    const [value, setValue] = useState('')
    const dispatch =useDispatch()

    const miniCardData = useSelector(state=>{
        return state;
    })

    const [loading, setLoading] = useState(false)

    const fetchData=()=>{
        setLoading(true);
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${value}&type=video&key=AIzaSyBvu2kGsegc_qCTSLF2N4BzRBlaSHFSVJs`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setLoading(false)
            dispatch({type:'add', payload:data.items})
            // setMiniCardData(data.items)
        })
        .catch((error)=>{
            console.log("call error")
        })
        
    }
    return (
       <View style={{flex:1,marginTop:Constant.statusBarHeight,backgroundColor:'#151c58'}}>

            <View style={{
                padding:10,
                flexDirection:'row',
                justifyContent:'space-around',
                elevation:5,
                backgroundColor:'#151c58',
                height:50,
            }}>
                <Ionicons name="md-arrow-back" size={28} color="#fff" onPress={()=>navigation.goBack()}/>

                <TextInput style={{width:'70%',backgroundColor:'#060a2c',color:'white'}}
                value={value}
                    onChangeText={(text)=>setValue(text)}
                />

                <Ionicons name="md-send" size={28} color="#fff" onPress={fetchData} />
            </View>


            {/* THE SECTION OF THE MINI CARD */}
            {loading ?<ActivityIndicator style={{marginTop:10}} size="large" color="red"/>:null}
            <FlatList data={miniCardData}
                renderItem={({item})=>{
                    return <MiniCard videoId={item.id.videoId}
                        title={item.snippet.title}
                        channel={item.snippet.channelTitle}
                    />
                }}
                keyExtractor={item=>item.id.videoId}
            />

       </View>
    )
}

export default Search
