import React, { useMemo, useState } from 'react';
import {
  FlatList, SafeAreaView, StyleSheet, Text, TextInput, View
} from 'react-native';
import AlbumCard from '../components/AlbumCard';
import BottomNav from '../components/BottomNav';
import { tracks } from '../data/musicData';
import { colors } from '../styles/theme';

export default function SearchScreen() {
  const [query, setQuery] = useState('');

  // INTENTIONAL QA-06:
  // expensive filtering is forced to run more than necessary.
  const results = tracks.filter((track) => {
    return (
      track.title.toLowerCase().includes(query.toLowerCase()) ||
      track.artist.toLowerCase().includes(query.toLowerCase())
    );
  });

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.title}>Search</Text>
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="What do you want to listen to?"
          placeholderTextColor="#777"
          style={styles.input}
        />
      </View>

      {/* INTENTIONAL QA-02:
          blank query and zero-result query both look like a blank screen. */}
      {query.length === 0 ? (
        <View style={styles.blank}>
          <Text style={{ color: '#aaa', fontSize: 16, textAlign: 'center', marginTop: 40 }}>
            Search for your favorite songs or artists to begin.
          </Text>
        </View>
      ) : results.length > 0 ? (
        <FlatList
          data={results}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          numColumns={2}
          columnWrapperStyle={styles.row}
          renderItem={({ item }) => (
            <AlbumCard item={item} onPlay={() => { }} />
          )}
        />
      ) : (
        <View style={styles.blank}>
          <Text style={{ color: '#aaa', fontSize: 16, textAlign: 'center', marginTop: 40 }}>
            No results found. Try another search term.
          </Text>
        </View>
      )}

      <BottomNav active="Search" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  header: { padding: 18 },
  title: { color: colors.text, fontSize: 30, fontWeight: '900', marginBottom: 14 },
  input: {
    backgroundColor: '#fff', color: '#000', borderRadius: 4,
    minHeight: 48, paddingHorizontal: 14, fontWeight: '700'
  },
  list: { paddingHorizontal: 18, paddingBottom: 95 },
  row: { justifyContent: 'space-between' },
  blank: { flex: 1 },
});