import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {
  Gesture,
  GestureDetector,
} from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '../styles/theme';
import InterestChip from './InterestChip';

const SWIPE_THRESHOLD = 120;

export default function FriendCard({
  profile,
  myInterests,
  onFriend,
  onPass,
}) {
  const translateX = useSharedValue(0);

  const sharedInterests = profile.interests.filter(
    (interest) => myInterests.includes(interest)
  );

  // TODO 1:
  // Build the Pan gesture.
  // During onUpdate:
  // translateX.value = event.translationX
  //
  // During onEnd:
  // right past threshold = Friend Zone
  // left past threshold = Pass
  // not far enough = return with withSpring(0)
  const panGesture = Gesture.Pan();

  // TODO 2:
  // Connect translateX to the card.
  // Add a SMALL rotation while dragging.
  const cardStyle = useAnimatedStyle(() => {
    return {};
  });

  // TODO 3:
  // FRIEND ZONE becomes visible while moving right.
  // PASS becomes visible while moving left.
  const friendLabelStyle = useAnimatedStyle(() => {
    return {};
  });

  const passLabelStyle = useAnimatedStyle(() => {
    return {};
  });

  return (
    <GestureDetector gesture={panGesture}>
      <Animated.View style={[styles.card, cardStyle]}>
        <View style={styles.imageWrap}>
          <Image source={profile.image} style={styles.image} />

          <Animated.View
            style={[styles.friendLabel, friendLabelStyle]}
          >
            <Text style={styles.friendLabelText}>
              FRIEND ZONE
            </Text>
          </Animated.View>

          <Animated.View
            style={[styles.passLabel, passLabelStyle]}
          >
            <Text style={styles.passLabelText}>
              PASS
            </Text>
          </Animated.View>
        </View>

        <View style={styles.body}>
          <View style={styles.nameRow}>
            <Text style={styles.name}>
              {profile.name}, {profile.age}
            </Text>
            <Ionicons
              name="location-outline"
              size={18}
              color={colors.muted}
            />
            <Text style={styles.area}>
              {profile.area}
            </Text>
          </View>

          <Text style={styles.bio}>
            {profile.bio}
          </Text>

          <Text style={styles.sectionTitle}>
            You Both Like
          </Text>

          <View style={styles.chips}>
            {sharedInterests.length > 0 ? (
              sharedInterests.map((item) => (
                <InterestChip
                  key={item}
                  label={item}
                  shared
                />
              ))
            ) : (
              <Text style={styles.none}>
                No shared interests yet.
              </Text>
            )}
          </View>

          <Text style={styles.sectionTitle}>
            More Interests
          </Text>

          <View style={styles.chips}>
            {profile.interests.map((item) => (
              <InterestChip
                key={item}
                label={item}
              />
            ))}
          </View>

          <View style={styles.buttons}>
            <Pressable
              onPress={() => onPass(profile)}
              style={[styles.actionButton, styles.passButton]}
            >
              <Ionicons
                name="close"
                size={24}
                color={colors.pass}
              />
              <Text style={[styles.actionText, { color: colors.pass }]}>
                Pass
              </Text>
            </Pressable>

            <Pressable
              onPress={() => onFriend(profile)}
              style={[styles.actionButton, styles.friendButton]}
            >
              <Ionicons
                name="people"
                size={22}
                color={colors.friend}
              />
              <Text style={[styles.actionText, { color: colors.friend }]}>
                Friend Zone
              </Text>
            </Pressable>
          </View>
        </View>
      </Animated.View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    borderRadius: 28,
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: 'hidden',
  },
  imageWrap: { position: 'relative' },
  image: { width: '100%', aspectRatio: 0.92 },
  friendLabel: {
    position: 'absolute',
    top: 28,
    left: 22,
    borderWidth: 3,
    borderColor: colors.friend,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: 'rgba(255,255,255,0.88)',
    transform: [{ rotate: '-8deg' }],
  },
  friendLabelText: {
    color: colors.friend,
    fontSize: 18,
    fontWeight: '900',
  },
  passLabel: {
    position: 'absolute',
    top: 28,
    right: 22,
    borderWidth: 3,
    borderColor: colors.pass,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: 'rgba(255,255,255,0.88)',
    transform: [{ rotate: '8deg' }],
  },
  passLabelText: {
    color: colors.pass,
    fontSize: 18,
    fontWeight: '900',
  },
  body: { padding: 18 },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  name: {
    color: colors.text,
    fontSize: 24,
    fontWeight: '900',
    marginRight: 9,
  },
  area: { color: colors.muted, fontSize: 13 },
  bio: { color: colors.muted, lineHeight: 21, marginTop: 8 },
  sectionTitle: {
    color: colors.text,
    fontSize: 13,
    fontWeight: '900',
    marginTop: 15,
    marginBottom: 8,
  },
  chips: { flexDirection: 'row', flexWrap: 'wrap' },
  none: { color: colors.muted, fontSize: 12 },
  buttons: { flexDirection: 'row', gap: 10, marginTop: 12 },
  actionButton: {
    flex: 1,
    minHeight: 48,
    borderRadius: 16,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 7,
  },
  passButton: {
    borderColor: '#F5C4C4',
    backgroundColor: '#FFF3F3',
  },
  friendButton: {
    borderColor: '#BFEBDD',
    backgroundColor: '#F0FCF7',
  },
  actionText: { fontWeight: '900' },
});