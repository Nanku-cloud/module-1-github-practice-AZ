import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { colors } from '../styles/theme';

export default function LibraryScreen() {
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={
        styles.content
      }
    >
      <Text style={styles.eyebrow}>
        LIBRARY
      </Text>

      <Text style={styles.title}>
        Cloud Game Collection
      </Text>

      <Text style={styles.text}>
        This screen is ready for your
        Firestore CRUD work. Keep your
        database logic inside the service
        files instead of rebuilding the UI.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>
          Database-ready structure
        </Text>

        <Text style={styles.cardText}>
          Firebase:
          src/services/gameRepository.js
          {'\n\n'}
          SQLite:
          src/services/sqliteGames.js
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  content: {
    padding: 26,
    paddingTop: 58,
  },
  eyebrow: {
    color: colors.accent,
    fontWeight: '900',
    letterSpacing: 1.4,
    fontSize: 11,
  },
  title: {
    color: colors.text,
    fontSize: 32,
    fontWeight: '900',
    marginTop: 5,
  },
  text: {
    color: colors.muted,
    lineHeight: 22,
    fontSize: 16,
    marginTop: 10,
    maxWidth: 720,
  },
  card: {
    marginTop: 24,
    backgroundColor: colors.panel,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 16,
    padding: 20,
    maxWidth: 720,
  },
  cardTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '900',
  },
  cardText: {
    color: colors.muted,
    lineHeight: 21,
    marginTop: 7,
  },
});
