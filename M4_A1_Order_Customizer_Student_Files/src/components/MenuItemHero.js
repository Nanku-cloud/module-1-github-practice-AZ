import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors } from '../utils/theme';

export default function MenuItemHero({ name, description, price, imageSource }) {
  return (
    <View>
      <Image source={imageSource} resizeMode="cover" style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>${price.toFixed(2)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 240,
    width: '100%',
  },
  content: {
    paddingHorizontal: 18,
    paddingTop: 18,
  },
  name: {
    color: colors.text,
    fontSize: 25,
    fontWeight: '800',
  },
  description: {
    color: colors.muted,
    fontSize: 15,
    lineHeight: 21,
    marginTop: 8,
  },
  price: {
    color: colors.text,
    fontSize: 20,
    fontWeight: '700',
    marginTop: 10,
  },
});
