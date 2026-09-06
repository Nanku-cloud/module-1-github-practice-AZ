import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../utils/theme';

export default function FeedHeader() {
  return (
    <View style={styles.header}>
      <Image
        accessibilityLabel="Your profile"
        source={require('../assets/images/you.png')}
        style={styles.avatar}
      />

      <Text style={styles.brand}>Pulse</Text>

      <Ionicons name="settings-outline" size={22} color={colors.text} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    backgroundColor: colors.background,
    borderBottomColor: colors.line,
    borderBottomWidth: 1,
    flexDirection: 'row',
    height: 54,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  avatar: {
    borderRadius: 17,
    height: 34,
    width: 34,
  },
  brand: {
    color: colors.text,
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: -0.5,
  },
});
