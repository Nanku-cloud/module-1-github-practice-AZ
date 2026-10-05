import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function RestaurantRow({
  restaurant,
  onPress,
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.row,
        pressed && styles.pressed,
      ]}
    >
      <Image
        source={restaurant.image}
        style={styles.image}
      />

      <View style={styles.copy}>
        <Text style={styles.name}>
          {restaurant.name}
        </Text>

        <Text style={styles.meta}>
          {restaurant.category} • {restaurant.eta}
        </Text>

        <Text style={styles.meta}>
          ★ {restaurant.rating} • ${restaurant.deliveryFee.toFixed(2)} delivery
        </Text>

        <Text
          numberOfLines={2}
          style={styles.description}
        >
          {restaurant.description}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 12,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  pressed: {
    opacity: 0.72,
  },
  image: {
    width: 118,
    height: 92,
    borderRadius: 10,
    backgroundColor: '#f3f4f6',
  },
  copy: {
    flex: 1,
  },
  name: {
    color: '#111827',
    fontSize: 17,
    fontWeight: '900',
  },
  meta: {
    color: '#6b7280',
    marginTop: 4,
    fontSize: 12,
  },
  description: {
    color: '#374151',
    marginTop: 7,
    lineHeight: 17,
    fontSize: 12,
  },
});
