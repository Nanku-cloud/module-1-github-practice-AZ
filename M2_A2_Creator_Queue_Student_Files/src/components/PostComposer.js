import React, { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { colors, spacing } from '../utils/theme';

export default function PostComposer({ onAdd }) {
  // Create title state with an empty string.
  const [title, setTitle] = useState('');

  // Create platform state with an empty string.
  const [platform, setPlatform] = useState('');

  // Create type state with an empty string.
  const [type, setType] = useState('');

  // Create error state with an empty string.
  const [error, setError] = useState('');

  function handleSubmit() {
    // Add the validation code from README.md below.


    // Add the onAdd code from README.md below.


    // Clear all three input fields and the error message below.

  }

  return (
    <View style={styles.card}>
      <Text style={styles.eyebrow}>NEW CONTENT</Text>
      <Text style={styles.heading}>Add to your queue</Text>

      {/* Connect the title input to title state. */}
      <TextInput
        placeholder="Post title"
        placeholderTextColor={colors.mutedText}
        style={styles.input}
      />

      {/* Connect the platform input to platform state. */}
      <TextInput
        placeholder="Platform: Instagram, TikTok, YouTube..."
        placeholderTextColor={colors.mutedText}
        style={styles.input}
      />

      {/* Connect the content type input to type state. */}
      <TextInput
        placeholder="Type: Reel, Carousel, Video..."
        placeholderTextColor={colors.mutedText}
        style={styles.input}
      />

      {/* Display the error message only when error contains text. */}


      <Pressable onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>ADD TO QUEUE</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 22,
    borderWidth: 1,
    padding: spacing.lg,
  },

  eyebrow: {
    color: colors.primary,
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 1.4,
  },

  heading: {
    color: colors.text,
    fontSize: 24,
    fontWeight: '900',
    marginTop: 6,
  },

  input: {
    backgroundColor: colors.surfaceAlt,
    borderColor: colors.border,
    borderRadius: 14,
    borderWidth: 1,
    color: colors.text,
    fontSize: 15,
    marginTop: spacing.md,
    paddingHorizontal: 14,
    paddingVertical: 13,
  },

  error: {
    color: colors.danger,
    fontSize: 13,
    marginTop: spacing.sm,
  },

  button: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 14,
    marginTop: spacing.md,
    paddingVertical: 14,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 1,
  },
});
