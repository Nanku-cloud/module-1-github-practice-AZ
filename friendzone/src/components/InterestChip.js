import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../styles/theme';

export default function InterestChip({ label, shared = false }) {
  return (
    <View style={[styles.chip, shared && styles.sharedChip]}>
      <Text style={[styles.text, shared && styles.sharedText]}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: '#F4F6FA',
    borderWidth: 1,
    borderColor: colors.border,
    marginRight: 7,
    marginBottom: 7,
  },
  sharedChip: {
    backgroundColor: '#E9FBF4',
    borderColor: '#C8F1E1',
  },
  text: {
    color: colors.text,
    fontSize: 12,
    fontWeight: '700',
  },
  sharedText: {
    color: '#2F8A71',
  },
});