import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  // STEP 6: When instructed, replace null with the selected activity object.
  const [selectedActivity, setSelectedActivity] = useState(null);

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.contentContainer}
    >
      <StatusBar style="light" />

      {/* Use the hero area below for the Campus Connect app name and subtitle. */}
      <View style={styles.hero}>
        <Text style={styles.kicker}>CAMPUS LIFE, ONE TAP AWAY</Text>
        <Text style={styles.title}>Campus Connect</Text>
        <Text style={styles.subtitle}>Your campus. Your day. Your way.</Text>
      </View>

      {/* STEP 1: Type exactly: What's Happening? */}
      <Text style={styles.sectionTitle}></Text>

      {/* STEP 2: Complete the first activity card with the exact text shown in README.md. */}
      <View style={styles.activityCard}>
        {/* Type exactly: 🎮 */}
        <Text style={styles.activityEmoji}></Text>

        {/* Type exactly: Game Lounge */}
        <Text style={styles.activityTitle}></Text>

        {/* Type exactly: Drop in, play games, and meet other students. */}
        <Text style={styles.activityDescription}></Text>

        {/* Type exactly: OPEN TODAY */}
        <Text style={styles.activityStatus}></Text>
      </View>

      {/* STEP 3: Paste the Study Jam card directly below this comment. */}

      {/* STEP 3: Paste the Campus Eats card directly below this comment. */}

      {/*
        STEP 4:
        After you create CampusCard.js, replace the three hard-coded cards above
        with the exact CampusCard examples shown in README.md.
      */}

      {/*
        STEP 6:
        After Pressable and props are connected, display the selected activity
        inside the panel below using the exact code shown in README.md.
      */}
      <View style={styles.selectionPanel}>
        <Text style={styles.selectionLabel}>YOUR PICK</Text>
        <Text style={styles.selectionText}>
          Pick a campus activity to see what you're checking out.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#0B1020',
  },

  contentContainer: {
    padding: 24,
    paddingBottom: 48,
  },

  hero: {
    backgroundColor: '#5B4BFF',
    borderRadius: 26,
    padding: 24,
    marginBottom: 24,
  },

  kicker: {
    color: '#C9C4FF',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 1.5,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 38,
    fontWeight: '900',
    marginTop: 8,
  },

  subtitle: {
    color: '#F2F0FF',
    fontSize: 17,
    marginTop: 8,
  },

  // STEP 1: Add these exact properties inside sectionTitle:
  // color: '#FFFFFF',
  // fontSize: 28,
  // fontWeight: '900',
  // marginBottom: 16,
  sectionTitle: {
  },

  // STEP 2: Add these exact properties inside activityCard:
  // backgroundColor: '#151B31',
  // borderColor: '#2A3357',
  // borderRadius: 22,
  // borderWidth: 1,
  // marginBottom: 16,
  // padding: 20,
  activityCard: {
  },

  // STEP 2: Add this exact property:
  // fontSize: 34,
  activityEmoji: {
  },

  // STEP 2: Add these exact properties:
  // color: '#FFFFFF',
  // fontSize: 22,
  // fontWeight: '900',
  // marginTop: 12,
  activityTitle: {
  },

  // STEP 2: Add these exact properties:
  // color: '#AEB8D4',
  // fontSize: 15,
  // lineHeight: 22,
  // marginTop: 8,
  activityDescription: {
  },

  // STEP 2: Add these exact properties:
  // color: '#8B5CF6',
  // fontSize: 12,
  // fontWeight: '900',
  // letterSpacing: 0.8,
  // marginTop: 14,
  activityStatus: {
  },

  selectionPanel: {
    backgroundColor: '#10172A',
    borderColor: '#2A3357',
    borderRadius: 22,
    borderWidth: 1,
    marginTop: 8,
    padding: 20,
  },

  selectionLabel: {
    color: '#8B5CF6',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 1.3,
  },

  selectionText: {
    color: '#AEB8D4',
    fontSize: 15,
    lineHeight: 22,
    marginTop: 8,
  },
});
