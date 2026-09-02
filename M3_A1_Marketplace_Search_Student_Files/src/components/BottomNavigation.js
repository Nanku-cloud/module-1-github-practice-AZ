import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../utils/theme';

const items=[['home','Home'],['search-outline','Search'],['heart-outline','Saved'],['cart-outline','Cart'],['person-outline','You']];
export default function BottomNavigation({ cartCount }) {
  return <View style={styles.bar}>{items.map(([icon,label])=><Pressable key={label} style={styles.item}><View>{label==='Cart'&&cartCount>0?<Text style={styles.badge}>{cartCount}</Text>:null}<Ionicons name={icon} size={23} color={label==='Search'?colors.text:'#596064'} /></View><Text style={[styles.label,label==='Search'&&styles.active]}>{label}</Text></Pressable>)}</View>;
}
const styles=StyleSheet.create({bar:{backgroundColor:'#fff',borderTopColor:'#ddd',borderTopWidth:1,flexDirection:'row',justifyContent:'space-around',paddingBottom:8,paddingTop:7},item:{alignItems:'center',minWidth:54},label:{color:'#61686b',fontSize:10,marginTop:2},active:{color:colors.text,fontWeight:'800'},badge:{backgroundColor:'#b12704',borderRadius:10,color:'#fff',fontSize:9,fontWeight:'800',minWidth:16,paddingHorizontal:4,position:'absolute',right:-9,textAlign:'center',top:-5,zIndex:2}});
