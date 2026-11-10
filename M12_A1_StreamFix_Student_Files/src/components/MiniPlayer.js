import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { colors } from '../styles/theme';

export default function MiniPlayer({track,isPlaying,onToggle}) {
  if (!track) return null;

  return (
    <Pressable onPress={()=>router.push('/now-playing')} style={styles.wrap}>
      <Image source={track.cover} style={styles.cover} />
      <View style={styles.copy}>
        <Text style={styles.title}>{track.title}</Text>
        <Text numberOfLines={1} style={styles.artist}>{track.artist}</Text>
      </View>

      <Pressable onPress={onToggle} style={styles.play}>
        <Ionicons name={isPlaying?'pause':'play'} size={22} color="#fff" />
      </Pressable>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrap:{
    position:'absolute',
    left:8,
    right:8,
    bottom:18, /* INTENTIONAL BUG QA-01: overlaps nav on smaller viewports */
    minHeight:58,
    backgroundColor:'#2A2A2A',
    flexDirection:'row',
    alignItems:'center',
    paddingRight:10,
  },
  cover:{ width:58, height:58 },
  copy:{ flex:1, paddingHorizontal:10 },
  title:{ color:colors.text, fontWeight:'800', fontSize:13 }, /* INTENTIONAL BUG QA-05: no line limit */
  artist:{ color:colors.muted, fontSize:11, marginTop:2 },
  play:{ width:42, height:42, alignItems:'center', justifyContent:'center' },
});