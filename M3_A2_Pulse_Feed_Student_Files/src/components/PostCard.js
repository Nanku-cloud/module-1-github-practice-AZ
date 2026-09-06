import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PostActions from './PostActions';
import { colors } from '../utils/theme';

export default function PostCard({
  id,
  displayName,
  username,
  time,
  content,
  avatar,
  imageSource,
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
    <View style={styles.post}>
      <Image
        accessibilityLabel={`${displayName} profile`}
        source={avatar}
        style={styles.avatar}
      />

      <View style={styles.body}>
        <View style={styles.metaRow}>
          <Text style={styles.displayName} numberOfLines={1}>
            {displayName}
          </Text>
          <Text style={styles.meta} numberOfLines={1}>
            @{username} · {time}
          </Text>
          <Ionicons name="ellipsis-horizontal" size={18} color={colors.muted} />
        </View>

        <Text style={styles.content}>{content}</Text>

        {imageSource ? (
          <Image
            accessibilityLabel="Post media"
            resizeMode="cover"
            source={imageSource}
            style={styles.media}
          />
        ) : null}

        <PostActions
          id={id}
          replies={replies}
          reposts={reposts}
          likes={likes}
          views={views}
          liked={liked}
          bookmarked={bookmarked}
          onLike={onLike}
          onBookmark={onBookmark}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  post: {
    backgroundColor: colors.background,
    borderBottomColor: colors.line,
    borderBottomWidth: 1,
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  avatar: {
    borderRadius: 22,
    height: 44,
    width: 44,
  },
  body: {
    flex: 1,
    marginLeft: 11,
  },
  metaRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
  },
  displayName: {
    color: colors.text,
    flexShrink: 1,
    fontSize: 15,
    fontWeight: '700',
  },
  meta: {
    color: colors.muted,
    flex: 1,
    fontSize: 14,
  },
  content: {
    color: colors.text,
    fontSize: 15,
    lineHeight: 20,
    marginTop: 3,
  },
  media: {
    borderColor: colors.line,
    borderRadius: 16,
    borderWidth: 1,
    height: 230,
    marginTop: 12,
    width: '100%',
  },
});
