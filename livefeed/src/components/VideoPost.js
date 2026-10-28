import React, { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useEvent } from 'expo';
import { useVideoPlayer, VideoView } from 'expo-video';

import { colors } from '../styles/theme';

export default function VideoPost({ item }) {
  const [liked, setLiked] = useState(false);

  const player = useVideoPlayer(item.video, (instance) => {
    instance.loop = true;
  });

  const { isPlaying } = useEvent(
    player,
    'playingChange',
    { isPlaying: player.playing }
  );

  function togglePlayback() {
    if (isPlaying) {
      player.pause();
    } else {
      player.play();
    }
  }

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image source={item.avatar} style={styles.avatar} />

        <View style={styles.headerCopy}>
          <View style={styles.nameRow}>
            <Text style={styles.username}>{item.username}</Text>
            <View style={styles.liveBadge}>
              <Text style={styles.liveText}>LIVE</Text>
            </View>
          </View>

          <Text style={styles.time}>{item.time} • Mobile</Text>
        </View>

        <Ionicons
          name="ellipsis-horizontal"
          size={22}
          color={colors.muted}
        />
      </View>

      <Text style={styles.caption}>{item.caption}</Text>

      <Pressable onPress={togglePlayback} style={styles.videoWrap}>
        <VideoView
          player={player}
          style={styles.video}
          contentFit="cover"
          nativeControls={false}
        />

        <View style={styles.playOverlay}>
          <Ionicons
            name={isPlaying ? 'pause-circle' : 'play-circle'}
            size={64}
            color="rgba(255,255,255,0.90)"
          />
        </View>
      </Pressable>

      <View style={styles.stats}>
        <Text style={styles.statText}>
          {item.reactions + (liked ? 1 : 0)} reactions
        </Text>
        <Text style={styles.statText}>
          {item.comments} comments
        </Text>
      </View>

      <View style={styles.actions}>
        <Pressable
          onPress={() => setLiked((value) => !value)}
          style={styles.action}
        >
          <Ionicons
            name={liked ? 'thumbs-up' : 'thumbs-up-outline'}
            size={21}
            color={liked ? colors.blue : colors.muted}
          />
          <Text style={[styles.actionText, liked && styles.actionActive]}>
            Like
          </Text>
        </Pressable>

        <View style={styles.action}>
          <Ionicons name="chatbubble-outline" size={21} color={colors.muted} />
          <Text style={styles.actionText}>Comment</Text>
        </View>

        <View style={styles.action}>
          <Ionicons name="arrow-redo-outline" size={21} color={colors.muted} />
          <Text style={styles.actionText}>Share</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.panel,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.border,
    marginBottom: 12,
    paddingTop: 14,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 10,
  },
  headerCopy: { flex: 1 },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  username: {
    color: colors.text,
    fontWeight: '800',
    fontSize: 15,
  },
  liveBadge: {
    backgroundColor: colors.live,
    borderRadius: 5,
    paddingHorizontal: 7,
    paddingVertical: 3,
  },
  liveText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '900',
  },
  time: {
    color: colors.muted,
    fontSize: 12,
    marginTop: 3,
  },
  caption: {
    color: colors.text,
    paddingHorizontal: 14,
    marginTop: 11,
    marginBottom: 12,
    lineHeight: 20,
  },
  videoWrap: {
    backgroundColor: '#050608',
    position: 'relative',
  },
  video: {
    width: '100%',
    aspectRatio: 9/16,
    maxHeight: 650,
  },
  playOverlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  statText: {
    color: colors.muted,
    fontSize: 12,
  },
  actions: {
    borderTopWidth: 1,
    borderTopColor: colors.border,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  action: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  actionText: {
    color: colors.muted,
    fontWeight: '700',
  },
  actionActive: {
    color: colors.blue,
  },
});
