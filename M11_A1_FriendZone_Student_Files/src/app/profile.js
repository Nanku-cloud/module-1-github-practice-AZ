import React, { useState } from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '../styles/theme';

const OPTIONS = [
  'Gaming',
  'Technology',
  'Basketball',
  'Music',
  'Movies',
  'Anime',
  'Fitness',
  'Photography',
  'Art',
  'Travel',
  'Food',
  'Sports',
];

export default function ProfileScreen() {
  const [photoUri, setPhotoUri] = useState(null);
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [selected, setSelected] = useState([]);

  async function choosePhoto() {
    const permission =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) {
      return;
    }

    // TODO 4:
    // Open the media library for IMAGES only.
    // Store the selected image URI in photoUri.
    // If the user cancels, keep the screen usable.
  }

  function toggleInterest(item) {
    setSelected((current) =>
      current.includes(item)
        ? current.filter((value) => value !== item)
        : [...current, item]
    );
  }

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.topBar}>
        <Pressable onPress={() => router.back()}>
          <Ionicons
            name="chevron-back"
            size={28}
            color={colors.text}
          />
        </Pressable>

        <Text style={styles.title}>
          Build Your Profile
        </Text>

        <View style={{ width: 28 }} />
      </View>

      <View style={styles.content}>
        <Pressable
          onPress={choosePhoto}
          style={styles.photoButton}
        >
          {photoUri ? (
            <Image
              source={{ uri: photoUri }}
              style={styles.photo}
            />
          ) : (
            <>
              <Ionicons
                name="camera-outline"
                size={36}
                color={colors.blue}
              />
              <Text style={styles.photoText}>
                Choose Profile Photo
              </Text>
            </>
          )}
        </Pressable>

        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="First name"
          placeholderTextColor={colors.muted}
          style={styles.input}
        />

        <TextInput
          value={bio}
          onChangeText={setBio}
          placeholder="Short bio"
          placeholderTextColor={colors.muted}
          style={[styles.input, styles.bioInput]}
          multiline
        />

        <Text style={styles.sectionTitle}>
          Choose at least 5 interests
        </Text>

        <View style={styles.options}>
          {OPTIONS.map((item) => {
            const active = selected.includes(item);

            return (
              <Pressable
                key={item}
                onPress={() => toggleInterest(item)}
                style={[
                  styles.option,
                  active && styles.optionActive,
                ]}
              >
                <Text
                  style={[
                    styles.optionText,
                    active && styles.optionTextActive,
                  ]}
                >
                  {item}
                </Text>
              </Pressable>
            );
          })}
        </View>

        <View style={styles.tip}>
          <Text style={styles.tipTitle}>
            WHY THIS MATTERS
          </Text>

          <Text style={styles.tipText}>
            The discovery screen compares interests to help users quickly
            see what they have in common with another person.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  topBar: {
    height: 58,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.panel,
  },
  title: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '900',
  },
  content: { padding: 18 },
  photoButton: {
    alignSelf: 'center',
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#F0F6FF',
    borderWidth: 2,
    borderColor: '#D7E8FF',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  photo: { width: '100%', height: '100%' },
  photoText: {
    color: colors.text,
    fontSize: 12,
    fontWeight: '800',
    marginTop: 7,
  },
  input: {
    marginTop: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.panel,
    paddingHorizontal: 14,
    minHeight: 50,
    color: colors.text,
  },
  bioInput: {
    minHeight: 88,
    textAlignVertical: 'top',
    paddingTop: 14,
  },
  sectionTitle: {
    color: colors.text,
    fontWeight: '900',
    marginTop: 20,
    marginBottom: 10,
  },
  options: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  option: {
    borderRadius: 999,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: '#F7F8FA',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  optionActive: {
    backgroundColor: '#EAF4FF',
    borderColor: colors.blue,
  },
  optionText: {
    color: colors.text,
    fontWeight: '700',
  },
  optionTextActive: {
    color: '#3E7FCA',
  },
  tip: {
    marginTop: 22,
    borderRadius: 18,
    padding: 16,
    backgroundColor: '#FFF7DF',
  },
  tipTitle: {
    color: '#AA7A00',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 1,
  },
  tipText: {
    color: colors.text,
    marginTop: 6,
    lineHeight: 20,
  },
});