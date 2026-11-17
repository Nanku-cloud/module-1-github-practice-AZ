import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { SAMPLE_TRACKS } from '../data/sampleData';
import { useAppContext } from '../context/AppContext';

export default function HomeScreen() {
    const router = useRouter();
    const { username, favorites, toggleFavorite } = useAppContext();

    return (
        <ScrollView style={styles.screen} contentContainerStyle={styles.scrollContent}>
            <View style={styles.container}>
                {/* Welcome Header */}
                <View style={styles.heroCard}>
                    <Text style={styles.welcomeLabel}>WELCOME BACK, {username.toUpperCase()}</Text>
                    <Text style={styles.header}>SoundVault Music</Text>
                    <Text style={styles.subHeader}>High-Fidelity Rock & Alternative Vault</Text>

                    {/* Styled Navigation Bar */}
                    <View style={styles.navBar}>
                        <TouchableOpacity style={styles.navPillPrimary} onPress={() => router.push('/search')}>
                            <Text style={styles.navPillPrimaryText}>🔍 Search</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.navPill} onPress={() => router.push('/library')}>
                            <Text style={styles.navPillText}>♥ Library ({favorites.length})</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.navPill} onPress={() => router.push('/profile')}>
                            <Text style={styles.navPillText}>👤 Profile</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <Text style={styles.sectionTitle}>Featured Vault Tracks</Text>

                {SAMPLE_TRACKS.map((item) => {
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
                                        {item.artist} • {item.album}
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
                })}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    screen: { flex: 1, backgroundColor: '#121212' },
    scrollContent: { padding: 20, alignItems: 'center' },
    container: { width: '100%', maxWidth: 560 },

    heroCard: {
        backgroundColor: '#1a1a1a',
        padding: 20,
        borderRadius: 14,
        marginBottom: 24,
        borderWidth: 1,
        borderColor: '#2a2a2a',
    },
    welcomeLabel: { color: '#1db954', fontSize: 11, fontWeight: 'bold', letterSpacing: 1.2 },
    header: { fontSize: 28, fontWeight: 'bold', color: '#fff', marginTop: 4 },
    subHeader: { color: '#999', fontSize: 14, marginTop: 2, marginBottom: 18 },

    navBar: { flexDirection: 'row', gap: 8 },
    navPillPrimary: {
        flex: 1,
        backgroundColor: '#1db954',
        paddingVertical: 11,
        borderRadius: 20,
        alignItems: 'center',
    },
    navPillPrimaryText: { color: '#121212', fontWeight: 'bold', fontSize: 13 },
    navPill: {
        flex: 1,
        backgroundColor: '#262626',
        paddingVertical: 11,
        borderRadius: 20,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#383838',
    },
    navPillText: { color: '#fff', fontWeight: '600', fontSize: 13 },

    sectionTitle: { color: '#fff', fontSize: 18, fontWeight: 'bold', marginBottom: 12 },

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
});