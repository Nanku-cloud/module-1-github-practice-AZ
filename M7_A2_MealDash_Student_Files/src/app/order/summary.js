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

export default function OrderSummaryScreen() {
  const router = useRouter();

  return (
    <View style={styles.screen}>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>
          ✓
        </Text>
      </View>

      <Text style={styles.title}>
        Order ready to place
      </Text>

      <Text style={styles.text}>
        This is a simulated order summary for navigation practice. No purchase is being made.
      </Text>

      <Pressable
        onPress={() =>
          router.replace(
            '/(tabs)'
          )
        }
        style={styles.button}
      >
        <Text style={styles.buttonText}>
          Return Home
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 28,
  },
  badge: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#dcfce7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: '#15803d',
    fontSize: 30,
    fontWeight: '900',
  },
  title: {
    color: '#111827',
    fontSize: 26,
    fontWeight: '900',
    marginTop: 18,
  },
  text: {
    color: '#6b7280',
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 21,
    maxWidth: 430,
  },
  button: {
    marginTop: 24,
    backgroundColor: '#ef4444',
    borderRadius: 10,
    paddingHorizontal: 22,
    paddingVertical: 13,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '900',
  },
});
