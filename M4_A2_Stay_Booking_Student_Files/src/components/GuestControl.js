import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../utils/theme';

export default function GuestControl({ count, onDecrease, onIncrease }) {
  return (
    <View style={styles.row}>
      <View>
        <Text style={styles.label}>Guests</Text>
        <Text style={styles.helper}>How many people are staying?</Text>
      </View>

      <View style={styles.controls}>
        <Pressable
          disabled={count === 1}
          onPress={onDecrease}
          style={[styles.button, count === 1 && styles.disabled]}
        >
          <Ionicons name="remove" size={18} color={colors.text} />
        </Pressable>
        <Text style={styles.count}>{count}</Text>
        <Pressable onPress={onIncrease} style={styles.button}>
          <Ionicons name="add" size={18} color={colors.text} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    alignItems: 'center',
    borderTopColor: colors.line,
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 18,
  },
  label: { color: colors.text, fontSize: 16, fontWeight: '700' },
  helper: { color: colors.muted, fontSize: 13, marginTop: 3 },
  controls: { alignItems: 'center', flexDirection: 'row', gap: 12 },
  button: {
    alignItems: 'center',
    borderColor: colors.line,
    borderRadius: 19,
    borderWidth: 1,
    height: 38,
    justifyContent: 'center',
    width: 38,
  },
  disabled: { opacity: 0.35 },
  count: { color: colors.text, fontSize: 16, fontWeight: '700', minWidth: 20, textAlign: 'center' },
});
