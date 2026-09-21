import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function BookingHeader({ savedCount }) {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.brand}>StayFinder</Text>
        <Text style={styles.tagline}>Find a stay that fits the trip</Text>
      </View>

      <View style={styles.savedPill}>
        <Ionicons name="heart-outline" size={18} color="#0f172a" />
        <Text style={styles.savedCount}>{savedCount}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#003b95',
    paddingHorizontal: 18,
    paddingTop: 14,
    paddingBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  brand: { color: '#fff', fontSize: 25, fontWeight: '900', letterSpacing: -0.7 },
  tagline: { marginTop: 2, color: '#dbeafe', fontSize: 12 },
  savedPill: {
    minWidth: 44,
    height: 36,
    paddingHorizontal: 10,
    borderRadius: 18,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  savedCount: { color: '#0f172a', fontWeight: '900' },
});
