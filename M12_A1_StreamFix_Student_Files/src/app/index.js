import React, { useMemo, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Shelf from '../components/Shelf';
import BottomNav from '../components/BottomNav';
import MiniPlayer from '../components/MiniPlayer';
import { tracks, shelves } from '../data/musicData';
import { colors } from '../styles/theme';

export default function HomeScreen() {
  const [currentTrack,setCurrentTrack] = useState(tracks[0]);
  const [isPlaying,setIsPlaying] = useState(true);

  const shelfData = useMemo(() =>
    shelves.map((shelf) => ({
      ...shelf,
      items:shelf.ids.map((id)=>tracks.find((t)=>t.id===id))
    })), []
  );

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
          <Text style={styles.greeting}>Good afternoon</Text>
          <Text style={styles.headline}>Pick up where you left off</Text>
        </View>

        {shelfData.map((shelf)=>(
          <Shelf
            key={shelf.title}
            title={shelf.title}
            items={shelf.items}
            onPlay={(track)=>{ setCurrentTrack(track); setIsPlaying(true); }}
          />
        ))}
      </ScrollView>

      <MiniPlayer
        track={currentTrack}
        isPlaying={isPlaying}
        onToggle={()=>setIsPlaying(v=>!v)}
      />
      <BottomNav active="Home" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen:{ flex:1, backgroundColor:colors.bg },
  content:{ paddingHorizontal:18, paddingBottom:145 },
  hero:{ paddingTop:16, paddingBottom:8 },
  greeting:{ color:colors.muted, fontSize:13, fontWeight:'700' },
  headline:{ color:colors.text, fontSize:30, lineHeight:34, fontWeight:'900', marginTop:4 },
});