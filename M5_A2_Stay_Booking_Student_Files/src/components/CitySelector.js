import React from 'react';
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';

export default function CitySelector({ cities, selectedCityId, onSelect }) {
  return (
    <View>
      <View style={styles.chips}>
        {cities.map((city) => {
          const active = city.id === selectedCityId;
          return (
            <Pressable
              key={city.id}
              onPress={() => onSelect(city.id)}
              style={[styles.chip, active && styles.chipActive]}
            >
              <Text style={[styles.chipText, active && styles.chipTextActive]}>
                {city.name}
              </Text>
            </Pressable>
          );
        })}
      </View>

      {cities
        .filter((city) => city.id === selectedCityId)
        .map((city) => (
          <ImageBackground
            key={city.id}
            source={city.hero}
            style={styles.hero}
            imageStyle={styles.heroImage}
          >
            <View style={styles.overlay}>
              <Text style={styles.cityName}>{city.name}</Text>
              <Text style={styles.stateName}>{city.state}</Text>
            </View>
          </ImageBackground>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  chips: {
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 12,
    backgroundColor: '#fff',
  },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#cbd5e1',
    backgroundColor: '#fff',
  },
  chipActive: { backgroundColor: '#e8f0fe', borderColor: '#006ce4' },
  chipText: { color: '#334155', fontWeight: '700' },
  chipTextActive: { color: '#0057b8' },
  hero: {
    height: 180,
    marginHorizontal: 16,
    justifyContent: 'flex-end',
  },
  heroImage: { borderRadius: 14 },
  overlay: {
    padding: 18,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
    backgroundColor: 'rgba(15,23,42,0.55)',
  },
  cityName: { color: '#fff', fontSize: 28, fontWeight: '900', letterSpacing: -0.8 },
  stateName: { marginTop: 2, color: '#e2e8f0', fontWeight: '700' },
});
