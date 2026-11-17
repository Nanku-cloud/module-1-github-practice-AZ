import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { SAMPLE_TRACKS } from '../data/sampleData';
import { useAppContext } from '../context/AppContext';

export default function SearchScreen() {
  const router = useRouter();
  const { favorites, toggleFavorite } = useAppContext();
  const [query, setQuery] = useState('');

  const quickTags = ['Three Days Grace', 'Nirvana', 'AC/DC', 'Skillet', 'System of a Down'];

  const filteredTracks = SAMPLE_TRACKS.filter(
    (t) =>
      t.title.toLowerCase().includes(query.toLowerCase()) ||
      t.artist.toLowerCase().includes(query.toLowerCase()) ||
      t.album.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.scrollContent}>
      <View style={styles.container}>
        {/* Header */}
        <Text style={styles.subLabel}>EXPLORE CATALOG</Text>
        <Text style={styles.header}>Search SoundVault</Text>

        {/* Search Bar with Clear Button */}
        <View style={styles.searchBox}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.input}
            placeholder="Search tracks, artists, or albums..."
            placeholderTextColor="#777"
            value={query}
            onChangeText={setQuery}
          />
          {query.length > 0 && (
            <TouchableOpacity style={styles.clearBtn} onPress={() => setQuery('')}>
              <Text style={styles.clearBtnText}>✕</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Quick Filter Artist Pills */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tagRow}
        >
          {quickTags.map((tag) => {
            const isSelected = query.toLowerCase() === tag.toLowerCase();
            return (
              <TouchableOpacity
                key={tag}
                style={[styles.tagPill, isSelected && styles.tagPillActive]}
                onPress={() => setQuery(isSelected ? '' : tag)}
              >
                <Text style={[styles.tagText, isSelected && styles.tagTextActive]}>{tag}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* Results Count */}
        <Text style={styles.resultsHeader}>
          {query
            ? `Showing ${filteredTracks.length} result${filteredTracks.length === 1 ? '' : 's'} for "${query}"`
            : `All Available Tracks (${filteredTracks.length})`}
        </Text>

        {/* Filtered Track Cards */}
        {filteredTracks.length === 0 ? (
          <View style={styles.emptyBox}>
            <Text style={styles.emptyTitle}>No matching tracks found</Text>
            <Text style={styles.emptySub}>Try searching for another artist, song, or album.</Text>
            <TouchableOpacity style={styles.resetBtn} onPress={() => setQuery('')}>
              <Text style={styles.resetBtnText}>Clear Search</Text>
            </TouchableOpacity>
          </View>
        ) : (
          filteredTracks.map((item) => {
            const isFav = favorites.includes(item.id);
            return (
              <View key={item.id} style={styles.trackCard}>
                <TouchableOpacity
                  style={styles.trackMain}
                  onPress={() =>
                    router.push({
                      pathname: '/details',
                      params: { title: item.title, artist: item.artist },
                    })
                  }
                >
                  <View style={styles.playBadge}>
                    <Text style={styles.playIcon}>▶</Text>
                  </View>
                  <View style={styles.trackInfo}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.artist}>
                      {item.artist} • <Text style={styles.album}>{item.album}</Text>
                    </Text>
                  </View>
                  <Text style={styles.duration}>{item.duration}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.favBtn, isFav && styles.favBtnActive]}
                  onPress={() => toggleFavorite(item.id)}
                >
                  <Text style={[styles.favIcon, isFav && styles.favIconActive]}>
                    {isFav ? '♥' : '♡'}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })
        )}

        {/* Bottom Navigation */}
        <View style={styles.footerButtons}>
          <TouchableOpacity style={styles.secondaryBtn} onPress={() => router.push('/')}>
            <Text style={styles.secondaryBtnText}>← Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryBtn} onPress={() => router.push('/library')}>
            <Text style={styles.secondaryBtnText}>♥ Library ({favorites.length})</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#121212' },
  scrollContent: { padding: 20, alignItems: 'center' },
  container: { width: '100%', maxWidth: 560 },

  subLabel: { color: '#1db954', fontSize: 11, fontWeight: 'bold', letterSpacing: 1.2, marginTop: 6 },
  header: { fontSize: 26, fontWeight: 'bold', color: '#fff', marginTop: 2, marginBottom: 16 },

  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    borderRadius: 12,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: '#333',
    marginBottom: 14,
  },
  searchIcon: { fontSize: 16, marginRight: 10 },
  input: { flex: 1, color: '#fff', fontSize: 16, paddingVertical: 14 },
  clearBtn: {
    backgroundColor: '#2c2c2c',
    width: 26,
    height: 26,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearBtnText: { color: '#ccc', fontSize: 12, fontWeight: 'bold' },

  tagRow: { gap: 8, paddingBottom: 16 },
  tagPill: {
    backgroundColor: '#1e1e1e',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#333',
  },
  tagPillActive: {
    backgroundColor: '#1db954',
    borderColor: '#1db954',
  },
  tagText: { color: '#ccc', fontSize: 13, fontWeight: '600' },
  tagTextActive: { color: '#121212', fontWeight: 'bold' },

  resultsHeader: { color: '#888', fontSize: 13, fontWeight: '600', marginBottom: 12 },

  trackCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    borderRadius: 12,
    marginBottom: 10,
    paddingRight: 12,
    borderWidth: 1,
    borderColor: '#282828',
  },
  trackMain: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
  },
  playBadge: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#1e2e23',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#1db954',
  },
  playIcon: { color: '#1db954', fontSize: 12, marginLeft: 2 },
  trackInfo: { flex: 1 },
  title: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  artist: { color: '#b3b3b3', fontSize: 13, marginTop: 3 },
  album: { color: '#777' },
  duration: { color: '#888', fontSize: 13, marginLeft: 8 },

  favBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#262626',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#363636',
  },
  favBtnActive: {
    backgroundColor: '#1e2e23',
    borderColor: '#1db954',
  },
  favIcon: { color: '#888', fontSize: 18 },
  favIconActive: { color: '#1db954' },

  emptyBox: {
    backgroundColor: '#1e1e1e',
    padding: 28,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  emptyTitle: { color: '#fff', fontSize: 17, fontWeight: 'bold', marginBottom: 6 },
  emptySub: { color: '#888', fontSize: 14, textAlign: 'center', marginBottom: 16 },
  resetBtn: {
    backgroundColor: '#1db954',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 8,
  },
  resetBtnText: { color: '#121212', fontWeight: 'bold', fontSize: 14 },

  footerButtons: { flexDirection: 'row', gap: 10, marginTop: 14, marginBottom: 30 },
  secondaryBtn: {
    flex: 1,
    backgroundColor: '#222',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333',
  },
  secondaryBtnText: { color: '#fff', fontSize: 14, fontWeight: '600' },
});