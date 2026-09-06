import React, { useEffect, useMemo, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import FeedHeader from '../components/FeedHeader';
import FeedTabs from '../components/FeedTabs';
import PostCard from '../components/PostCard';
import LoadingState from '../components/LoadingState';
import EmptyFeed from '../components/EmptyFeed';
import BottomNavigation from '../components/BottomNavigation';
import posts from '../data/posts';
import { colors } from '../utils/theme';

export default function FeedScreen() {
  const [selectedFeed, setSelectedFeed] = useState('forYou');
  const [likedIds, setLikedIds] = useState([]);
  const [bookmarkedIds, setBookmarkedIds] = useState([]);
  const [loading, setLoading] = useState(true);

  // TODO 4: Add the loading useEffect from Step 5.

  // TODO 5: Filter the Following feed in Step 6.
  const visiblePosts = posts;

  function handleLike(id) {
    // TODO 6: Toggle likedIds in Step 7.
  }

  function handleBookmark(id) {
    // TODO 7: Toggle bookmarkedIds in Step 8.
  }

  function renderPost({ item }) {
    // TODO 8: Return PostCard with the props from Step 9.
    return null;
  }

  return (
    <SafeAreaView style={styles.screen}>
      <FeedHeader />
      <FeedTabs
        selectedFeed={selectedFeed}
        onChangeFeed={setSelectedFeed}
      />

      {/* TODO 9: Replace this placeholder with loading/FlatList in Step 10. */}

      <BottomNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.background,
    flex: 1,
  },
  listContent: {
    flexGrow: 1,
  },
});
