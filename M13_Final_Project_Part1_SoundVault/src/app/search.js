import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import { SAMPLE_TRACKS } from '../data/sampleData';

export default function SearchScreen() {
    const [query, setQuery] = useState('');
    const filteredTracks = SAMPLE_TRACKS.filter(t =>
        t.title.toLowerCase().includes(query.toLowerCase()) ||
        t.artist.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Search SoundVault 🔍</Text>
            <TextInput
                style={styles.input}
                placeholder="Search tracks or artists..."
                placeholderTextColor="#888"
                value={query}
                onChangeText={setQuery}
            />
            <FlatList
                data={filteredTracks}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.artist}>{item.artist} • {item.album}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#121212', padding: 20 },
    header: { fontSize: 22, fontWeight: 'bold', color: '#fff', marginBottom: 15 },
    input: { backgroundColor: '#1e1e1e', color: '#fff', padding: 12, borderRadius: 8, fontSize: 16, marginBottom: 20 },
    card: { backgroundColor: '#1e1e1e', padding: 15, borderRadius: 8, marginBottom: 10 },
    title: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
    artist: { color: '#b3b3b3', fontSize: 14, marginTop: 4 },
});