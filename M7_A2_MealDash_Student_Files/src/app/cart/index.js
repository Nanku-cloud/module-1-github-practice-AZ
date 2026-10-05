import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  useRouter,
} from 'expo-router';

export default function CartScreen() {
  const router = useRouter();

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>
        Your Cart
      </Text>

      <View style={styles.row}>
        <Text style={styles.item}>
          Signature Meal
        </Text>
        <Text style={styles.price}>
          $12.99
        </Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.item}>
          Delivery Fee
        </Text>
        <Text style={styles.price}>
          $1.99
        </Text>
      </View>

      <View style={styles.totalRow}>
        <Text style={styles.totalLabel}>
          Total
        </Text>
        <Text style={styles.total}>
          $14.98
        </Text>
      </View>

      <Pressable
        onPress={() =>
          router.push(
            '/order/summary'
          )
        }
        style={styles.button}
      >
        <Text style={styles.buttonText}>
          Continue to Order Summary
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  title: {
    color: '#111827',
    fontSize: 28,
    fontWeight: '900',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 13,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  item: {
    color: '#374151',
  },
  price: {
    color: '#111827',
    fontWeight: '800',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 18,
  },
  totalLabel: {
    color: '#111827',
    fontSize: 18,
    fontWeight: '900',
  },
  total: {
    color: '#111827',
    fontSize: 18,
    fontWeight: '900',
  },
  button: {
    backgroundColor: '#ef4444',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '900',
  },
});
