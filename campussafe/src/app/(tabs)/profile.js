import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../styles/theme';

export default function ProfileScreen() {
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.eyebrow}>ABOUT THE PROTOTYPE</Text>
      <Text style={styles.title}>CampusSafe</Text>
      <Text style={styles.subtitle}>
        A presentation-ready React Native prototype for learning device permissions,
        privacy-aware design, and location-assisted campus safety experiences.
      </Text>

      <View style={styles.card}>
        <View style={styles.row}>
          <Ionicons name="location-outline" size={22} color={colors.blue} />
          <View style={styles.copy}>
            <Text style={styles.cardTitle}>Foreground location</Text>
            <Text style={styles.cardText}>
              Location is requested only after a user action.
            </Text>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.row}>
          <Ionicons name="lock-closed-outline" size={22} color={colors.teal} />
          <View style={styles.copy}>
            <Text style={styles.cardTitle}>Privacy-aware</Text>
            <Text style={styles.cardText}>
              Security contact remains available without location access.
            </Text>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.row}>
          <Ionicons name="phone-portrait-outline" size={22} color={colors.gold} />
          <View style={styles.copy}>
            <Text style={styles.cardTitle}>Device tested</Text>
            <Text style={styles.cardText}>
              Location behavior should be verified on a physical phone.
            </Text>
          </View>
        </View>
      </View>

      <Text style={styles.note}>
        Course prototype • Not an official emergency response application
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.cream },
  content: { padding: 20, paddingTop: 54, paddingBottom: 40 },
  eyebrow: {
    color: colors.blue,
    fontWeight: '900',
    letterSpacing: 1.6,
    fontSize: 11,
  },
  title: { color: colors.ink, fontWeight: '900', fontSize: 34, marginTop: 5 },
  subtitle: { color: colors.muted, fontSize: 16, lineHeight: 23, marginTop: 10 },
  card: {
    marginTop: 24,
    backgroundColor: colors.paper,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 18,
  },
  row: { flexDirection: 'row', gap: 12, alignItems: 'flex-start' },
  copy: { flex: 1 },
  cardTitle: { color: colors.ink, fontWeight: '900', fontSize: 17 },
  cardText: { color: colors.muted, lineHeight: 20, marginTop: 4 },
  divider: { height: 1, backgroundColor: colors.border, marginVertical: 16 },
  note: { color: colors.muted, fontSize: 12, textAlign: 'center', marginTop: 18 },
});
