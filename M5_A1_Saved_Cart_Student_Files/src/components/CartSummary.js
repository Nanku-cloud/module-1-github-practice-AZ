import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function CartSummary({ totalItems, subtotal, onClear }) {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.label}>Items</Text>
        <Text style={styles.value}>{totalItems}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.totalLabel}>Subtotal</Text>
        <Text style={styles.totalValue}>${subtotal.toFixed(2)}</Text>
      </View>
      <Text style={styles.note}>Taxes and delivery are calculated at checkout.</Text>
      <Pressable style={styles.checkout}>
        <Text style={styles.checkoutText}>Proceed to checkout</Text>
      </Pressable>
      <Pressable onPress={onClear} style={styles.clear}>
        <Text style={styles.clearText}>Clear cart</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { marginTop: 16, borderWidth: 1, borderColor: '#e5e7eb', borderRadius: 12, padding: 16, backgroundColor: '#fff' },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  label: { color: '#6b7280', fontSize: 14 },
  value: { fontWeight: '800', color: '#111827' },
  totalLabel: { fontSize: 18, fontWeight: '900', color: '#111827' },
  totalValue: { fontSize: 22, fontWeight: '900', color: '#111827' },
  note: { marginTop: 4, fontSize: 12, lineHeight: 17, color: '#6b7280' },
  checkout: { marginTop: 16, backgroundColor: '#ffd814', borderWidth: 1, borderColor: '#f3c200', borderRadius: 22, paddingVertical: 12, alignItems: 'center' },
  checkoutText: { fontWeight: '900', color: '#111827' },
  clear: { marginTop: 10, alignItems: 'center', paddingVertical: 8 },
  clearText: { color: '#2563eb', fontWeight: '700' }
});
