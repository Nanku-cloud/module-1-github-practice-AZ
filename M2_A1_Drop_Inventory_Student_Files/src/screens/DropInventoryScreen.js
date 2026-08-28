import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import ProductCard from '../components/ProductCard';
import products from '../data/products';

export default function DropInventoryScreen() {
  // Keep the ids of saved products inside this array.
  const [savedIds, setSavedIds] = useState([]);

  // Add the toggleSaved function from README.md below.


  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
    >
      <View style={styles.hero}>
        <Text style={styles.eyebrow}>MODULE 2 / PRODUCT DROP</Text>
        <Text style={styles.title}>DROP INVENTORY</Text>
        <Text style={styles.subtitle}>
          Track product drops, stock levels, and saved items.
        </Text>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{products.length}</Text>
          <Text style={styles.statLabel}>PRODUCTS</Text>
        </View>

        <View style={styles.statCard}>
          {/* Display the number of saved product ids below. */}
          <Text style={styles.statValue}></Text>
          <Text style={styles.statLabel}>SAVED</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Latest Drop</Text>

      {/* Use products.map() below to display one ProductCard for each product. */}
      <View>


      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#0B0D12',
    flex: 1,
  },

  content: {
    padding: 22,
    paddingBottom: 48,
  },

  hero: {
    borderBottomColor: '#242836',
    borderBottomWidth: 1,
    marginBottom: 20,
    paddingBottom: 22,
  },

  eyebrow: {
    color: '#7C88FF',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 1.6,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 36,
    fontWeight: '900',
    letterSpacing: -1,
    marginTop: 8,
  },

  subtitle: {
    color: '#8E95A8',
    fontSize: 15,
    lineHeight: 22,
    marginTop: 8,
  },

  statsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },

  statCard: {
    backgroundColor: '#151821',
    borderColor: '#272B38',
    borderRadius: 18,
    borderWidth: 1,
    flex: 1,
    padding: 16,
  },

  statValue: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '900',
  },

  statLabel: {
    color: '#8E95A8',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1.3,
    marginTop: 3,
  },

  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '900',
    marginBottom: 14,
  },
});
