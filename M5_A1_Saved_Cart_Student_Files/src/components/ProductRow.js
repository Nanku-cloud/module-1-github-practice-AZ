import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function ProductRow({ product, onAdd }) {
  return (
    <View style={styles.row}>
      <Image source={product.image} style={styles.image} />
      <View style={styles.body}>
        <Text style={styles.badge}>{product.badge}</Text>
        <Text numberOfLines={2} style={styles.name}>{product.name}</Text>
        <Text style={styles.meta}>{product.category} · ★ {product.rating} ({product.reviews})</Text>
        <View style={styles.bottomRow}>
          <Text style={styles.price}>${product.price.toFixed(2)}</Text>
          <Pressable onPress={() => onAdd(product)} style={styles.addButton}>
            <Text style={styles.addText}>Add</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', gap: 12, paddingHorizontal: 16, paddingVertical: 14, backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#e5e7eb' },
  image: { width: 118, height: 118, borderRadius: 10, backgroundColor: '#f3f4f6' },
  body: { flex: 1, minWidth: 0, justifyContent: 'space-between' },
  badge: { alignSelf: 'flex-start', fontSize: 11, fontWeight: '800', color: '#7c2d12', backgroundColor: '#ffedd5', paddingHorizontal: 7, paddingVertical: 4, borderRadius: 6 },
  name: { marginTop: 6, fontSize: 16, lineHeight: 21, fontWeight: '700', color: '#111827' },
  meta: { marginTop: 5, fontSize: 12, color: '#6b7280' },
  bottomRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 9 },
  price: { fontSize: 19, fontWeight: '900', color: '#111827' },
  addButton: { minWidth: 74, alignItems: 'center', paddingVertical: 9, paddingHorizontal: 14, borderRadius: 18, backgroundColor: '#ffd814', borderWidth: 1, borderColor: '#f3c200' },
  addText: { fontWeight: '800', color: '#111827' }
});
