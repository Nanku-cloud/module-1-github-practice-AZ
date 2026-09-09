import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../utils/theme';

export default function QuantityControl({ quantity, onDecrease, onIncrease }) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>Quantity</Text>
      <View style={styles.controls}>
        <Pressable
          disabled={quantity === 1}
          onPress={onDecrease}
          style={[styles.button, quantity === 1 && styles.disabled]}
        >
          <Ionicons name="remove" size={18} color={colors.text} />
        </Pressable>

        <Text style={styles.quantity}>{quantity}</Text>

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
    marginTop: 20,
    paddingHorizontal: 18,
    paddingTop: 18,
  },
  label: {
    color: colors.text,
    fontSize: 17,
    fontWeight: '700',
  },
  controls: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 14,
  },
  button: {
    alignItems: 'center',
    backgroundColor: colors.soft,
    borderColor: colors.line,
    borderRadius: 20,
    borderWidth: 1,
    height: 40,
    justifyContent: 'center',
    width: 40,
  },
  disabled: { opacity: 0.35 },
  quantity: {
    color: colors.text,
    fontSize: 17,
    fontWeight: '700',
    minWidth: 24,
    textAlign: 'center',
  },
});
