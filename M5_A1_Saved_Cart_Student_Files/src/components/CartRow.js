import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function CartRow({ item, onDecrease, onIncrease, onRemove }) {
  return (
    <View style={styles.row}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.body}>
        <Text numberOfLines={2} style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>

        <View style={styles.actions}>
          <View style={styles.qty}>
            <Pressable onPress={() => onDecrease(item.id)} style={styles.qtyBtn}><Text style={styles.qtyText}>−</Text></Pressable>
            <Text style={styles.qtyValue}>{item.quantity}</Text>
            <Pressable onPress={() => onIncrease(item.id)} style={styles.qtyBtn}><Text style={styles.qtyText}>+</Text></Pressable>
          </View>

          <Pressable onPress={() => onRemove(item.id)}>
            <Text style={styles.remove}>Remove</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', gap: 12, paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: '#e5e7eb' },
  image: { width: 86, height: 86, borderRadius: 9, backgroundColor: '#f3f4f6' },
  body: { flex: 1 },
  name: { fontSize: 15, fontWeight: '700', color: '#111827', lineHeight: 20 },
  price: { marginTop: 5, fontSize: 17, fontWeight: '900', color: '#111827' },
  actions: { marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  qty: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#d1d5db', borderRadius: 20, overflow: 'hidden' },
  qtyBtn: { width: 34, height: 34, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f9fafb' },
  qtyText: { fontSize: 18, fontWeight: '800' },
  qtyValue: { minWidth: 32, textAlign: 'center', fontWeight: '800' },
  remove: { fontSize: 13, fontWeight: '700', color: '#2563eb' }
});
