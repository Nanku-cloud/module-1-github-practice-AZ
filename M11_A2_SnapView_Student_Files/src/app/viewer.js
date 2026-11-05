import React, { useMemo, useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {
  Gesture,
  GestureDetector,
} from 'react-native-gesture-handler';

import { photos } from '../data/photoData';
import { colors } from '../styles/theme';

const MIN_SCALE = 1;
const MAX_SCALE = 3;
const SWIPE_THRESHOLD = 110;

export default function ViewerScreen() {
  const params = useLocalSearchParams();
  const startIndex = Number(params.index ?? 0);

  const [index, setIndex] = useState(startIndex);
  const [favorite, setFavorite] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const currentPhoto = photos[index];

  const scale = useSharedValue(1);
  const savedScale = useSharedValue(1);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  function previousPhoto() {
    setIndex((current) =>
      current <= 0 ? photos.length - 1 : current - 1
    );
  }

  function nextPhoto() {
    setIndex((current) =>
      current >= photos.length - 1 ? 0 : current + 1
    );
  }

  function resetImage() {
    scale.value = withSpring(1);
    savedScale.value = 1;
    translateX.value = withSpring(0);
    translateY.value = withSpring(0);
  }

  // TODO 1:
  // Create a Pinch gesture.
  // Use event.scale with savedScale.
  // Keep scale between MIN_SCALE and MAX_SCALE.
  // When the pinch ends, save the final scale.
  const pinchGesture = Gesture.Pinch();

  // TODO 2:
  // Create a Pan gesture.
  //
  // If scale.value is greater than 1:
  // drag the zoomed image with translationX / translationY.
  //
  // If scale.value is 1:
  // use horizontal movement for swipe navigation.
  //
  // At the end:
  // swipe left past threshold = nextPhoto()
  // swipe right past threshold = previousPhoto()
  // otherwise return horizontal translation to 0.
  const panGesture = Gesture.Pan();

  // TODO 3:
  // Double tap:
  // - if currently at scale 1, zoom to 2
  // - otherwise resetImage()
  const doubleTap = Gesture.Tap()
    .numberOfTaps(2);

  // TODO 4:
  // Long press should toggle showInfo.
  const longPress = Gesture.LongPress()
    .minDuration(550);

  // TODO 5:
  // Combine gestures so pinch and pan can work together
  // without removing double-tap and long-press behavior.
  const composedGesture = Gesture.Race(
    doubleTap,
    longPress
  );

  const imageStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
        { scale: scale.value },
      ],
    };
  });

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.topBar}>
        <Pressable onPress={() => router.back()}>
          <Ionicons name="close" size={29} color="#FFFFFF" />
        </Pressable>

        <View style={styles.topCopy}>
          <Text style={styles.title}>
            {currentPhoto.title}
          </Text>
          <Text style={styles.subtitle}>
            {index + 1} of {photos.length}
          </Text>
        </View>

        <Pressable onPress={() => setFavorite((value) => !value)}>
          <Ionicons
            name={favorite ? 'heart' : 'heart-outline'}
            size={28}
            color={favorite ? colors.favorite : '#FFFFFF'}
          />
        </Pressable>
      </View>

      <View style={styles.viewer}>
        <GestureDetector gesture={composedGesture}>
          <Animated.Image
            source={currentPhoto.image}
            style={[styles.image, imageStyle]}
            resizeMode="contain"
          />
        </GestureDetector>

        {showInfo && (
          <View style={styles.infoPanel}>
            <Text style={styles.infoTitle}>
              {currentPhoto.title}
            </Text>
            <Text style={styles.infoText}>
              {currentPhoto.subtitle}
            </Text>
            <Text style={styles.infoHint}>
              Long press again to close this panel.
            </Text>
          </View>
        )}
      </View>

      <View style={styles.instructions}>
        <Text style={styles.instructionsTitle}>
          Gesture Guide
        </Text>
        <Text style={styles.instructionsText}>
          Swipe • Pinch • Drag • Double Tap • Long Press
        </Text>
      </View>

      <View style={styles.controls}>
        <Pressable onPress={previousPhoto} style={styles.controlButton}>
          <Ionicons name="chevron-back" size={22} color={colors.text} />
          <Text style={styles.controlText}>Previous</Text>
        </Pressable>

        <Pressable
          onPress={() => setFavorite((value) => !value)}
          style={styles.favoriteButton}
        >
          <Ionicons
            name={favorite ? 'heart' : 'heart-outline'}
            size={22}
            color={colors.favorite}
          />
          <Text style={styles.favoriteText}>
            {favorite ? 'Favorited' : 'Favorite'}
          </Text>
        </Pressable>

        <Pressable onPress={nextPhoto} style={styles.controlButton}>
          <Text style={styles.controlText}>Next</Text>
          <Ionicons name="chevron-forward" size={22} color={colors.text} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.dark,
  },
  topBar: {
    minHeight: 64,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  topCopy: {
    flex: 1,
    marginHorizontal: 12,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '900',
  },
  subtitle: {
    color: '#A8B0BD',
    fontSize: 11,
    marginTop: 2,
  },
  viewer: {
    flex: 1,
    justifyContent: 'center',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  infoPanel: {
    position: 'absolute',
    left: 18,
    right: 18,
    bottom: 18,
    borderRadius: 18,
    padding: 16,
    backgroundColor: 'rgba(255,255,255,0.94)',
  },
  infoTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '900',
  },
  infoText: {
    color: colors.muted,
    marginTop: 4,
  },
  infoHint: {
    color: colors.muted,
    fontSize: 11,
    marginTop: 8,
  },
  instructions: {
    paddingHorizontal: 18,
    paddingVertical: 12,
  },
  instructionsTitle: {
    color: '#FFFFFF',
    fontWeight: '900',
    fontSize: 12,
  },
  instructionsText: {
    color: '#A8B0BD',
    fontSize: 12,
    marginTop: 3,
  },
  controls: {
    paddingHorizontal: 14,
    paddingBottom: 18,
    flexDirection: 'row',
    gap: 10,
  },
  controlButton: {
    flex: 1,
    minHeight: 48,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 5,
  },
  controlText: {
    color: colors.text,
    fontWeight: '900',
    fontSize: 12,
  },
  favoriteButton: {
    flex: 1,
    minHeight: 48,
    borderRadius: 16,
    backgroundColor: '#FFF0F4',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 5,
  },
  favoriteText: {
    color: '#CB4667',
    fontWeight: '900',
    fontSize: 12,
  },
});
