import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function TravelConditionsCard({
  city,
  weather,
  sourceLabel,
  lastUpdatedLabel,
}) {
  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <View>
          <Text style={styles.eyebrow}>
            LIVE DESTINATION CONDITIONS
          </Text>
          <Text style={styles.city}>
            {city.name}, {city.state}
          </Text>
        </View>

        <View style={styles.tempBox}>
          <Text style={styles.temp}>
            {Math.round(weather.temperature)}°
          </Text>
        </View>
      </View>

      <View style={styles.grid}>
        <View style={styles.stat}>
          <Text style={styles.statLabel}>Feels like</Text>
          <Text style={styles.statValue}>
            {Math.round(weather.apparentTemperature)}°
          </Text>
        </View>

        <View style={styles.stat}>
          <Text style={styles.statLabel}>Wind</Text>
          <Text style={styles.statValue}>
            {Math.round(weather.windSpeed)} mph
          </Text>
        </View>

        <View style={styles.stat}>
          <Text style={styles.statLabel}>Code</Text>
          <Text style={styles.statValue}>
            {weather.weatherCode}
          </Text>
        </View>
      </View>

      <View style={styles.metaRow}>
        <Text style={styles.meta}>
          Source: {sourceLabel}
        </Text>
        <Text style={styles.meta}>
          {lastUpdatedLabel}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#dbeafe',
    backgroundColor: '#f8fbff',
    borderRadius: 12,
    padding: 16,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 14,
  },
  eyebrow: {
    color: '#003b95',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1,
  },
  city: {
    marginTop: 5,
    color: '#111827',
    fontSize: 22,
    fontWeight: '900',
  },
  tempBox: {
    minWidth: 64,
    alignItems: 'flex-end',
  },
  temp: {
    color: '#003b95',
    fontSize: 34,
    fontWeight: '900',
  },
  grid: {
    marginTop: 14,
    flexDirection: 'row',
    gap: 8,
  },
  stat: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 9,
    padding: 10,
  },
  statLabel: {
    color: '#6b7280',
    fontSize: 11,
    fontWeight: '700',
  },
  statValue: {
    marginTop: 3,
    color: '#111827',
    fontSize: 16,
    fontWeight: '900',
  },
  metaRow: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  meta: {
    color: '#6b7280',
    fontSize: 10,
    fontWeight: '700',
  },
});
