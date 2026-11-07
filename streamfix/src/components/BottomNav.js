import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { colors } from '../styles/theme';

const items = [
  {label:'Home', icon:'home-outline', route:'/'},
  {label:'Search', icon:'search-outline', route:'/search'},
  {label:'Your Library', icon:'library-outline', route:'/library'},
];

export default function BottomNav({active='Home'}) {
  return (
    <View style={styles.nav}>
      {items.map((item)=> {
        const isActive = active === item.label;
        return (
          <Pressable key={item.label} onPress={()=>router.push(item.route)} style={styles.item}>
            <Ionicons name={isActive ? item.icon.replace('-outline','') : item.icon} size={22}
              color={isActive ? '#fff' : colors.muted} />
            <Text style={[styles.label,isActive&&styles.active]}>{item.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  nav:{
    position:'absolute', left:0, right:0, bottom:0, height:70,
    backgroundColor:'#101010', borderTopWidth:1, borderTopColor:'#262626',
    flexDirection:'row', alignItems:'center', justifyContent:'space-around'
  },
  item:{ alignItems:'center', minWidth:88 },
  label:{ color:colors.muted, fontSize:10, marginTop:4, fontWeight:'700' },
  active:{ color:'#fff' },
});