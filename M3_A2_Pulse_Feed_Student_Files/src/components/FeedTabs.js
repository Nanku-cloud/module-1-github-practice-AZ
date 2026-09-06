import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../utils/theme';

export default function FeedTabs({ selectedFeed, onChangeFeed }) {
  return (
    <View style={styles.tabs}>
      {['forYou', 'following'].map((feed) => {
        const active = selectedFeed === feed;
        const label = feed === 'forYou' ? 'For You' : 'Following';

        return (
          <Pressable
            key={feed}
            onPress={() => onChangeFeed(feed)}
            style={styles.tab}
          >
            <Text style={[styles.label, active && styles.activeLabel]}>
              {label}
            </Text>
            {active ? <View style={styles.indicator} /> : null}
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabs: {
    backgroundColor: colors.background,
    borderBottomColor: colors.line,
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  tab: {
    alignItems: 'center',
    flex: 1,
    height: 52,
    justifyContent: 'center',
    position: 'relative',
  },
  label: {
    color: colors.muted,
    fontSize: 15,
    fontWeight: '600',
  },
  activeLabel: {
    color: colors.text,
  },
  indicator: {
    backgroundColor: colors.accent,
    borderRadius: 2,
    bottom: 0,
    height: 4,
    position: 'absolute',
    width: 58,
  },
});
