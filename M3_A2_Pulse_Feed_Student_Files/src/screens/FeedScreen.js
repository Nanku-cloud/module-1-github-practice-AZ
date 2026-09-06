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
  useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 900);

  return () => clearTimeout(timer);
}, []);

  // TODO 5: Filter the Following feed in Step 6.
  const visiblePosts = useMemo(() => {
  if (selectedFeed === 'following') {
    return posts.filter((post) => post.following);
  }

  return posts;
}, [selectedFeed]);

  function handleLike(id) {
    setLikedIds((current) =>
  current.includes(id)
    ? current.filter((postId) => postId !== id)
    : [...current, id]
);
  }

  function handleBookmark(id) {
    setBookmarkedIds((current) =>
  current.includes(id)
    ? current.filter((postId) => postId !== id)
    : [...current, id]
);
  }

  function renderPost({ item }) {
  return (
    <PostCard
      {...item}
      liked={likedIds.includes(item.id)}
      bookmarked={bookmarkedIds.includes(item.id)}
      onLike={handleLike}
      onBookmark={handleBookmark}
    />
  );
}

  return (
    <SafeAreaView style={styles.screen}>
      <FeedHeader />
      <FeedTabs
        selectedFeed={selectedFeed}
        onChangeFeed={setSelectedFeed}
      />

      {loading ? (
  <LoadingState />
) : (
  <FlatList
    contentContainerStyle={styles.listContent}
    data={visiblePosts}
    keyExtractor={(item) => item.id}
    ListEmptyComponent={EmptyFeed}
    renderItem={renderPost}
  />
)}

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
