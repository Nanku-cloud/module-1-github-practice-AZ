import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { colors, spacing } from '../utils/theme';

const filterOptions = ['All', 'Draft', 'Scheduled', 'Published'];

export default function StatusFilter({
  selectedFilter,
  onChangeFilter,
}) {
  return (
    <View style={styles.container}>
      {/* Use filterOptions.map() to display the filter buttons below. */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    marginVertical: spacing.lg,
  },

  button: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 999,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 9,
  },

  activeButton: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },

  text: {
    color: colors.mutedText,
    fontSize: 12,
    fontWeight: '800',
  },

  activeText: {
    color: '#FFFFFF',
  },
});
