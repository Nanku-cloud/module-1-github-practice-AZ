import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function DetailsScreen() {
    const { title, artist } = useLocalSearchParams();
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Track Details 🎵</Text>
            <View style={styles.card}>
                <Text style={styles.title}>{title || 'Time Of Dying'}</Text>
                <Text style={styles.artist}>Artist: {artist || 'Three Days Grace'}</Text>
                <Text style={styles.info}>Format: Lossless Audio / High Fidelity Rock</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => router.back()}>
                <Text style={styles.buttonText}>Back to Home</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#121212', padding: 20, justifyContent: 'center' },
    header: { fontSize: 24, fontWeight: 'bold', color: '#fff', marginBottom: 20, textAlign: 'center' },
    card: { backgroundColor: '#1e1e1e', padding: 25, borderRadius: 12, marginBottom: 20, alignItems: 'center' },
    title: { color: '#fff', fontSize: 22, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
    artist: { color: '#1db954', fontSize: 18, marginBottom: 10 },
    info: { color: '#b3b3b3', fontSize: 14, textAlign: 'center' },
    button: { backgroundColor: '#1db954', padding: 15, borderRadius: 8, alignItems: 'center' },
    buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});