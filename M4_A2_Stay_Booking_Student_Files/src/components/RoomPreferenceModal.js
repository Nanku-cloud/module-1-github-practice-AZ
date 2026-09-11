import React from 'react';
import { Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../utils/theme';

export default function RoomPreferenceModal({
  visible,
  rooms,
  selectedId,
  onSelect,
  onClose,
}) {
  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.sheet}>
          <View style={styles.header}>
            <Text style={styles.title}>Choose a room</Text>
            <Pressable onPress={onClose}>
              <Ionicons name="close" size={26} color={colors.text} />
            </Pressable>
          </View>

          <ScrollView>
            {rooms.map((room) => (
  <Pressable
    key={room.id}
    onPress={() => {
      onSelect(room.id);
      onClose();
    }}
    style={styles.room}
  >
    <View style={styles.roomTop}>
      <Text style={styles.roomName}>{room.name}</Text>

      <Ionicons
        name={
          selectedId === room.id
            ? 'checkmark-circle'
            : 'ellipse-outline'
        }
        size={24}
        color={
          selectedId === room.id
            ? colors.accent
            : colors.muted
        }
      />
    </View>

    <Text style={styles.description}>
      {room.description}
    </Text>

    <Text style={styles.price}>
      ${room.nightlyPrice} / night
    </Text>
  </Pressable>
))}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.45)',
    flex: 1,
    justifyContent: 'flex-end',
  },
  sheet: {
    backgroundColor: colors.background,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    maxHeight: '70%',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  title: { color: colors.text, fontSize: 21, fontWeight: '800' },
  room: {
    borderBottomColor: colors.line,
    borderBottomWidth: 1,
    paddingVertical: 16,
  },
  roomTop: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
  roomName: { color: colors.text, fontSize: 16, fontWeight: '700' },
  description: { color: colors.muted, fontSize: 13, lineHeight: 18, marginTop: 4 },
  price: { color: colors.text, fontSize: 14, fontWeight: '700', marginTop: 5 },
});
