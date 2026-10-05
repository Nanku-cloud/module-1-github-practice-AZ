import React from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';

export default function CitySelector({
  cities,
  selectedCityId,
  onSelectCity,
}) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.content}
      style={styles.wrap}
    >
      {cities.map((city) => {
        const active =
          city.id === selectedCityId;

        return (
          <Pressable
            key={city.id}
            onPress={() =>
              onSelectCity(city.id)
            }
            style={[
              styles.chip,
              active && styles.chipActive,
            ]}
          >
            <Text
              style={[
                styles.label,
                active && styles.labelActive,
              ]}
            >
              {city.name}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrap: {
    maxHeight: 55,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    gap: 8,
  },
  chip: {
    borderWidth: 1,
    borderColor: '#bfdbfe',
    borderRadius: 18,
    paddingVertical: 7,
    paddingHorizontal: 14,
    backgroundColor: '#eff6ff',
  },
  chipActive: {
    backgroundColor: '#003b95',
    borderColor: '#003b95',
  },
  label: {
    color: '#003b95',
    fontSize: 12,
    fontWeight: '800',
  },
  labelActive: {
    color: '#ffffff',
  },
});
