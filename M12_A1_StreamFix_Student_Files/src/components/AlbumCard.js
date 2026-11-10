import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../styles/theme';

export default function AlbumCard({item,onPlay}) {
  return (
    <Pressable onPress={() => onPlay(item)} style={styles.card}>
      <View style={styles.coverWrap}>
        <Image source={item.cover} style={styles.cover} />
        <View style={styles.playBadge}>
          <Ionicons name="play" size={18} color="#000" />
        </View>
      </View>
      <Text numberOfLines={1} style={styles.title}>{item.title}</Text>
      <Text numberOfLines={1} style={styles.artist}>{item.artist}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card:{ width:154, marginRight:14 },
  coverWrap:{ position:'relative' },
  cover:{ width:154, height:154, backgroundColor:'#242424' },
  playBadge:{
    position:'absolute', right:10, bottom:10, width:38, height:38,
    borderRadius:19, backgroundColor:colors.accent, alignItems:'center', justifyContent:'center'
  },
  title:{ color:colors.text, fontWeight:'800', marginTop:8, fontSize:14 },
  artist:{ color:colors.muted, marginTop:3, fontSize:12 },
});