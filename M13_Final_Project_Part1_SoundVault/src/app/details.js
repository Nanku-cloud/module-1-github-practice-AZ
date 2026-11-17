import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { SAMPLE_TRACKS } from '../data/sampleData';
import { useAppContext } from '../context/AppContext';

export default function DetailsScreen() {
  const { title, artist } = useLocalSearchParams();
  const router = useRouter();
  const { favorites, toggleFavorite } = useAppContext();

  // Match the selected track from sampleData (defaults to first track)
  const track =
    SAMPLE_TRACKS.find((t) => t.title === title) || SAMPLE_TRACKS[0];
  const isFav = favorites.includes(track.id);

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.scrollContent}>
      <View style={styles.container}>
        <View style={styles.card}>
          {/* Album Art Placeholder Badge */}
          <View style={styles.artBox}>
            <Text style={styles.artIcon}>♫</Text>
            <Text style={styles.artLabel}>LOSSLESS AUDIO</Text>
          </View>

          <Text style={styles.title}>{track.title}</Text>
          <Text style={styles.artist}>{artist || track.artist}</Text>

          <View style={styles.metaRow}>
            <View style={styles.metaPill}>
              <Text style={styles.metaText}>Album: {track.album}</Text>
            </View>
            <View style={styles.metaPill}>
              <Text style={styles.metaText}>Length: {track.duration}</Text>
            </View>
          </View>

          <Text style={styles.info}>
            High-Fidelity Master • SoundVault Rock & Alternative Collection
          </Text>

          {/* Favorite Toggle Button */}
          <TouchableOpacity
            style={[styles.favBtn, isFav && styles.favBtnActive]}
            onPress={() => toggleFavorite(track.id)}
          >
            <Text style={[styles.favBtnText, isFav && styles.favBtnTextActive]}>
              {isFav ? '♥ Saved in Your Library' : '♡ Add to Favorites'}
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <Text style={styles.backBtnText}>← Go Back</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#121212' },
  scrollContent: { padding: 20, alignItems: 'center', justifyContent: 'center', flexGrow: 1 },
  container: { width: '100%', maxWidth: 480 },

  card: {
    backgroundColor: '#1e1e1e',
    padding: 28,
    borderRadius: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2c2c2c',
    marginBottom: 16,
  },
  artBox: {
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: '#18261d',
    borderWidth: 2,
    borderColor: '#1db954',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  artIcon: { color: '#1db954', fontSize: 44, fontWeight: 'bold' },
  artLabel: { color: '#1db954', fontSize: 9, fontWeight: 'bold', letterSpacing: 1, marginTop: 4 },

  title: { color: '#fff', fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 6 },
  artist: { color: '#1db954', fontSize: 18, fontWeight: '600', marginBottom: 16 },

  metaRow: { flexDirection: 'row', gap: 10, marginBottom: 16 },
  metaPill: {
    backgroundColor: '#282828',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  metaText: { color: '#ccc', fontSize: 13, fontWeight: '600' },

  info: { color: '#888', fontSize: 13, textAlign: 'center', marginBottom: 22 },

  favBtn: {
    width: '100%',
    backgroundColor: '#262626',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#3a3a3a',
  },
  favBtnActive: {
    backgroundColor: '#1e2e23',
    borderColor: '#1db954',
  },
  favBtnText: { color: '#fff', fontSize: 15, fontWeight: 'bold' },
  favBtnTextActive: { color: '#1db954' },

  backBtn: {
    backgroundColor: '#1db954',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  backBtnText: { color: '#121212', fontSize: 16, fontWeight: 'bold' },
});