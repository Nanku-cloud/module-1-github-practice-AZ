import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function SavedPanel({ savedHotels, onRemove, onClear }) {
  if (savedHotels.length === 0) {
    return (
      <View style={styles.empty}>
        <Text style={styles.emptyTitle}>No saved stays yet</Text>
        <Text style={styles.emptyText}>Use the heart icon to save a hotel, then refresh the app to prove persistence works.</Text>
      </View>
    );
  }

  return (
    <View style={styles.panel}>
      <View style={styles.headingRow}>
        <Text style={styles.heading}>Saved stays</Text>
        <Pressable onPress={onClear}>
          <Text style={styles.clear}>Clear all</Text>
        </Pressable>
      </View>

      {savedHotels.map((hotel) => (
        <View key={hotel.id} style={styles.savedRow}>
          <View style={styles.savedText}>
            <Text style={styles.savedName}>{hotel.name}</Text>
            <Text style={styles.savedMeta}>{hotel.neighborhood}</Text>
          </View>
          <Pressable onPress={() => onRemove(hotel.id)}>
            <Text style={styles.remove}>Remove</Text>
          </Pressable>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  panel: { paddingHorizontal: 16, paddingTop: 18, paddingBottom: 40, backgroundColor: '#fff' },
  headingRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  heading: { color: '#0f172a', fontSize: 24, fontWeight: '900', letterSpacing: -0.7 },
  clear: { color: '#006ce4', fontWeight: '800' },
  savedRow: { paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: '#e2e8f0', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 12 },
  savedText: { flex: 1 },
  savedName: { color: '#0f172a', fontWeight: '800', fontSize: 15 },
  savedMeta: { marginTop: 3, color: '#64748b', fontSize: 12 },
  remove: { color: '#b91c1c', fontWeight: '800', fontSize: 12 },
  empty: { margin: 16, padding: 22, borderRadius: 12, backgroundColor: '#f8fafc', borderWidth: 1, borderColor: '#e2e8f0' },
  emptyTitle: { color: '#0f172a', fontSize: 18, fontWeight: '900' },
  emptyText: { marginTop: 7, color: '#64748b', lineHeight: 20 },
});
