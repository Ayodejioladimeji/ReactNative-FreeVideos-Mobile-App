import React from 'react'
import { View, Text, FlatList, ScrollView } from 'react-native';
import Card from '../components/Card';
import Header from '../components/Header';

import {useSelector} from 'react-redux'

const LittleCard = ({name})=>{
    return(
        <View style={{
            backgroundColor:'#151c58',
            width:160,
            bordeRadius:4,
            height:50,
            marginTop:10,
            elevation:5
            
        }}>
            <Text style={{
                textAlign:'center',
                color:'white',
                fontSize:15,
                padding:10,
            }}>{name}</Text>
        </View>
        
    )
}


const Explore = () => {
    const cardData = useSelector(state=>{
        return state
      })
    return (
        <View style={{flex:1,backgroundColor:'#151c58'}}>
            <Header/>
            {/* <ScrollView> */}
                <View style={{
                    flexDirection:'row',
                    flexWrap:'wrap',
                    justifyContent:'space-around',
                }}>
                    <LittleCard name="Gaming"/>
                    <LittleCard name="Trending"/>
                    <LittleCard name="Music"/>
                    <LittleCard name="News"/>
                    <LittleCard name="Movies"/>
                    <LittleCard name="Fashion"/>
                </View>


                <Text style={{
                    margin:8,
                    fontSize:17,
                    color:'orangered',
                    textAlign:'center'
                }}>Trending Videos</Text>
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
                />
            {/* </ScrollView> */}
        </View>
    )
}

export default Explore
