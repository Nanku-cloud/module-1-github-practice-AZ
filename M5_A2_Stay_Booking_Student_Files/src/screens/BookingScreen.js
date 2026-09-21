import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import BookingHeader from '../components/BookingHeader';
import CitySelector from '../components/CitySelector';
import HotelCard from '../components/HotelCard';
import SavedPanel from '../components/SavedPanel';
import { cities, hotels } from '../data/hotels';
import {
  clearSavedHotels,
  loadHotels,
  loadSelectedCity,
  saveHotels,
  saveSelectedCity,
} from '../services/bookingStorage';

export default function BookingScreen() {
  const [selectedCityId, setSelectedCityId] = useState('houston');
  const [savedHotels, setSavedHotels] = useState([]);
  const [activeTab, setActiveTab] = useState('stays');
  const [isLoading, setIsLoading] = useState(true);
  const [storageError, setStorageError] = useState('');

  // TODO 6:
  // Restore BOTH saved hotels and selected city when this screen loads.
  // Use try/catch/finally and end with isLoading false.

  const visibleHotels = hotels.filter(
    (hotel) => hotel.cityId === selectedCityId
  );

  async function handleSelectCity(cityId) {
    // TODO 7:
    // Update selectedCityId and persist the selected city.
  }

  async function toggleSavedHotel(hotel) {
    // TODO 8:
    // If hotel is already saved, remove it.
    // Otherwise add it.
    // Update React state and AsyncStorage using the SAME updated array.
  }

  async function removeSavedHotel(hotelId) {
    // TODO 9:
    // Remove only the selected hotel from savedHotels.
    // Update state and storage.
  }

  async function clearAllSavedHotels() {
    // TODO 10:
    // Remove only the saved-hotels storage key and set state to [].
  }

  const isSaved = (hotelId) =>
    savedHotels.some((hotel) => hotel.id === hotelId);

  if (isLoading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" />
        <Text style={styles.loadingTitle}>Loading your saved stays...</Text>
        <Text style={styles.loadingText}>StayFinder is restoring local travel data.</Text>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <BookingHeader savedCount={savedHotels.length} />

      <View style={styles.tabs}>
        <Pressable onPress={() => setActiveTab('stays')} style={[styles.tab, activeTab === 'stays' && styles.tabActive]}>
          <Text style={[styles.tabText, activeTab === 'stays' && styles.tabTextActive]}>Stays</Text>
        </Pressable>
        <Pressable onPress={() => setActiveTab('saved')} style={[styles.tab, activeTab === 'saved' && styles.tabActive]}>
          <Text style={[styles.tabText, activeTab === 'saved' && styles.tabTextActive]}>Saved ({savedHotels.length})</Text>
        </Pressable>
      </View>

      {storageError !== '' && (
        <View style={styles.errorBanner}>
          <Text style={styles.errorText}>{storageError}</Text>
        </View>
      )}

      {activeTab === 'stays' ? (
        <FlatList
          data={visibleHotels}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <HotelCard
              hotel={item}
              isSaved={isSaved(item.id)}
              onToggleSave={toggleSavedHotel}
            />
          )}
          ListHeaderComponent={
            <View>
              <CitySelector
                cities={cities}
                selectedCityId={selectedCityId}
                onSelect={handleSelectCity}
              />

              <View style={styles.resultsHeader}>
                <Text style={styles.resultsTitle}>Places to stay</Text>
                <Text style={styles.resultsText}>Compare two starter properties in each city, then replace all placeholder images with accurate real-city and real-hotel photos.</Text>
              </View>
            </View>
          }
        />
      ) : (
        <ScrollView>
          <SavedPanel
            savedHotels={savedHotels}
            onRemove={removeSavedHotel}
            onClear={clearAllSavedHotels}
          />
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#fff' },
  loading: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24, backgroundColor: '#fff' },
  loadingTitle: { marginTop: 14, color: '#0f172a', fontSize: 18, fontWeight: '900' },
  loadingText: { marginTop: 6, color: '#64748b', textAlign: 'center' },
  tabs: { flexDirection: 'row', paddingHorizontal: 16, borderBottomWidth: 1, borderBottomColor: '#dbe3ee', backgroundColor: '#fff' },
  tab: { marginRight: 24, paddingVertical: 12, borderBottomWidth: 3, borderBottomColor: 'transparent' },
  tabActive: { borderBottomColor: '#006ce4' },
  tabText: { color: '#64748b', fontWeight: '800' },
  tabTextActive: { color: '#0057b8' },
  errorBanner: { backgroundColor: '#fff1f2', borderBottomWidth: 1, borderBottomColor: '#fecdd3', paddingHorizontal: 16, paddingVertical: 10 },
  errorText: { color: '#9f1239', fontWeight: '700' },
  resultsHeader: { paddingHorizontal: 16, paddingTop: 20, paddingBottom: 8, backgroundColor: '#fff' },
  resultsTitle: { color: '#0f172a', fontSize: 24, fontWeight: '900', letterSpacing: -0.7 },
  resultsText: { marginTop: 6, color: '#64748b', lineHeight: 20, fontSize: 13 },
});
