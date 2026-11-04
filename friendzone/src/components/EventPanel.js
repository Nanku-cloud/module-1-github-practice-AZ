import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../styles/theme';
import InterestChip from './InterestChip';

export default function EventPanel({ event }) {
  const [interested, setInterested] = useState(false);

  return (
    <View style={styles.card}>
      <View style={styles.top}>
        <View style={styles.iconWrap}>
          <Ionicons name="calendar-outline" size={22} color={colors.text} />
        </View>

        <View style={styles.copy}>
          <Text style={styles.title}>{event.title}</Text>
          <Text style={styles.time}>{event.time}</Text>
        </View>
      </View>

      <View style={styles.tags}>
        {event.tags.map((tag) => (
          <InterestChip key={tag} label={tag} />
        ))}
      </View>

      <View style={styles.metaRow}>
        <Text style={styles.meta}>{event.going} Going</Text>
        <Text style={styles.meta}>
          {event.friendsInterested} Friends Interested
        </Text>
      </View>

      <Pressable
        onPress={() => setInterested((value) => !value)}
        style={[styles.button, interested && styles.buttonActive]}
      >
        <Text style={styles.buttonText}>
          {interested ? 'Interested ✓' : "I'm Interested"}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 286,
    padding: 16,
    borderRadius: 22,
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: colors.border,
    marginRight: 14,
  },
  top: { flexDirection: 'row', alignItems: 'center' },
  iconWrap: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: colors.yellow,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  copy: { flex: 1 },
  title: { color: colors.text, fontSize: 16, fontWeight: '900' },
  time: { color: colors.muted, fontSize: 12, marginTop: 3 },
  tags: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 14 },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  meta: {
    color: colors.muted,
    fontSize: 11,
    fontWeight: '700',
  },
  button: {
    marginTop: 14,
    minHeight: 42,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonActive: { backgroundColor: '#EAF4FF' },
  buttonText: { color: '#4D8ED7', fontWeight: '900' },
});