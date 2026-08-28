import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

// Add these props inside the function parentheses:
// image, name, category, price, quantity, accent, saved, onToggleSaved
export default function ProductCard() {
  return (
    <View style={styles.card}>
      {/* Display the product image prop below. */}
      <Image style={styles.image} />

      <View style={styles.body}>
        {/* Display the category prop below. */}
        <Text style={styles.category}></Text>

        {/* Display the product name prop below. */}
        <Text style={styles.name}></Text>

        <View style={styles.metaRow}>
          {/* Display the formatted price below. */}
          <Text style={styles.price}></Text>

          {/* Display the stock label below using the quantity prop. */}
          <Text style={styles.stock}></Text>
        </View>

        {/* Connect the Pressable below to onToggleSaved. */}
        <Pressable style={styles.saveButton}>
          {/* Display SAVE ITEM or SAVED based on the saved prop. */}
          <Text style={styles.saveButtonText}></Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#151821',
    borderColor: '#272B38',
    borderRadius: 24,
    borderWidth: 1,
    marginBottom: 18,
    overflow: 'hidden',
  },

  image: {
    height: 210,
    width: '100%',
  },

  body: {
    padding: 18,
  },

  category: {
    color: '#8E95A8',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },

  name: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '900',
    marginTop: 6,
  },

  metaRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 14,
  },

  price: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
  },

  stock: {
    color: '#AAB2C8',
    fontSize: 12,
    fontWeight: '800',
  },

  saveButton: {
    alignItems: 'center',
    borderColor: '#3E4560',
    borderRadius: 14,
    borderWidth: 1,
    marginTop: 16,
    paddingVertical: 12,
  },

  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 1,
  },
});
