import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { SAMPLE_TRACKS } from '../data/sampleData';
import { useAppContext } from '../context/AppContext';

export default function LibraryScreen() {
  const router = useRouter();
  const { username, favorites, toggleFavorite } = useAppContext();
  const [activeTab, setActiveTab] = useState('favorites'); // 'favorites' | 'all'

  const displayedTracks =
    activeTab === 'favorites'
      ? SAMPLE_TRACKS.filter((track) => favorites.includes(track.id))
      : SAMPLE_TRACKS;

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.scrollContent}>
      <View style={styles.container}>
        {/* Header Banner */}
        <View style={styles.headerBanner}>
          <View>
            <Text style={styles.ownerLabel}>{username.toUpperCase()}’S VAULT</Text>
            <Text style={styles.header}>My Music Library</Text>
          </View>
          <View style={styles.countPill}>
            <Text style={styles.countPillText}>{favorites.length} Saved</Text>
          </View>
        </View>

        {/* Filter Pill Tabs */}
        <View style={styles.tabRow}>
          <TouchableOpacity
            style={[styles.tabBtn, activeTab === 'favorites' && styles.tabBtnActive]}
            onPress={() => setActiveTab('favorites')}
          >
            <Text style={[styles.tabText, activeTab === 'favorites' && styles.tabTextActive]}>
              ♥ Saved Favorites ({favorites.length})
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tabBtn, activeTab === 'all' && styles.tabBtnActive]}
            onPress={() => setActiveTab('all')}
          >
            <Text style={[styles.tabText, activeTab === 'all' && styles.tabTextActive]}>
              ♫ All Vault Tracks ({SAMPLE_TRACKS.length})
            </Text>
          </TouchableOpacity>
        </View>

        {/* Track List */}
        {displayedTracks.length === 0 ? (
          <View style={styles.emptyBox}>
            <Text style={styles.emptyTitle}>No favorite tracks yet</Text>
            <Text style={styles.emptySub}>
              Switch to "All Vault Tracks" and tap the ♥ icon to add songs to your library.
            </Text>
            <TouchableOpacity style={styles.primaryBtn} onPress={() => setActiveTab('all')}>
              <Text style={styles.primaryBtnText}>Browse All Tracks</Text>
            </TouchableOpacity>
          </View>
        ) : (
          displayedTracks.map((item, idx) => {
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
                  <View style={styles.trackIndexBox}>
                    <Text style={styles.trackIndex}>{idx + 1}</Text>
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

        {/* Bottom Action Buttons */}
        <View style={styles.footerButtons}>
          <TouchableOpacity style={styles.secondaryBtn} onPress={() => router.push('/search')}>
            <Text style={styles.secondaryBtnText}>🔍 Search Catalog</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryBtn} onPress={() => router.push('/profile')}>
            <Text style={styles.secondaryBtnText}>👤 Profile</Text>
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

  headerBanner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 6,
  },
  ownerLabel: { color: '#1db954', fontSize: 11, fontWeight: 'bold', letterSpacing: 1.2 },
  header: { fontSize: 26, fontWeight: 'bold', color: '#fff', marginTop: 2 },
  countPill: {
    backgroundColor: '#1e2e23',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#1db954',
  },
  countPillText: { color: '#1db954', fontWeight: 'bold', fontSize: 13 },

  tabRow: { flexDirection: 'row', gap: 10, marginBottom: 20 },
  tabBtn: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2c2c2c',
  },
  tabBtnActive: {
    backgroundColor: '#1db954',
    borderColor: '#1db954',
  },
  tabText: { color: '#b3b3b3', fontSize: 13, fontWeight: '700' },
  tabTextActive: { color: '#121212' },

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
  trackIndexBox: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: '#282828',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  trackIndex: { color: '#1db954', fontWeight: 'bold', fontSize: 14 },
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
  emptyTitle: { color: '#fff', fontSize: 18, fontWeight: 'bold', marginBottom: 6 },
  emptySub: { color: '#888', fontSize: 14, textAlign: 'center', marginBottom: 16 },
  primaryBtn: {
    backgroundColor: '#1db954',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  primaryBtnText: { color: '#121212', fontWeight: 'bold', fontSize: 14 },

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