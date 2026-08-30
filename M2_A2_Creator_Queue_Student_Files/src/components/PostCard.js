import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { colors, spacing } from '../utils/theme';

// Add these props inside the function parentheses:
// id, title, platform, type, status, onAdvance, onDelete
export default function PostCard() {
  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        {/* Display the platform prop below. */}
        <Text style={styles.platform}></Text>

        {/* Display the status prop and apply the matching status style. */}
        <Text style={styles.status}></Text>
      </View>

      {/* Display the title prop below. */}
      <Text style={styles.title}></Text>

      {/* Display the content type prop below. */}
      <Text style={styles.type}></Text>

      {/* Connect this button to onAdvance(id). */}
      <Pressable style={styles.primaryButton}>
        {/* Use the status prop to display the correct button text. */}
        <Text style={styles.primaryButtonText}></Text>
      </Pressable>

      {/* Show the delete button only when status is Published. */}

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 20,
    borderWidth: 1,
    padding: spacing.md,
  },

  topRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  platform: {
    color: colors.primary,
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 1.1,
    textTransform: 'uppercase',
  },

  status: {
    borderRadius: 999,
    fontSize: 11,
    fontWeight: '900',
    overflow: 'hidden',
    paddingHorizontal: 10,
    paddingVertical: 6,
  },

  title: {
    color: colors.text,
    fontSize: 21,
    fontWeight: '900',
    marginTop: 14,
  },

  type: {
    color: colors.mutedText,
    fontSize: 14,
    marginTop: 6,
  },

  primaryButton: {
    alignItems: 'center',
    backgroundColor: colors.surfaceAlt,
    borderColor: colors.border,
    borderRadius: 12,
    borderWidth: 1,
    marginTop: spacing.md,
    paddingVertical: 12,
  },

  primaryButtonText: {
    color: colors.text,
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 0.7,
  },

  deleteButton: {
    alignItems: 'center',
    marginTop: spacing.sm,
    paddingVertical: 10,
  },

  deleteButtonText: {
    color: colors.danger,
    fontSize: 12,
    fontWeight: '900',
  },
});
