import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../utils/theme';

export default function BookingSummary({ destination, guestName, guestCount, room }) {
  return (
    <View style={styles.box}>
      <Text style={styles.heading}>Booking summary</Text>
      <Text style={styles.line}>Destination: {destination || 'Not entered'}</Text>
      <Text style={styles.line}>Guest: {guestName || 'Not entered'}</Text>
      <Text style={styles.line}>Guests: {guestCount}</Text>
      <Text style={styles.line}>Room: {room ? room.name : 'Not selected'}</Text>
      {room ? <Text style={styles.price}>${room.nightlyPrice} / night</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.soft,
    borderRadius: 14,
    marginTop: 22,
    padding: 16,
  },
  heading: { color: colors.text, fontSize: 17, fontWeight: '800', marginBottom: 10 },
  line: { color: colors.text, fontSize: 14, marginBottom: 6 },
  price: { color: colors.text, fontSize: 17, fontWeight: '800', marginTop: 6 },
});
