import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MarketplaceScreen from './src/screens/MarketplaceScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.app}>
      <StatusBar style="dark" />
      <MarketplaceScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: { flex: 1, backgroundColor: '#ffffff' },
});
