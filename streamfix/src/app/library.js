import React, { useState } from 'react';
import {
  SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable, Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BottomNav from '../components/BottomNav';
import { tracks } from '../data/musicData';
import { colors } from '../styles/theme';

export default function LibraryScreen() {
  const [favorites,setFavorites] = useState([tracks[0]]);

  function addFavorite(track) {
    // INTENTIONAL QA-03:
    // duplicates are allowed.
    setFavorites((current)=>[...current,track]);
  }

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Your Library</Text>
        <Text style={styles.sub}>Saved tracks and playlists</Text>

        <Pressable onPress={()=>addFavorite(tracks[1])} style={styles.debugAction}>
          <Text style={styles.debugText}>Add “After Hours” to Favorites</Text>
        </Pressable>

        {favorites.map((track,index)=>(
          <View key={`${track.id}-${index}`} style={styles.row}>
            <Image source={track.cover} style={styles.cover} />
            <View style={styles.copy}>
              <Text style={styles.track}>{track.title}</Text>
              <Text style={styles.artist}>{track.artist}</Text>
            </View>
            <Ionicons name="heart" size={20} color={colors.accent} />
          </View>
        ))}
      </ScrollView>
      <BottomNav active="Your Library" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen:{ flex:1, backgroundColor:colors.bg },
  content:{ padding:18, paddingBottom:100 },
  title:{ color:colors.text, fontSize:30, fontWeight:'900' },
  sub:{ color:colors.muted, marginTop:4, marginBottom:18 },
  debugAction:{
    backgroundColor:'#202020', minHeight:44, justifyContent:'center',
    paddingHorizontal:12, marginBottom:18
  },
  debugText:{ color:'#fff', fontWeight:'800' },
  row:{
    minHeight:72, flexDirection:'row', alignItems:'center',
    borderBottomWidth:1, borderBottomColor:'#222'
  },
  cover:{ width:52, height:52 },
  copy:{ flex:1, marginLeft:12 },
  track:{ color:colors.text, fontWeight:'800' },
  artist:{ color:colors.muted, marginTop:3, fontSize:12 },
});