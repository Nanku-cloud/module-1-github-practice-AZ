import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HotelCard({ hotel, isSaved, onToggleSave }) {
  return (
    <View style={styles.card}>
      <Image source={hotel.image} style={styles.image} />

      <View style={styles.body}>
        <View style={styles.titleRow}>
          <View style={styles.titleWrap}>
            <Text numberOfLines={2} style={styles.name}>{hotel.name}</Text>
            <Text style={styles.neighborhood}>{hotel.neighborhood}</Text>
          </View>

          <Pressable onPress={() => onToggleSave(hotel)} style={styles.heartButton}>
            <Ionicons
              name={isSaved ? 'heart' : 'heart-outline'}
              size={22}
              color={isSaved ? '#d90429' : '#0f172a'}
            />
          </Pressable>
        </View>

        <View style={styles.ratingRow}>
          <View style={styles.ratingBadge}>
            <Text style={styles.ratingText}>{hotel.rating}</Text>
          </View>
          <Text style={styles.reviewText}>{hotel.reviewCount} reviews</Text>
        </View>

        <Text style={styles.perk}>{hotel.perk}</Text>
        <Text style={styles.room}>{hotel.room} · {hotel.nights} nights</Text>

        <View style={styles.priceRow}>
          <Text style={styles.price}>${hotel.price}</Text>
          <Text style={styles.priceNote}>per night</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    gap: 12,
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    backgroundColor: '#fff',
  },
  image: { width: 126, height: 126, borderRadius: 10, backgroundColor: '#e2e8f0' },
  body: { flex: 1 },
  titleRow: { flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 },
  titleWrap: { flex: 1 },
  name: { color: '#0f172a', fontSize: 16, fontWeight: '900', lineHeight: 20 },
  neighborhood: { marginTop: 3, color: '#475569', fontSize: 12 },
  heartButton: { width: 36, height: 36, borderRadius: 18, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8fafc' },
  ratingRow: { marginTop: 8, flexDirection: 'row', alignItems: 'center', gap: 7 },
  ratingBadge: { minWidth: 34, paddingVertical: 5, paddingHorizontal: 7, borderRadius: 6, backgroundColor: '#003b95', alignItems: 'center' },
  ratingText: { color: '#fff', fontWeight: '900', fontSize: 12 },
  reviewText: { color: '#64748b', fontSize: 12 },
  perk: { marginTop: 8, color: '#047857', fontWeight: '800', fontSize: 12 },
  room: { marginTop: 4, color: '#475569', fontSize: 12 },
  priceRow: { marginTop: 9, flexDirection: 'row', alignItems: 'baseline', gap: 5 },
  price: { color: '#0f172a', fontSize: 21, fontWeight: '900' },
  priceNote: { color: '#64748b', fontSize: 11 },
});
