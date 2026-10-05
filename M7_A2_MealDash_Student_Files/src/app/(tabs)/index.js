import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  useRouter,
} from 'expo-router';

import RestaurantRow from '../../components/RestaurantRow';
import { restaurants } from '../../data/restaurants';

export default function HomeScreen() {
  const router = useRouter();

  function openRestaurant(
    restaurant
  ) {
    // TODO 2:
    // Navigate to:
    // /restaurant/[id]
    //
    // Pass:
    // id: restaurant.id
  }

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.brand}>
          MealDash
        </Text>

        <Text style={styles.title}>
          What are you craving?
        </Text>

        <Text style={styles.sub}>
          Choose a restaurant to view details.
        </Text>
      </View>

      <FlatList
        data={restaurants}
        keyExtractor={(item) =>
          item.id
        }
        contentContainerStyle={
          styles.list
        }
        renderItem={({ item }) => (
          <RestaurantRow
            restaurant={item}
            onPress={() =>
              openRestaurant(item)
            }
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 8,
  },
  brand: {
    color: '#ef4444',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 1.2,
  },
  title: {
    color: '#111827',
    fontSize: 28,
    fontWeight: '900',
    marginTop: 5,
  },
  sub: {
    color: '#6b7280',
    marginTop: 5,
  },
  list: {
    paddingHorizontal: 18,
    paddingBottom: 28,
  },
});
