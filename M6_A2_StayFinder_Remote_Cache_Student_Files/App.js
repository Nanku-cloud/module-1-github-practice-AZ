import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import BookingScreen from './src/screens/BookingScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.app}>
      <StatusBar style="light" />
      <BookingScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
