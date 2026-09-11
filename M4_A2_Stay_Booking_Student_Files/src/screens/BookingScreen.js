import React, { useMemo, useRef, useState } from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import BookingHeader from '../components/BookingHeader';
import GuestControl from '../components/GuestControl';
import RoomPreferenceModal from '../components/RoomPreferenceModal';
import BookingSummary from '../components/BookingSummary';
import roomOptions from '../data/roomOptions';
import { colors } from '../utils/theme';

export default function BookingScreen() {
  const [destination, setDestination] = useState('');
  const [guestName, setGuestName] = useState('');
  const [guestCount, setGuestCount] = useState(1);
  const [selectedRoomId, setSelectedRoomId] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [error, setError] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  // TODO 3: Create destinationRef and guestNameRef in Step 4.

  const selectedRoom = useMemo(
    () => roomOptions.find((room) => room.id === selectedRoomId),
    [selectedRoomId]
  );

  function handleDecreaseGuests() {
    // TODO 4: Prevent guest count from going below 1.
  }

  function handleIncreaseGuests() {
    // TODO 5: Increase guest count.
  }

  function handleConfirm() {
    // TODO 6: Add validation and confirmation in Step 7.
  }

  return (
    <SafeAreaView style={styles.screen}>
      <BookingHeader />

      <ScrollView contentContainerStyle={styles.content}>
        <Image
          source={require('../assets/images/city-stay.png')}
          resizeMode="cover"
          style={styles.hero}
        />

        <Text style={styles.heading}>Plan your stay</Text>
        <Text style={styles.subheading}>
          Enter the trip details, then choose the room that fits your stay.
        </Text>

        <TextInput
          // TODO 7: Connect destinationRef in Step 4.
          onChangeText={setDestination}
          onSubmitEditing={() => {}}
          placeholder="Where are you going?"
          placeholderTextColor={colors.muted}
          returnKeyType="next"
          style={styles.input}
          value={destination}
        />

        <TextInput
          // TODO 8: Connect guestNameRef in Step 4.
          onChangeText={setGuestName}
          placeholder="Primary guest name"
          placeholderTextColor={colors.muted}
          style={styles.input}
          value={guestName}
        />

        <Pressable
          // TODO 9: Focus destination input in Step 4.
          onPress={() => {}}
        >
          <Text style={styles.focusLink}>Focus destination</Text>
        </Pressable>

        <GuestControl
          count={guestCount}
          onDecrease={handleDecreaseGuests}
          onIncrease={handleIncreaseGuests}
        />

        <View style={styles.roomSection}>
          <Text style={styles.sectionTitle}>Room preference</Text>
          <Text style={styles.helper}>
            {selectedRoom ? selectedRoom.name : 'No room selected'}
          </Text>

          <Pressable
            onPress={() => setModalVisible(true)}
            style={styles.roomButton}
          >
            <Text style={styles.roomButtonText}>Choose room</Text>
          </Pressable>
        </View>

        <BookingSummary
          destination={destination}
          guestName={guestName}
          guestCount={guestCount}
          room={selectedRoom}
        />

        {error ? <Text style={styles.error}>{error}</Text> : null}
        {confirmed ? (
          <Text style={styles.success}>Reservation ready to submit.</Text>
        ) : null}

        <Pressable onPress={handleConfirm} style={styles.confirmButton}>
          <Text style={styles.confirmText}>Review Reservation</Text>
        </Pressable>
      </ScrollView>

      <RoomPreferenceModal
        visible={modalVisible}
        rooms={roomOptions}
        selectedId={selectedRoomId}
        onSelect={setSelectedRoomId}
        onClose={() => setModalVisible(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { backgroundColor: colors.background, flex: 1 },
  content: { paddingBottom: 32 },
  hero: { height: 220, width: '100%' },
  heading: {
    color: colors.text,
    fontSize: 26,
    fontWeight: '800',
    marginHorizontal: 18,
    marginTop: 20,
  },
  subheading: {
    color: colors.muted,
    fontSize: 15,
    lineHeight: 21,
    marginHorizontal: 18,
    marginTop: 7,
  },
  input: {
    borderColor: colors.line,
    borderRadius: 12,
    borderWidth: 1,
    color: colors.text,
    fontSize: 15,
    marginHorizontal: 18,
    marginTop: 14,
    paddingHorizontal: 14,
    paddingVertical: 14,
  },
  focusLink: {
    color: colors.accent,
    fontSize: 13,
    fontWeight: '700',
    marginHorizontal: 18,
    marginTop: 8,
  },
  roomSection: {
    borderTopColor: colors.line,
    borderTopWidth: 1,
    marginHorizontal: 18,
    paddingTop: 18,
  },
  sectionTitle: { color: colors.text, fontSize: 17, fontWeight: '800' },
  helper: { color: colors.muted, fontSize: 14, marginTop: 5 },
  roomButton: {
    alignItems: 'center',
    borderColor: colors.text,
    borderRadius: 22,
    borderWidth: 1,
    marginTop: 13,
    paddingVertical: 12,
  },
  roomButtonText: { color: colors.text, fontSize: 15, fontWeight: '700' },
  confirmButton: {
    alignItems: 'center',
    backgroundColor: colors.accent,
    borderRadius: 24,
    marginHorizontal: 18,
    marginTop: 20,
    paddingVertical: 15,
  },
  confirmText: { color: '#fff', fontSize: 16, fontWeight: '800' },
  error: {
    color: colors.danger,
    fontSize: 14,
    fontWeight: '700',
    marginHorizontal: 18,
    marginTop: 14,
  },
  success: {
    color: colors.success,
    fontSize: 14,
    fontWeight: '700',
    marginHorizontal: 18,
    marginTop: 14,
  },
});
