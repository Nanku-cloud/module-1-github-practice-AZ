import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function BookingHeader({
  onRefresh,
  isRefreshing,
}) {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.brand}>StayFinder</Text>
        <Text style={styles.sub}>REMOTE TRAVEL DATA</Text>
      </View>

      <Pressable
        onPress={onRefresh}
        disabled={isRefreshing}
        style={styles.refresh}
      >
        <Ionicons
          name="refresh"
          size={18}
          color="#003b95"
        />
        <Text style={styles.refreshText}>
          {isRefreshing ? 'Refreshing' : 'Refresh'}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#003b95',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  brand: {
    color: '#ffffff',
    fontSize: 26,
    fontWeight: '900',
    letterSpacing: -0.8,
  },
  sub: {
    color: '#dbeafe',
    marginTop: 2,
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1.1,
  },
  refresh: {
    backgroundColor: '#ffffff',
    borderRadius: 18,
    minHeight: 36,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 12,
  },
  refreshText: {
    color: '#003b95',
    fontSize: 12,
    fontWeight: '900',
  },
});
