import React, { useState } from 'react';
import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { tracks } from '../data/musicData';
import { colors } from '../styles/theme';

export default function NowPlayingScreen() {
  const [favorite,setFavorite] = useState(false);
  const [isPlaying,setIsPlaying] = useState(true);
  const track = tracks[3];

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.top}>
        <Pressable onPress={()=>router.back()}>
          <Ionicons name="chevron-down" size={30} color="#fff" />
        </Pressable>
        <Text style={styles.topTitle}>NOW PLAYING</Text>
        <View style={{width:30}} />
      </View>

      <View style={styles.body}>
        <Image source={track.cover} style={styles.cover} />
        <View style={styles.metaRow}>
          <View style={{flex:1}}>
            <Text style={styles.title}>{track.title}</Text>
            <Text style={styles.artist}>{track.artist}</Text>
          </View>
          <Pressable onPress={()=>setFavorite(v=>!v)}>
            <Ionicons name={favorite?'heart':'heart-outline'} size={28}
              color={favorite?colors.accent:'#fff'} />
          </Pressable>
        </View>

        <View style={styles.progress}>
          <View style={styles.progressFill} />
        </View>
        <View style={styles.times}>
          <Text style={styles.time}>1:14</Text>
          <Text style={styles.time}>3:48</Text>
        </View>

        <View style={styles.controls}>
          <Ionicons name="play-skip-back" size={28} color="#fff" />
          <Pressable onPress={()=>setIsPlaying(v=>!v)} style={styles.mainPlay}>
            <Ionicons name={isPlaying?'pause':'play'} size={34} color="#000" />
          </Pressable>
          <Ionicons name="play-skip-forward" size={28} color="#fff" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen:{ flex:1, backgroundColor:'#0C0C0C' },
  top:{
    flexDirection:'row', alignItems:'center', justifyContent:'space-between',
    paddingHorizontal:18, paddingTop:8
  },
  topTitle:{ color:'#fff', fontSize:11, letterSpacing:1.4, fontWeight:'900' },
  body:{ flex:1, paddingHorizontal:24, paddingTop:28 },
  cover:{ width:'100%', aspectRatio:1, backgroundColor:'#222' },
  metaRow:{ flexDirection:'row', alignItems:'center', marginTop:24 },
  title:{ color:'#fff', fontSize:22, fontWeight:'900' },
  artist:{ color:colors.muted, fontSize:14, marginTop:5 },
  progress:{ height:4, backgroundColor:'#555', marginTop:28 },
  progressFill:{ width:'32%', height:4, backgroundColor:'#fff' },
  times:{ flexDirection:'row', justifyContent:'space-between', marginTop:6 },
  time:{ color:'#A0A0A0', fontSize:10 },
  controls:{ flexDirection:'row', alignItems:'center', justifyContent:'space-around', marginTop:28 },
  mainPlay:{ width:66, height:66, borderRadius:33, backgroundColor:'#fff', alignItems:'center', justifyContent:'center' },
});