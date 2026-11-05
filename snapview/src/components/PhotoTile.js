import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../styles/theme';

export default function PhotoTile({ photo, onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.card}>
      <Image source={photo.image} style={styles.image} />
      <View style={styles.copy}>
        <Text style={styles.title}>{photo.title}</Text>
        <Text style={styles.subtitle}>{photo.subtitle}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%',
    borderRadius: 18,
    overflow: 'hidden',
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 14,
  },
  image: {
    width: '100%',
    aspectRatio: 0.85,
  },
  copy: {
    padding: 11,
  },
  title: {
    color: colors.text,
    fontWeight: '900',
  },
  subtitle: {
    color: colors.muted,
    fontSize: 12,
    marginTop: 3,
  },
});
