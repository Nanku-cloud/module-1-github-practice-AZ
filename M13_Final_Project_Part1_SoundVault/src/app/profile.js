import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Switch, ScrollView, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { useAppContext } from '../context/AppContext';
import { SAMPLE_TRACKS } from '../data/sampleData';

export default function ProfileScreen() {
  const router = useRouter();
  const { username, setUsername, favorites } = useAppContext();

  const [isEditing, setIsEditing] = useState(false);
  const [draftName, setDraftName] = useState(username);
  const [highQualityAudio, setHighQualityAudio] = useState(true);
  const [offlineMode, setOfflineMode] = useState(false);

  const handleSaveName = () => {
    if (draftName.trim()) {
      setUsername(draftName.trim());
    }
    setIsEditing(false);
  };

  // Generate initials dynamically from username
  const initials = username
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2) || 'SV';

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.scrollContent}>
      <View style={styles.container}>
        {/* Profile Header & Avatar */}
        <View style={styles.profileHeader}>
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarText}>{initials}</Text>
          </View>

          {isEditing ? (
            <View style={styles.editRow}>
              <TextInput
                style={styles.nameInput}
                value={draftName}
                onChangeText={setDraftName}
                placeholder="Enter username..."
                placeholderTextColor="#888"
                autoFocus
              />
              <TouchableOpacity style={styles.savePill} onPress={handleSaveName}>
                <Text style={styles.savePillText}>Save</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.nameRow}>
              <Text style={styles.username}>{username}</Text>
              <TouchableOpacity
                style={styles.editPill}
                onPress={() => {
                  setDraftName(username);
                  setIsEditing(true);
                }}
              >
                <Text style={styles.editPillText}>✎ Edit</Text>
              </TouchableOpacity>
            </View>
          )}

          <View style={styles.badge}>
            <Text style={styles.badgeText}>PRO AUDIO TIER</Text>
          </View>
        </View>

        {/* Live Listening Stats Row */}
        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>{favorites.length}</Text>
            <Text style={styles.statLabel}>Saved Tracks</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>{SAMPLE_TRACKS.length}</Text>
            <Text style={styles.statLabel}>Vault Catalog</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>Rock</Text>
            <Text style={styles.statLabel}>Top Genre</Text>
          </View>
        </View>

        {/* Account & App Details Card */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Account Overview</Text>
          <View style={styles.infoRow}>
            <Text style={styles.label}>App Track</Text>
            <Text style={styles.value}>SoundVault Music</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Top Artists</Text>
            <Text style={styles.value}>Three Days Grace, Nirvana, SOAD</Text>
          </View>
          <View style={[styles.infoRow, { borderBottomWidth: 0 }]}>
            <Text style={styles.label}>Storage Engine</Text>
            <Text style={styles.statusValue}>● State Synced</Text>
          </View>
        </View>

        {/* Interactive Playback Settings */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Audio & Playback Preferences</Text>
          <View style={styles.toggleRow}>
            <View>
              <Text style={styles.toggleTitle}>Lossless Hi-Fi Streaming</Text>
              <Text style={styles.toggleSub}>Stream tracks at maximum bitrate</Text>
            </View>
            <Switch
              value={highQualityAudio}
              onValueChange={setHighQualityAudio}
              trackColor={{ false: '#333', true: '#1db954' }}
              thumbColor="#fff"
            />
          </View>
          <View style={[styles.toggleRow, { borderBottomWidth: 0, paddingBottom: 0 }]}>
            <View>
              <Text style={styles.toggleTitle}>Offline Vault Mode</Text>
              <Text style={styles.toggleSub}>Only play locally cached tracks</Text>
            </View>
            <Switch
              value={offlineMode}
              onValueChange={setOfflineMode}
              trackColor={{ false: '#333', true: '#1db954' }}
              thumbColor="#fff"
            />
          </View>
        </View>

        {/* Navigation Buttons */}
        <View style={styles.navGrid}>
          <TouchableOpacity style={styles.primaryBtn} onPress={() => router.push('/library')}>
            <Text style={styles.primaryBtnText}>♥ Open My Library ({favorites.length})</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryBtn} onPress={() => router.push('/')}>
            <Text style={styles.secondaryBtnText}>← Back to Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#121212' },
  scrollContent: { padding: 20, alignItems: 'center' },
  container: { width: '100%', maxWidth: 520 },

  profileHeader: { alignItems: 'center', marginBottom: 24, marginTop: 10 },
  avatarCircle: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: '#1db954',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
    borderWidth: 3,
    borderColor: '#282828',
  },
  avatarText: { color: '#121212', fontSize: 30, fontWeight: '900', letterSpacing: 1 },
  nameRow: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 8 },
  username: { color: '#fff', fontSize: 24, fontWeight: 'bold' },
  editPill: {
    backgroundColor: '#242424',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#3a3a3a',
  },
  editPillText: { color: '#ccc', fontSize: 12, fontWeight: '600' },

  editRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 10 },
  nameInput: {
    backgroundColor: '#1e1e1e',
    color: '#fff',
    borderWidth: 1,
    borderColor: '#1db954',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
    minWidth: 200,
  },
  savePill: {
    backgroundColor: '#1db954',
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius: 8,
  },
  savePillText: { color: '#121212', fontWeight: 'bold', fontSize: 14 },

  badge: {
    backgroundColor: '#1e2e23',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#1db954',
  },
  badgeText: { color: '#1db954', fontSize: 11, fontWeight: 'bold', letterSpacing: 1 },

  statsRow: {
    flexDirection: 'row',
    backgroundColor: '#1e1e1e',
    borderRadius: 12,
    paddingVertical: 16,
    marginBottom: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  statBox: { alignItems: 'center', flex: 1 },
  statNumber: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  statLabel: { color: '#888', fontSize: 12, marginTop: 4 },
  statDivider: { width: 1, height: 30, backgroundColor: '#333' },

  card: { backgroundColor: '#1e1e1e', padding: 20, borderRadius: 12, marginBottom: 20 },
  sectionTitle: { color: '#fff', fontSize: 16, fontWeight: 'bold', marginBottom: 14 },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#2a2a2a',
  },
  label: { color: '#888', fontSize: 14 },
  value: { color: '#fff', fontSize: 14, fontWeight: '600' },
  statusValue: { color: '#1db954', fontSize: 14, fontWeight: '600' },

  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#2a2a2a',
  },
  toggleTitle: { color: '#fff', fontSize: 15, fontWeight: '600' },
  toggleSub: { color: '#888', fontSize: 12, marginTop: 2 },

  navGrid: { gap: 10, marginBottom: 30 },
  primaryBtn: {
    backgroundColor: '#1db954',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  primaryBtnText: { color: '#121212', fontSize: 16, fontWeight: 'bold' },
  secondaryBtn: {
    backgroundColor: '#242424',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333',
  },
  secondaryBtnText: { color: '#fff', fontSize: 15, fontWeight: '600' },
});