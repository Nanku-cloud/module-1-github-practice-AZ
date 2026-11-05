import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { router } from 'expo-router';

import PhotoTile from '../components/PhotoTile';
import { photos } from '../data/photoData';
import { colors } from '../styles/theme';

export default function GalleryScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.brand}>SnapView</Text>
        <Text style={styles.tagline}>
          Touch. Explore. Remember.
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.hero}>
          <Text style={styles.heroTitle}>
            Your interactive gallery
          </Text>

          <Text style={styles.heroText}>
            Tap a photo to open it. In the viewer, use swipe,
            pinch, drag, double tap, and long press.
          </Text>
        </View>

        <View style={styles.grid}>
          {photos.map((photo, index) => (
            <PhotoTile
              key={photo.id}
              photo={photo}
              onPress={() =>
                router.push({
                  pathname: '/viewer',
                  params: { index: String(index) },
                })
              }
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  header: {
    paddingHorizontal: 18,
    paddingVertical: 16,
    backgroundColor: colors.panel,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  brand: {
    color: colors.text,
    fontSize: 26,
    fontWeight: '900',
  },
  tagline: {
    color: colors.muted,
    marginTop: 2,
    fontSize: 12,
  },
  content: {
    padding: 18,
    paddingBottom: 60,
  },
  hero: {
    backgroundColor: '#EEF5FF',
    borderRadius: 22,
    padding: 18,
    marginBottom: 18,
  },
  heroTitle: {
    color: colors.text,
    fontSize: 22,
    fontWeight: '900',
  },
  heroText: {
    color: colors.muted,
    marginTop: 6,
    lineHeight: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
