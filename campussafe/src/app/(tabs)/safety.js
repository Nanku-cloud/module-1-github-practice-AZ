import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../styles/theme';

const items = [
  ['1', 'Stay aware', 'Keep your attention on your surroundings when moving across campus.'],
  ['2', 'Use official channels', 'Use your institution’s published security and emergency resources.'],
  ['3', 'Share intentionally', 'Only share location when it supports a task you have chosen.'],
  ['4', 'Have a fallback', 'Know what you will do if GPS, Wi-Fi, or mobile service is unavailable.'],
];

export default function SafetyScreen() {
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.eyebrow}>SAFETY</Text>
      <Text style={styles.title}>Good technology still needs good judgment.</Text>
      <Text style={styles.intro}>
        CampusSafe demonstrates how thoughtful interface design can support
        safety without creating unnecessary surveillance.
      </Text>

      <View style={styles.cardList}>
        {items.map(([num, title, text]) => (
          <View key={num} style={styles.card}>
            <View style={styles.number}>
              <Text style={styles.numberText}>{num}</Text>
            </View>
            <View style={styles.copy}>
              <Text style={styles.cardTitle}>{title}</Text>
              <Text style={styles.cardText}>{text}</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.footerCard}>
        <Ionicons name="school-outline" size={24} color={colors.blue} />
        <Text style={styles.footerText}>
          This classroom app is a learning prototype and should not be represented
          as an official institutional emergency system.
        </Text>
      </View>
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
  title: {
    color: colors.ink,
    fontSize: 30,
    lineHeight: 35,
    fontWeight: '900',
    marginTop: 5,
  },
  intro: { color: colors.muted, lineHeight: 22, fontSize: 16, marginTop: 10 },
  cardList: { marginTop: 22, gap: 12 },
  card: {
    backgroundColor: colors.paper,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 20,
    padding: 17,
    flexDirection: 'row',
    gap: 13,
  },
  number: {
    width: 38,
    height: 38,
    borderRadius: 13,
    backgroundColor: colors.ink,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: { color: colors.paper, fontWeight: '900' },
  copy: { flex: 1 },
  cardTitle: { color: colors.ink, fontWeight: '900', fontSize: 17 },
  cardText: { color: colors.muted, lineHeight: 20, marginTop: 4 },
  footerCard: {
    marginTop: 18,
    backgroundColor: colors.sky,
    borderRadius: 20,
    padding: 18,
    flexDirection: 'row',
    gap: 12,
  },
  footerText: { color: colors.navy, flex: 1, lineHeight: 20, fontWeight: '700' },
});
