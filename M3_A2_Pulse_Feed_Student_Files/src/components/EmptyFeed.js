import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../utils/theme';

export default function EmptyFeed() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nothing here yet</Text>
      <Text style={styles.message}>
        Follow more people or switch feeds to see new posts.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 34,
    paddingTop: 70,
  },
  title: {
    color: colors.text,
    fontSize: 25,
    fontWeight: '800',
  },
  message: {
    color: colors.muted,
    fontSize: 15,
    lineHeight: 21,
    marginTop: 8,
    textAlign: 'center',
  },
});
