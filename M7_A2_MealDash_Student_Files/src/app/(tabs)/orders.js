import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function OrdersScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>
        Orders
      </Text>

      <View style={styles.panel}>
        <Text style={styles.panelTitle}>
          No active orders
        </Text>

        <Text style={styles.text}>
          Your simulated order summary will be reached through the Cart flow.
        </Text>
      </View>
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
  },
  panel: {
    marginTop: 18,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e5e7eb',
    paddingVertical: 18,
  },
  panelTitle: {
    color: '#111827',
    fontSize: 17,
    fontWeight: '800',
  },
  text: {
    color: '#6b7280',
    marginTop: 6,
    lineHeight: 20,
  },
});
