import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function CampusCard({
  emoji,
  title,
  description,
  status,
  accent,
  onPress,
  isSelected,
}) {
  return (
    <Pressable onPress={onPress}>
      <View
        style={[
          styles.card,
          { borderColor: isSelected ? accent : '#2A3357' },
        ]}
      >
        <Text style={styles.emoji}>{emoji}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={[styles.status, { color: accent }]}>{status}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#151B31',
    borderColor: '#2A3357',
    borderRadius: 22,
    borderWidth: 2,
    marginBottom: 16,
    padding: 20,
  },

  emoji: {
    fontSize: 34,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '900',
    marginTop: 12,
  },

  description: {
    color: '#AEB8D4',
    fontSize: 15,
    lineHeight: 22,
    marginTop: 8,
  },

  status: {
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 0.8,
    marginTop: 14,
  },
});