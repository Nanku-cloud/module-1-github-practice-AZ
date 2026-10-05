import React, {
  useState,
} from 'react';

import {
  FlatList,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

import {
  useRouter,
} from 'expo-router';

import RestaurantRow from '../../components/RestaurantRow';
import { restaurants } from '../../data/restaurants';

export default function SearchScreen() {
  const router = useRouter();

  const [search, setSearch] =
    useState('');

  const filtered =
    restaurants.filter(
      (restaurant) =>
        restaurant.name
          .toLowerCase()
          .includes(
            search
              .trim()
              .toLowerCase()
          ) ||
        restaurant.category
          .toLowerCase()
          .includes(
            search
              .trim()
              .toLowerCase()
          )
    );

  return (
    <View style={styles.screen}>
      <TextInput
        value={search}
        onChangeText={setSearch}
        placeholder="Search restaurants or food"
        style={styles.input}
      />

      <FlatList
        data={filtered}
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
              router.push({
                pathname:
                  '/restaurant/[id]',
                params: {
                  id: item.id,
                },
              })
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
    paddingTop: 16,
  },
  input: {
    marginHorizontal: 18,
    height: 48,
    borderRadius: 10,
    backgroundColor: '#f3f4f6',
    paddingHorizontal: 14,
    fontSize: 15,
  },
  list: {
    paddingHorizontal: 18,
    paddingBottom: 28,
  },
});
