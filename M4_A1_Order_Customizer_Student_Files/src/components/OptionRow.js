import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../utils/theme';

export default function OptionRow({ label, price, selected, onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.row}>
      <View>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.price}>+${price.toFixed(2)}</Text>
      </View>
      <Ionicons
        name={selected ? 'checkmark-circle' : 'ellipse-outline'}
        size={24}
        color={selected ? colors.accent : colors.muted}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    alignItems: 'center',
    borderBottomColor: colors.line,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  label: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '600',
  },
  price: {
    color: colors.muted,
    fontSize: 13,
    marginTop: 3,
  },
});
