import React from 'react';
import {Image,StyleSheet,Text,View} from 'react-native';
import {colors} from '../styles/theme';
export default function StoryBubble({story}){return <View style={s.wrap}><View style={s.ring}><Image source={story.image} style={s.avatar}/></View><Text numberOfLines={1} style={s.name}>{story.name}</Text></View>}
const s=StyleSheet.create({wrap:{width:76,alignItems:'center',marginRight:12},ring:{width:66,height:66,borderRadius:33,padding:3,backgroundColor:colors.accent},avatar:{width:'100%',height:'100%',borderRadius:30,borderWidth:3,borderColor:colors.bg},name:{marginTop:6,color:colors.text,fontSize:12}});
