import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MarketHeader({ search, onChangeSearch, cartCount }) {
  return (
    <View style={styles.header}>
      <View style={styles.topRow}>
        <Text style={styles.brand}>Northstar</Text>
        <View style={styles.cartPill}>
          <Ionicons name="bag-outline" size={18} color="#111827" />
          <Text style={styles.cartCount}>{cartCount}</Text>
        </View>
      </View>

      <View style={styles.searchWrap}>
        <Ionicons name="search" size={18} color="#6b7280" />
        <TextInput
          value={search}
          onChangeText={onChangeSearch}
          placeholder="Search products"
          placeholderTextColor="#9ca3af"
          style={styles.searchInput}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { backgroundColor: '#ffffff', paddingHorizontal: 18, paddingTop: 12, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: '#e5e7eb' },
  topRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 },
  brand: { fontSize: 24, fontWeight: '900', letterSpacing: -0.8, color: '#111827' },
  cartPill: { minWidth: 44, height: 36, paddingHorizontal: 10, borderRadius: 18, backgroundColor: '#f3f4f6', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6 },
  cartCount: { fontWeight: '800', color: '#111827' },
  searchWrap: { height: 44, borderRadius: 12, backgroundColor: '#f3f4f6', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, gap: 8 },
  searchInput: { flex: 1, fontSize: 15, color: '#111827', paddingVertical: 0 }
});
