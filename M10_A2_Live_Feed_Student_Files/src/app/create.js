import React, { useRef, useState } from 'react';
import {
  Animated,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
import { useVideoPlayer, VideoView } from 'expo-video';

import { colors } from '../styles/theme';

export default function CreateVideoScreen() {
  const [selectedUri, setSelectedUri] = useState(null);
  const [caption, setCaption] = useState('');
  const [uploadState, setUploadState] = useState('idle');
  const [message, setMessage] = useState('');

  const successOpacity = useRef(new Animated.Value(0)).current;

  const player = useVideoPlayer(selectedUri, (instance) => {
    instance.loop = true;
  });

  async function chooseVideo() {
    setMessage('');

    const permission =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) {
      setUploadState('error');
      setMessage('Media library permission was denied.');
      return;
    }

    // TODO 5:
    // Open the media library and allow VIDEOS only.
    // Use launchImageLibraryAsync().
    //
    // Store the selected video's URI in selectedUri.
    //
    // If the user cancels, keep the screen usable.
  }

  async function postVideo() {
    if (!selectedUri) {
      setUploadState('error');
      setMessage('Choose a short video before posting.');
      return;
    }

    setUploadState('uploading');
    setMessage('Uploading your video...');

    // This assignment simulates upload feedback.
    // A real cloud upload belongs in a later backend workflow.
    await new Promise((resolve) => setTimeout(resolve, 1600));

    setUploadState('success');
    setMessage('Video posted successfully.');

    // TODO 6:
    // Fade the success message into view.
    // Use successOpacity and Animated.timing().
  }

  const isUploading = uploadState === 'uploading';

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.topBar}>
        <Pressable onPress={() => router.back()}>
          <Ionicons name="close" size={29} color={colors.text} />
        </Pressable>

        <Text style={styles.title}>Create video post</Text>

        <View style={{ width: 29 }} />
      </View>

      <View style={styles.content}>
        <Pressable onPress={chooseVideo} style={styles.pickButton}>
          <Ionicons name="videocam" size={24} color={colors.blue} />
          <Text style={styles.pickText}>
            {selectedUri ? 'Choose a different video' : 'Choose short video'}
          </Text>
        </Pressable>

        {selectedUri ? (
          <View style={styles.previewCard}>
            <Text style={styles.sectionLabel}>PREVIEW</Text>

            <VideoView
              player={player}
              style={styles.preview}
              contentFit="cover"
              nativeControls
            />
          </View>
        ) : (
          <View style={styles.emptyPreview}>
            <Ionicons name="film-outline" size={46} color={colors.muted} />
            <Text style={styles.emptyTitle}>No video selected</Text>
            <Text style={styles.emptyText}>
              Choose a short video from your device to preview it before posting.
            </Text>
          </View>
        )}

        <TextInput
          value={caption}
          onChangeText={setCaption}
          placeholder="Say something about this video..."
          placeholderTextColor={colors.muted}
          style={styles.input}
          multiline
        />

        <Pressable
          onPress={postVideo}
          disabled={isUploading}
          style={[
            styles.postButton,
            isUploading && styles.postButtonDisabled,
          ]}
        >
          <Text style={styles.postText}>
            {isUploading ? 'Uploading...' : 'Post Video'}
          </Text>
        </Pressable>

        {uploadState === 'error' && (
          <View style={styles.errorBox}>
            <Ionicons name="alert-circle" size={22} color={colors.danger} />
            <Text style={styles.errorText}>{message}</Text>
          </View>
        )}

        {uploadState === 'success' && (
          <Animated.View
            style={[
              styles.successBox,
              { opacity: successOpacity },
            ]}
          >
            <Ionicons
              name="checkmark-circle"
              size={23}
              color={colors.success}
            />
            <Text style={styles.successText}>{message}</Text>
          </Animated.View>
        )}

        <View style={styles.thinkBox}>
          <Text style={styles.thinkTitle}>THINK ABOUT THE USER</Text>
          <Text style={styles.thinkText}>
            Why should the Post button be disabled while uploading? What should
            happen if permission is denied? How does previewing the video reduce
            mistakes before posting?
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
  },
  title: {
    color: colors.text,
    fontWeight: '900',
    fontSize: 17,
  },
  content: {
    padding: 16,
  },
  pickButton: {
    minHeight: 50,
    borderRadius: 10,
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  pickText: {
    color: colors.text,
    fontWeight: '800',
  },
  previewCard: {
    marginTop: 16,
  },
  sectionLabel: {
    color: colors.muted,
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 1.2,
    marginBottom: 8,
  },
  preview: {
    width: '100%',
    aspectRatio: 9/16,
    maxHeight: 460,
    backgroundColor: '#050608',
    borderRadius: 12,
  },
  emptyPreview: {
    marginTop: 16,
    minHeight: 250,
    borderRadius: 12,
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  emptyTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '900',
    marginTop: 10,
  },
  emptyText: {
    color: colors.muted,
    textAlign: 'center',
    lineHeight: 20,
    marginTop: 6,
    maxWidth: 340,
  },
  input: {
    minHeight: 92,
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    marginTop: 16,
    padding: 14,
    color: colors.text,
    textAlignVertical: 'top',
  },
  postButton: {
    backgroundColor: colors.blue,
    borderRadius: 10,
    minHeight: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 14,
  },
  postButtonDisabled: {
    opacity: 0.55,
  },
  postText: {
    color: '#fff',
    fontWeight: '900',
  },
  errorBox: {
    marginTop: 14,
    borderRadius: 10,
    padding: 13,
    backgroundColor: '#2B171B',
    borderWidth: 1,
    borderColor: '#5F272E',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
  },
  errorText: {
    color: '#FFD6DA',
    flex: 1,
  },
  successBox: {
    marginTop: 14,
    borderRadius: 10,
    padding: 13,
    backgroundColor: '#13281F',
    borderWidth: 1,
    borderColor: '#285641',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
  },
  successText: {
    color: '#D8F8E8',
    flex: 1,
  },
  thinkBox: {
    marginTop: 20,
    borderRadius: 10,
    padding: 14,
    backgroundColor: colors.panel2,
  },
  thinkTitle: {
    color: colors.live,
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 1.1,
  },
  thinkText: {
    color: colors.text,
    lineHeight: 20,
    marginTop: 6,
  },
});
