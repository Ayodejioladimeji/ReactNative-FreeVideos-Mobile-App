import React, {useEffect} from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native';
import Card from '../components/Card';
import Header from '../components/Header';
import {useSelector, useDispatch} from 'react-redux'

export default function Homescreen({navigation}) {
  const cardData = useSelector(state=>{
    return state
  })

  const dispatch =useDispatch()

  useEffect(()=>{
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=laycon&type=video&key=AIzaSyBvu2kGsegc_qCTSLF2N4BzRBlaSHFSVJs`)
      .then(res=>res.json())
      .then(data=>{
          dispatch({type:'add', payload:data.items})
      })
      .catch((error)=>{
          console.log("call error today")
      })
  },[])

  return (
    <View style={{flex:1}}>
      <Header/>
      <FlatList 
        data={cardData} 
        renderItem = {({item})=>{
          return <Card 
          videoId={item.id.videoId}
          title={item.snippet.title}
          channel={item.snippet.channelTitle}
          />
        }}
        keyExtractor={item=>item.id.videoId}
       style={{backgroundColor:'#060a2c'}}/>
    </View>
  );
}
