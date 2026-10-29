import React, { useRef, useState } from 'react';
import {
  Animated,
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

import VideoPost from '../components/VideoPost';
import { feedItems } from '../data/feedData';
import { colors } from '../styles/theme';

export default function FeedScreen() {
  const [refreshing, setRefreshing] = useState(false);

  // TODO 1: Create Animated.Value for Create Post button scale
  const buttonScale = useRef(new Animated.Value(1)).current;

  function pressCreateIn() {
  // TODO 2: Add a small press-in animation.
  Animated.spring(buttonScale, {
    toValue: 0.95,
    useNativeDriver: true,
  }).start();
}

  function pressCreateOut() {
  // TODO 3: Return the button to its normal size.
  Animated.spring(buttonScale, {
    toValue: 1,
    useNativeDriver: true,
  }).start();
}

  async function refreshFeed() {
    setRefreshing(true);

    // Simulate a short network refresh.
    await new Promise((resolve) => setTimeout(resolve, 900));

    setRefreshing(false);
  }

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.topBar}>
        <Text style={styles.brand}>LIVEFEED</Text>

        <View style={styles.topActions}>
          <Ionicons name="search-outline" size={25} color={colors.text} />
          <Ionicons name="chatbubbles-outline" size={25} color={colors.text} />
        </View>
      </View>

      <View style={styles.createRow}>
        <View style={styles.meAvatar}>
          <Text style={styles.meText}>ME</Text>
        </View>

        <Pressable
  onPress={() => router.push('/create')}
  onPressIn={pressCreateIn}
  onPressOut={pressCreateOut}
  style={styles.createPressable}
>
  {/* TODO 4: Connect the Animation */}
  <Animated.View style={[{ transform: [{ scale: buttonScale }] }]}>
    <View style={styles.createButton}>
      <Text style={styles.createText}>Create a video post</Text>
      <Ionicons name="videocam-outline" size={22} color={colors.live} />
    </View>
  </Animated.View>
</Pressable> {/* <-- This closes the Pressable from line 65 */}
      </View>

      <FlatList
        data={feedItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <VideoPost item={item} />}
        refreshing={refreshing}
        onRefresh={refreshFeed}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.bottomNav}>
        <Ionicons name="home" size={25} color={colors.blue} />
        <Ionicons name="people-outline" size={25} color={colors.muted} />
        <Ionicons name="play-circle-outline" size={27} color={colors.muted} />
        <Ionicons name="notifications-outline" size={25} color={colors.muted} />
        <Ionicons name="menu-outline" size={27} color={colors.muted} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  topBar: {
    height: 58,
    paddingHorizontal: 16,
    backgroundColor: colors.panel,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    flexDirection: 'row',
    alignItems: 'center',
  },
  brand: {
    color: colors.blue,
    fontSize: 23,
    fontWeight: '900',
    letterSpacing: 1,
    flex: 1,
  },
  topActions: {
    flexDirection: 'row',
    gap: 17,
  },
  createRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 12,
    backgroundColor: colors.panel,
    marginBottom: 12,
  },
  meAvatar: {
    width: 43,
    height: 43,
    borderRadius: 22,
    backgroundColor: colors.panel2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  meText: {
    color: colors.text,
    fontWeight: '900',
    fontSize: 11,
  },
  createPressable: { flex: 1 },
  createButton: {
    minHeight: 44,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 22,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  createText: {
    color: colors.muted,
    flex: 1,
    fontSize: 15,
  },
  list: {
    paddingBottom: 74,
  },
  bottomNav: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 58,
    paddingHorizontal: 24,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    backgroundColor: colors.panel,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
