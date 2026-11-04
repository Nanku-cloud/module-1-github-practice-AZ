import React, { useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

import FriendCard from '../components/FriendCard';
import EventPanel from '../components/EventPanel';
import {
  events,
  myProfile,
  profiles,
} from '../data/friendData';
import { colors } from '../styles/theme';

export default function HomeScreen() {
  const [index, setIndex] = useState(0);
  const [friends, setFriends] = useState([]);
  const [passed, setPassed] = useState([]);

  const currentProfile = profiles[index];

  function nextProfile() {
    setIndex((current) =>
      (current + 1) % profiles.length
    );
  }

  function friendZone(profile) {
    setFriends((current) => [
      ...current,
      profile,
    ]);
    nextProfile();
  }

  function passProfile(profile) {
    setPassed((current) => [
      ...current,
      profile,
    ]);
    nextProfile();
  }

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.topBar}>
        <View>
          <Text style={styles.brand}>
            FriendZone
          </Text>
          <Text style={styles.tagline}>
            Find Your People
          </Text>
        </View>

        <Pressable
          onPress={() => router.push('/profile')}
          style={styles.profileButton}
        >
          <Ionicons
            name="person-outline"
            size={22}
            color={colors.text}
          />
        </Pressable>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.hero}>
          <Text style={styles.heroTitle}>
            Discover someone new
          </Text>

          <Text style={styles.heroText}>
            Swipe right for Friend Zone, left to pass,
            or use the buttons below.
          </Text>
        </View>

        <View style={styles.statsRow}>
          <View
            style={[
              styles.statCard,
              { backgroundColor: '#EAF7F2' },
            ]}
          >
            <Text style={styles.statNumber}>
              {friends.length}
            </Text>
            <Text style={styles.statLabel}>
              Friend Zone
            </Text>
          </View>

          <View
            style={[
              styles.statCard,
              { backgroundColor: '#FFF1F1' },
            ]}
          >
            <Text style={styles.statNumber}>
              {passed.length}
            </Text>
            <Text style={styles.statLabel}>
              Passed
            </Text>
          </View>
        </View>

        {currentProfile && (
          <FriendCard
            profile={currentProfile}
            myInterests={myProfile.interests}
            onFriend={friendZone}
            onPass={passProfile}
          />
        )}

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Upcoming Events
          </Text>
          <Text style={styles.sectionSub}>
            Meet people around activities you already enjoy.
          </Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.eventsRow}
        >
          {events.map((event) => (
            <EventPanel
              key={event.id}
              event={event}
            />
          ))}
        </ScrollView>
      </ScrollView>

      <View style={styles.bottomNav}>
        <View style={styles.navItem}>
          <Ionicons
            name="people"
            size={23}
            color={colors.blue}
          />
          <Text style={[styles.navText, styles.navActive]}>
            Discover
          </Text>
        </View>

        <View style={styles.navItem}>
          <Ionicons
            name="calendar-outline"
            size={23}
            color={colors.muted}
          />
          <Text style={styles.navText}>
            Events
          </Text>
        </View>

        <View style={styles.navItem}>
          <Ionicons
            name="heart-outline"
            size={23}
            color={colors.muted}
          />
          <Text style={styles.navText}>
            Friends
          </Text>
        </View>

        <Pressable
          onPress={() => router.push('/profile')}
          style={styles.navItem}
        >
          <Ionicons
            name="person-outline"
            size={23}
            color={colors.muted}
          />
          <Text style={styles.navText}>
            Profile
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  topBar: {
    minHeight: 66,
    paddingHorizontal: 18,
    backgroundColor: colors.panel,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    flexDirection: 'row',
    alignItems: 'center',
  },
  brand: {
    color: colors.text,
    fontSize: 24,
    fontWeight: '900',
  },
  tagline: {
    color: colors.muted,
    fontSize: 11,
    marginTop: 1,
  },
  profileButton: {
    marginLeft: 'auto',
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#F1F6FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    padding: 18,
    paddingBottom: 100,
  },
  hero: {
    borderRadius: 24,
    padding: 18,
    backgroundColor: '#EEF7FF',
    marginBottom: 14,
  },
  heroTitle: {
    color: colors.text,
    fontSize: 22,
    fontWeight: '900',
  },
  heroText: {
    color: colors.muted,
    marginTop: 5,
    lineHeight: 20,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 14,
  },
  statCard: {
    flex: 1,
    borderRadius: 18,
    padding: 14,
  },
  statNumber: {
    color: colors.text,
    fontSize: 22,
    fontWeight: '900',
  },
  statLabel: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: '800',
    marginTop: 2,
  },
  sectionHeader: {
    marginTop: 26,
    marginBottom: 12,
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 20,
    fontWeight: '900',
  },
  sectionSub: {
    color: colors.muted,
    marginTop: 3,
    fontSize: 13,
  },
  eventsRow: {
    paddingRight: 18,
  },
  bottomNav: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 66,
    backgroundColor: colors.panel,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  navItem: {
    alignItems: 'center',
    minWidth: 64,
  },
  navText: {
    color: colors.muted,
    fontSize: 10,
    fontWeight: '800',
    marginTop: 3,
  },
  navActive: {
    color: '#4D8ED7',
  },
});