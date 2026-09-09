import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../utils/theme';

export default function OrderSummary({ quantity, selectedCount, total }) {
  return (
    <View style={styles.box}>
      <View style={styles.row}>
        <Text style={styles.muted}>Quantity</Text>
        <Text style={styles.value}>{quantity}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.muted}>Add-ons</Text>
        <Text style={styles.value}>{selectedCount}</Text>
      </View>
      <View style={[styles.row, styles.totalRow]}>
        <Text style={styles.totalLabel}>Total</Text>
        <Text style={styles.total}>${total.toFixed(2)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.soft,
    borderRadius: 14,
    marginHorizontal: 18,
    marginTop: 20,
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  muted: { color: colors.muted, fontSize: 14 },
  value: { color: colors.text, fontSize: 14, fontWeight: '600' },
  totalRow: {
    borderTopColor: colors.line,
    borderTopWidth: 1,
    marginBottom: 0,
    marginTop: 6,
    paddingTop: 12,
  },
  totalLabel: { color: colors.text, fontSize: 17, fontWeight: '800' },
  total: { color: colors.text, fontSize: 19, fontWeight: '800' },
});
