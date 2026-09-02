import React, { useEffect, useMemo, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import MarketplaceHeader from '../components/MarketplaceHeader';
import SearchTools from '../components/SearchTools';
import ProductResult from '../components/ProductResult';
import LoadingState from '../components/LoadingState';
import EmptyResults from '../components/EmptyResults';
import BottomNavigation from '../components/BottomNavigation';
import products from '../data/products';
import { colors } from '../utils/theme';

export default function SearchResultsScreen() {
  const [query, setQuery] = useState('');
  const [cartIds, setCartIds] = useState([]);
  const [loading, setLoading] = useState(true);

  // TODO 4: Add the loading useEffect from Step 4.

  // TODO 5: Complete the filtered product list from Step 5.
  const visibleProducts = products;

  function handleAddToCart(id) {
    // TODO 6: Update cartIds using the code from Step 6.
  }

  function renderProduct({ item }) {
    // TODO 7: Return ProductResult with the props from Step 7.
    return null;
  }

  return (
    <SafeAreaView style={styles.screen}>
      <MarketplaceHeader query={query} setQuery={setQuery} cartCount={cartIds.length} />
      {/* TODO 8: Replace this section with the loading/FlatList code from Step 8. */}
      <SearchTools resultCount={products.length} />
      <BottomNavigation cartCount={cartIds.length} />
    </SafeAreaView>
  );
}
const styles=StyleSheet.create({screen:{backgroundColor:colors.background,flex:1},emptyList:{flexGrow:1}});
