import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../utils/theme';

export default function BottomNavigation() {
  const items = [
    ['home', 'home-outline'],
    ['search', 'search-outline'],
    ['create', 'add-circle-outline'],
    ['notifications', 'notifications-outline'],
    ['messages', 'mail-outline'],
  ];

  return (
    <View style={styles.nav}>
      {items.map(([key, icon], index) => (
        <Ionicons
          key={key}
          name={index === 0 ? 'home' : icon}
          size={25}
          color={colors.text}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    alignItems: 'center',
    backgroundColor: colors.background,
    borderTopColor: colors.line,
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 58,
    justifyContent: 'space-around',
    paddingHorizontal: 12,
  },
});
