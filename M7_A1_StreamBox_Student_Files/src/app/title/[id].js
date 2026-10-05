import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { titles } from '../../data/titles';

export default function Details() {
  const { id } = useLocalSearchParams();
  const selectedTitle = titles.find((item) => item.id === id);

  if (!selectedTitle) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorTitle}>Title not loaded yet.</Text>
        <Text style={styles.errorText}>Complete TODO 3 and TODO 4.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.screen}>
      <Image source={selectedTitle.poster} style={styles.poster} />
      <View style={styles.copy}>
        <Text style={styles.title}>{selectedTitle.title}</Text>
        <Text style={styles.meta}>
          {selectedTitle.year} • {selectedTitle.maturity} • {selectedTitle.duration}
        </Text>
        <Text style={styles.genre}>{selectedTitle.genre}</Text>
        <Text style={styles.desc}>{selectedTitle.description}</Text>
        <View style={styles.info}>
          <Text style={styles.infoLabel}>DYNAMIC ROUTE</Text>
          <Text style={styles.infoValue}>/title/{selectedTitle.id}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#08090c' },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#08090c',
    padding: 28,
  },
  errorTitle: { color: '#fff', fontSize: 22, fontWeight: '900' },
  errorText: { color: '#a7abb4', marginTop: 10 },
  poster: { width: '100%', height: 460, resizeMode: 'cover' },
  copy: { padding: 20 },
  title: { color: '#fff', fontSize: 31, fontWeight: '900' },
  meta: { color: '#d1d5db', marginTop: 8, fontWeight: '700' },
  genre: { color: '#f43f5e', marginTop: 10, fontWeight: '900' },
  desc: { color: '#d1d5db', marginTop: 14, fontSize: 15, lineHeight: 22 },
  info: { marginTop: 24, borderTopWidth: 1, borderTopColor: '#24262c', paddingTop: 16 },
  infoLabel: { color: '#8b8f98', fontSize: 10, fontWeight: '900' },
  infoValue: { color: '#fff', marginTop: 5, fontFamily: 'monospace' },
});