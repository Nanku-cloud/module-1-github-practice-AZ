import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

// STEP 4:
// Add these props inside the parentheses after CampusCard:
// emoji, title, description, status, accent, onPress, isSelected
export default function CampusCard() {
  return (
    // STEP 6: Change this to: <Pressable onPress={onPress}>
    <Pressable>
      <View style={styles.card}>
        {/* STEP 5: Put {emoji} between the Text tags. */}
        <Text style={styles.emoji}></Text>

        {/* STEP 5: Put {title} between the Text tags. */}
        <Text style={styles.title}></Text>

        {/* STEP 5: Put {description} between the Text tags. */}
        <Text style={styles.description}></Text>

        {/* STEP 5: Put {status} between the Text tags. */}
        <Text style={styles.status}></Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  // Add these exact properties inside card:
  // backgroundColor: '#151B31',
  // borderColor: '#2A3357',
  // borderRadius: 22,
  // borderWidth: 1,
  // marginBottom: 16,
  // padding: 20,
  card: {
  },

  // Add: fontSize: 34,
  emoji: {
  },

  // Add:
  // color: '#FFFFFF',
  // fontSize: 22,
  // fontWeight: '900',
  // marginTop: 12,
  title: {
  },

  // Add:
  // color: '#AEB8D4',
  // fontSize: 15,
  // lineHeight: 22,
  // marginTop: 8,
  description: {
  },

  // Add:
  // color: '#8B5CF6',
  // fontSize: 12,
  // fontWeight: '900',
  // letterSpacing: 0.8,
  // marginTop: 14,
  status: {
  },
});
