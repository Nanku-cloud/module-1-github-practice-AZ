import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../utils/theme';

function Action({ icon, value, color, onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.action}>
      <Ionicons name={icon} size={18} color={color || colors.muted} />
      {value !== undefined ? (
        <Text style={[styles.value, color ? { color } : null]}>{value}</Text>
      ) : null}
    </Pressable>
  );
}

export default function PostActions({
  id,
  replies,
  reposts,
  likes,
  views,
  liked,
  bookmarked,
  onLike,
  onBookmark,
}) {
  return (
    <View style={styles.row}>
      <Action icon="chatbubble-outline" value={replies} />
      <Action icon="repeat-outline" value={reposts} />

      {/* TODO 2: Connect the Like action from Step 3. */}
      <Action
        icon={liked ? 'heart' : 'heart-outline'}
        value={likes + (liked ? 1 : 0)}
        color={liked ? colors.like : undefined}
        onPress={() => onLike(id)}
      />

      <Action icon="stats-chart-outline" value={views >= 1000 ? `${(views / 1000).toFixed(1)}K` : views} />

      {/* TODO 3: Connect the Bookmark action from Step 4. */}
      <Action
        icon={bookmarked ? 'bookmark' : 'bookmark-outline'}
        color={bookmarked ? colors.accent : undefined}
        onPress={() => {}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    paddingRight: 8,
  },
  action: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
    minHeight: 30,
    minWidth: 34,
  },
  value: {
    color: colors.muted,
    fontSize: 12,
  },
});
