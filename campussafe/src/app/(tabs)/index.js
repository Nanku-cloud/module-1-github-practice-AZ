import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../styles/theme';

const quickItems = [
  {
    icon: 'location-outline',
    label: 'My Location',
    text: 'Identify your position only when you choose to.',
  },
  {
    icon: 'shield-checkmark-outline',
    label: 'Security Access',
    text: 'Keep assistance options visible even without GPS.',
  },
  {
    icon: 'walk-outline',
    label: 'Safe Walk',
    text: 'Review escort and arrival check-in options.',
  },
];

export default function HomeScreen() {
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.hero}>
        <View style={styles.brandRow}>
          <View style={styles.brandIcon}>
            <Ionicons name="shield-checkmark" size={22} color={colors.paper} />
          </View>
          <Text style={styles.brand}>CAMPUSSAFE</Text>
        </View>

        <Text style={styles.heroTitle}>
          Safety tools that keep the user in control.
        </Text>
        <Text style={styles.heroText}>
          CampusSafe is a classroom demonstration of responsible device permissions,
          location awareness, and clear assistance options.
        </Text>

        <View style={styles.statusStrip}>
          <Ionicons name="lock-closed-outline" size={17} color={colors.success} />
          <Text style={styles.statusText}>
            Foreground location only • No background tracking
          </Text>
        </View>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionEyebrow}>TODAY</Text>
        <Text style={styles.sectionTitle}>Your safety dashboard</Text>
        <Text style={styles.sectionText}>
          The interface is designed to remain useful whether location is granted,
          denied, or temporarily unavailable.
        </Text>
      </View>

      <View style={styles.quickGrid}>
        {quickItems.map((item) => (
          <View key={item.label} style={styles.quickCard}>
            <View style={styles.iconCircle}>
              <Ionicons name={item.icon} size={22} color={colors.blue} />
            </View>
            <Text style={styles.quickTitle}>{item.label}</Text>
            <Text style={styles.quickText}>{item.text}</Text>
          </View>
        ))}
      </View>

      <View style={styles.infoCard}>
        <View style={styles.infoIcon}>
          <Ionicons name="information-circle-outline" size={24} color={colors.gold} />
        </View>
        <View style={styles.infoCopy}>
          <Text style={styles.infoTitle}>Presentation-ready concept</Text>
          <Text style={styles.infoText}>
            This app demonstrates how a mobile experience can combine privacy,
            permission states, location feedback, and campus assistance without
            pretending to replace official emergency systems.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.cream },
  content: { padding: 20, paddingTop: 54, paddingBottom: 40 },
  hero: {
    backgroundColor: colors.ink,
    borderRadius: 28,
    padding: 24,
  },
  brandRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  brandIcon: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  brand: {
    color: colors.paper,
    fontWeight: '900',
    letterSpacing: 1.7,
    fontSize: 13,
  },
  heroTitle: {
    color: colors.paper,
    fontWeight: '900',
    fontSize: 32,
    lineHeight: 37,
    marginTop: 22,
  },
  heroText: {
    color: '#D2DEEA',
    fontSize: 16,
    lineHeight: 23,
    marginTop: 12,
  },
  statusStrip: {
    marginTop: 20,
    backgroundColor: '#EDF8F3',
    borderRadius: 14,
    paddingVertical: 11,
    paddingHorizontal: 13,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  statusText: { color: colors.success, fontWeight: '800', flex: 1 },
  sectionHeader: { marginTop: 28, marginBottom: 14 },
  sectionEyebrow: {
    color: colors.blue,
    fontSize: 11,
    letterSpacing: 1.6,
    fontWeight: '900',
  },
  sectionTitle: {
    color: colors.ink,
    fontSize: 24,
    fontWeight: '900',
    marginTop: 4,
  },
  sectionText: {
    color: colors.muted,
    lineHeight: 21,
    marginTop: 7,
  },
  quickGrid: { gap: 12 },
  quickCard: {
    backgroundColor: colors.paper,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 18,
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: colors.sky,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quickTitle: {
    color: colors.ink,
    fontSize: 18,
    fontWeight: '900',
    marginTop: 12,
  },
  quickText: {
    color: colors.muted,
    lineHeight: 20,
    marginTop: 5,
  },
  infoCard: {
    marginTop: 20,
    backgroundColor: colors.goldSoft,
    borderRadius: 20,
    padding: 18,
    flexDirection: 'row',
    gap: 12,
  },
  infoIcon: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: colors.paper,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoCopy: { flex: 1 },
  infoTitle: { color: colors.ink, fontWeight: '900', fontSize: 16 },
  infoText: { color: colors.muted, lineHeight: 20, marginTop: 5 },
});
