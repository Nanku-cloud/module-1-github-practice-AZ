import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import PostCard from '../components/PostCard';
import PostComposer from '../components/PostComposer';
import StatusFilter from '../components/StatusFilter';
import starterPosts from '../data/starterPosts';
import createId from '../utils/createId';
import { colors, spacing } from '../utils/theme';

export default function CreatorQueueScreen() {
  // Store starterPosts in posts state.
  const [posts, setPosts] = useState(starterPosts);

  // Store All in selectedFilter state.
  const [selectedFilter, setSelectedFilter] = useState('All');

  function handleAddPost(formValues) {
    // Create a new post object with a unique id and Draft status.
    // Then add the new post to the beginning of the posts array.

  }

  function handleAdvancePost(id) {
    // Use map() to advance only the matching post:
    // Draft -> Scheduled
    // Scheduled -> Published
    // Published -> Published

  }

  function handleDeletePost(id) {
    // Use filter() to remove the matching published post.

  }

  // Create filteredPosts so All shows everything
  // and each other filter shows only matching statuses.
  const filteredPosts = posts;

  const publishedCount = posts.filter(
    (post) => post.status === 'Published'
  ).length;

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
    >
      <Text style={styles.eyebrow}>CREATOR WORKSPACE</Text>
      <Text style={styles.heading}>Content Queue</Text>
      <Text style={styles.subtitle}>
        Draft ideas, schedule content, and move posts toward publish.
      </Text>

      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{posts.length}</Text>
          <Text style={styles.statLabel}>TOTAL</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statValue}>{publishedCount}</Text>
          <Text style={styles.statLabel}>PUBLISHED</Text>
        </View>
      </View>

      <PostComposer onAdd={handleAddPost} />

      <StatusFilter
        selectedFilter={selectedFilter}
        onChangeFilter={setSelectedFilter}
      />

      <View style={styles.list}>
        {/* Use filteredPosts.map() to display one PostCard per post. */}


        {/* Display the empty-list message only when filteredPosts is empty. */}

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.background,
    flex: 1,
  },

  content: {
    padding: spacing.lg,
    paddingBottom: 48,
  },

  eyebrow: {
    color: colors.accent,
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 1.5,
  },

  heading: {
    color: colors.text,
    fontSize: 36,
    fontWeight: '900',
    marginTop: 6,
  },

  subtitle: {
    color: colors.mutedText,
    fontSize: 15,
    lineHeight: 22,
    marginBottom: spacing.lg,
    marginTop: 8,
  },

  statsRow: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginBottom: spacing.lg,
  },

  statCard: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 18,
    borderWidth: 1,
    flex: 1,
    padding: spacing.md,
  },

  statValue: {
    color: colors.text,
    fontSize: 26,
    fontWeight: '900',
  },

  statLabel: {
    color: colors.mutedText,
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1.1,
    marginTop: 3,
  },

  list: {
    gap: spacing.md,
  },

  emptyMessage: {
    color: colors.mutedText,
    fontSize: 15,
    paddingVertical: spacing.xl,
    textAlign: 'center',
  },
});
