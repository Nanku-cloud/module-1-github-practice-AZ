import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  useLocalSearchParams,
  useRouter,
} from 'expo-router';

import {
  restaurants,
} from '../../data/restaurants';

export default function RestaurantDetailsScreen() {
  const router = useRouter();

  // TODO 3:
  // Read the dynamic route parameter named "id".
  const id = '';

  // TODO 4:
  // Find the restaurant whose item.id matches id.
  const restaurant = null;

  if (!restaurant) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorTitle}>
          Restaurant not loaded yet.
        </Text>
        <Text style={styles.errorText}>
          Complete TODO 3 and TODO 4.
        </Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.screen}>
      <Image
        source={restaurant.image}
        style={styles.hero}
      />

      <View style={styles.copy}>
        <Text style={styles.name}>
          {restaurant.name}
        </Text>

        <Text style={styles.meta}>
          ★ {restaurant.rating} • {restaurant.eta} • ${restaurant.deliveryFee.toFixed(2)} delivery
        </Text>

        <Text style={styles.description}>
          {restaurant.description}
        </Text>

        <View style={styles.menuBox}>
          <Text style={styles.menuTitle}>
            Popular Items
          </Text>
          <Text style={styles.menuItem}>
            Signature Meal • $12.99
          </Text>
          <Text style={styles.menuItem}>
            Combo Meal • $15.49
          </Text>
          <Text style={styles.menuItem}>
            House Drink • $3.49
          </Text>
        </View>

        <Pressable
          onPress={() =>
            router.push('/cart')
          }
          style={styles.button}
        >
          <Text style={styles.buttonText}>
            View Cart
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 28,
    backgroundColor: '#ffffff',
  },
  errorTitle: {
    color: '#111827',
    fontSize: 21,
    fontWeight: '900',
  },
  errorText: {
    color: '#6b7280',
    marginTop: 8,
  },
  hero: {
    width: '100%',
    height: 260,
    resizeMode: 'cover',
  },
  copy: {
    padding: 20,
  },
  name: {
    color: '#111827',
    fontSize: 28,
    fontWeight: '900',
  },
  meta: {
    color: '#6b7280',
    marginTop: 7,
    fontWeight: '700',
  },
  description: {
    color: '#374151',
    marginTop: 12,
    lineHeight: 21,
  },
  menuBox: {
    marginTop: 24,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e5e7eb',
    paddingVertical: 16,
  },
  menuTitle: {
    color: '#111827',
    fontSize: 18,
    fontWeight: '900',
    marginBottom: 10,
  },
  menuItem: {
    color: '#374151',
    paddingVertical: 7,
  },
  button: {
    marginTop: 20,
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
