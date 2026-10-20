import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { colors } from '../styles/theme';

export default function GameCard({
  game,
  onPress,
  width = 170,
}) {
  return (
    <Pressable
      onPress={() => onPress?.(game)}
      style={({ pressed }) => [
        styles.card,
        { width },
        pressed && styles.pressed,
      ]}
    >
      <Image
        source={game.cover}
        style={[
          styles.cover,
          {
            width,
            height: width * 1.28,
          },
        ]}
      />

      <View style={styles.copy}>
        <Text numberOfLines={1} style={styles.title}>
          {game.title}
        </Text>

        <Text numberOfLines={1} style={styles.meta}>
          {game.genre} • {game.status}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    marginRight: 14,
  },
  pressed: {
    opacity: 0.82,
  },
  cover: {
    borderRadius: 10,
    backgroundColor: colors.panel2,
  },
  copy: {
    paddingTop: 9,
  },
  title: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '800',
  },
  meta: {
    color: colors.muted,
    fontSize: 13,
    marginTop: 3,
  },
});
