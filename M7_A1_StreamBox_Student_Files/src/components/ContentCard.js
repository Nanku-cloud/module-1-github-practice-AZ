import React from 'react';
import {Image,Pressable,StyleSheet,Text,View} from 'react-native';
export default function ContentCard({item,onPress}){return <Pressable onPress={onPress} style={styles.card}><Image source={item.poster} style={styles.poster}/><View style={styles.copy}><Text numberOfLines={1} style={styles.title}>{item.title}</Text><Text style={styles.meta}>{item.year} • {item.genre}</Text></View></Pressable>}
const styles=StyleSheet.create({card:{width:154,marginRight:12},poster:{width:154,height:222,borderRadius:7,backgroundColor:'#181a20'},copy:{paddingTop:8},title:{color:'#fff',fontWeight:'800',fontSize:14},meta:{color:'#8b8f98',marginTop:3,fontSize:11}});
