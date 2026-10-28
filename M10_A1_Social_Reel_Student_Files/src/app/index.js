import React, { useEffect, useRef, useState } from 'react';
import { Animated, FlatList, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PostCard from '../components/PostCard';
import StoryBubble from '../components/StoryBubble';
import { posts, stories } from '../data/socialData';
import { colors } from '../styles/theme';

export default function FeedScreen() {
  const [activeTab, setActiveTab] = useState('Feed');

  // TODO 4: Create feed entrance Animated.Value(s). (Using fade + small vertical slide)
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(15)).current;

  useEffect(() => {
    // TODO 5: Start the entrance animation when screen loads using Animated.parallel
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <SafeAreaView style={s.screen}>
      <View style={s.topBar}>
        <Text style={s.brand}>SOCIAL REEL</Text>
        <View style={s.topActions}>
          <Ionicons name="add-circle-outline" size={27} color={colors.text} />
          <Ionicons name="paper-plane-outline" size={27} color={colors.text} />
        </View>
      </View>

      <View style={s.tabs}>
        {['Feed', 'Reels'].map(tab => (
          <Pressable key={tab} onPress={() => setActiveTab(tab)} style={[s.tab, activeTab === tab && s.activeTab]}>
            <Text style={[s.tabText, activeTab === tab && s.activeTabText]}>{tab}</Text>
          </Pressable>
        ))}
      </View>

      {/* TODO 6: Wrap only the feed content in Animated.View and apply entrance styles. DO NOT animate bottom nav. */}
      <Animated.View style={[s.flex, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
        <FlatList
          data={posts}
          keyExtractor={i => i.id}
          renderItem={({ item }) => <PostCard post={item} />}
          ListHeaderComponent={
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={s.stories}>
              {stories.map(st => (
                <StoryBubble key={st.id} story={st} />
              ))}
            </ScrollView>
          }
          showsVerticalScrollIndicator={false}
        />
      </Animated.View>

      <View style={s.bottom}>
        <Ionicons name="home" size={25} color={colors.text} />
        <Ionicons name="search-outline" size={25} color={colors.text} />
        <Ionicons name="add-circle-outline" size={28} color={colors.text} />
        <Ionicons name="play-circle-outline" size={26} color={colors.text} />
        <Ionicons name="person-circle-outline" size={27} color={colors.text} />
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  flex: {
    flex: 1,
  },
  topBar: {
    height: 58,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.line,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  brand: {
    color: colors.text,
    fontSize: 21,
    fontWeight: '800',
    letterSpacing: 1.3,
  },
  topActions: {
    flexDirection: 'row',
    gap: 18,
  },
  tabs: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.line,
  },
  tab: {
    flex: 1,
    paddingVertical: 13,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: colors.text,
  },
  tabText: {
    color: colors.muted,
    fontWeight: '800',
  },
  activeTabText: {
    color: colors.text,
  },
  stories: {
    paddingHorizontal: 14,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.line,
  },
  bottom: {
    height: 58,
    paddingHorizontal: 24,
    borderTopWidth: 1,
    borderTopColor: colors.line,
    backgroundColor: colors.bg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});