import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function HotelRow({ hotel }) {
  return (
    <View style={styles.row}>
      <View style={styles.main}>
        <Text style={styles.name}>
          {hotel.name}
        </Text>
        <Text style={styles.neighborhood}>
          {hotel.neighborhood}
        </Text>
        <Text style={styles.note}>
          Free cancellation options available
        </Text>
      </View>

      <View style={styles.side}>
        <View style={styles.ratingBadge}>
          <Text style={styles.ratingText}>
            {hotel.rating}
          </Text>
        </View>
        <Text style={styles.price}>
          ${hotel.price}
        </Text>
        <Text style={styles.night}>per night</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    backgroundColor: '#ffffff',
  },
  main: {
    flex: 1,
  },
  side: {
    width: 92,
    alignItems: 'flex-end',
  },
  name: {
    color: '#0071c2',
    fontSize: 16,
    fontWeight: '900',
  },
  neighborhood: {
    marginTop: 3,
    color: '#374151',
    fontSize: 12,
    fontWeight: '700',
  },
  note: {
    marginTop: 7,
    color: '#047857',
    fontSize: 11,
    fontWeight: '700',
  },
  ratingBadge: {
    backgroundColor: '#003b95',
    minWidth: 38,
    alignItems: 'center',
    borderRadius: 6,
    paddingVertical: 5,
    paddingHorizontal: 7,
  },
  ratingText: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '900',
  },
  price: {
    marginTop: 12,
    color: '#111827',
    fontSize: 17,
    fontWeight: '900',
  },
  night: {
    color: '#6b7280',
    fontSize: 10,
  },
});
