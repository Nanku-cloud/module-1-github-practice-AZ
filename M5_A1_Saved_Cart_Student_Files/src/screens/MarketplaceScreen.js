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

import MarketHeader from '../components/MarketHeader';
import ProductRow from '../components/ProductRow';
import CartRow from '../components/CartRow';
import CartSummary from '../components/CartSummary';
import { products } from '../data/products';
import { clearSavedCart, loadCart, saveCart } from '../services/cartStorage';

export default function MarketplaceScreen() {
  const [search, setSearch] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [storageError, setStorageError] = useState('');
  const [activeTab, setActiveTab] = useState('shop');

  // TODO 4:
  // Use useEffect() to restore the saved cart when this screen first loads.
  // Required flow:
  // isLoading true -> loadCart() -> setCartItems() -> catch error -> finally setIsLoading(false)

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.trim().toLowerCase())
  );

  async function addToCart(product) {
    // TODO 5:
    // If item already exists, increase its quantity.
    // Otherwise add it with quantity: 1.
    // Then update state AND call saveCart(updatedCart).
  }

  async function increaseQuantity(productId) {
    // TODO 6:
    // Increase only the matching item's quantity.
    // Update state and save the same updated array.
  }

  async function decreaseQuantity(productId) {
    // TODO 7:
    // If quantity is greater than 1, decrease it.
    // If quantity would become 0, remove the item.
    // Update state and storage.
  }

  async function removeFromCart(productId) {
    // TODO 8:
    // Use filter() to remove the matching id.
    // Update state and storage.
  }

  async function clearCart() {
    // TODO 9:
    // Call clearSavedCart(), then setCartItems([]).
  }

  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (isLoading) {
    return (
      <View style={styles.centerState}>
        <ActivityIndicator size="large" />
        <Text style={styles.stateTitle}>Loading your saved cart...</Text>
        <Text style={styles.stateText}>Northstar is restoring local data.</Text>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <MarketHeader
        search={search}
        onChangeSearch={setSearch}
        cartCount={totalItems}
      />

      <View style={styles.tabs}>
        <Pressable onPress={() => setActiveTab('shop')} style={[styles.tab, activeTab === 'shop' && styles.tabActive]}>
          <Text style={[styles.tabText, activeTab === 'shop' && styles.tabTextActive]}>Shop</Text>
        </Pressable>
        <Pressable onPress={() => setActiveTab('cart')} style={[styles.tab, activeTab === 'cart' && styles.tabActive]}>
          <Text style={[styles.tabText, activeTab === 'cart' && styles.tabTextActive]}>Cart ({totalItems})</Text>
        </Pressable>
      </View>

      {storageError !== '' && (
        <View style={styles.errorBanner}>
          <Text style={styles.errorText}>{storageError}</Text>
        </View>
      )}

      {activeTab === 'shop' ? (
        <FlatList
          data={filteredProducts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ProductRow product={item} onAdd={addToCart} />
          )}
          ListHeaderComponent={
            <View style={styles.listHeader}>
              <Text style={styles.eyebrow}>CURATED TECH</Text>
              <Text style={styles.heading}>Everyday upgrades</Text>
              <Text style={styles.subheading}>A clean, current marketplace layout with compact product rows and fast cart actions.</Text>
            </View>
          }
        />
      ) : (
        <ScrollView contentContainerStyle={styles.cartContent}>
          <Text style={styles.cartHeading}>Your cart</Text>

          {cartItems.length === 0 ? (
            <View style={styles.emptyCard}>
              <Text style={styles.emptyTitle}>Your cart is empty</Text>
              <Text style={styles.emptyText}>Add a product from the Shop tab, then refresh the app to prove persistence works.</Text>
            </View>
          ) : (
            <>
              {cartItems.map((item) => (
                <CartRow
                  key={item.id}
                  item={item}
                  onDecrease={decreaseQuantity}
                  onIncrease={increaseQuantity}
                  onRemove={removeFromCart}
                />
              ))}

              <CartSummary
                totalItems={totalItems}
                subtotal={subtotal}
                onClear={clearCart}
              />
            </>
          )}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#ffffff' },
  centerState: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24, backgroundColor: '#fff' },
  stateTitle: { marginTop: 14, fontSize: 18, fontWeight: '900', color: '#111827' },
  stateText: { marginTop: 6, fontSize: 14, color: '#6b7280', textAlign: 'center' },
  tabs: { flexDirection: 'row', paddingHorizontal: 16, borderBottomWidth: 1, borderBottomColor: '#e5e7eb', backgroundColor: '#fff' },
  tab: { marginRight: 24, paddingVertical: 12, borderBottomWidth: 3, borderBottomColor: 'transparent' },
  tabActive: { borderBottomColor: '#111827' },
  tabText: { color: '#6b7280', fontWeight: '700' },
  tabTextActive: { color: '#111827' },
  errorBanner: { backgroundColor: '#fff1f2', borderBottomWidth: 1, borderBottomColor: '#fecdd3', paddingHorizontal: 16, paddingVertical: 10 },
  errorText: { color: '#9f1239', fontWeight: '700' },
  listHeader: { paddingHorizontal: 16, paddingTop: 18, paddingBottom: 10 },
  eyebrow: { fontSize: 11, fontWeight: '900', color: '#b45309', letterSpacing: 1.1 },
  heading: { marginTop: 5, fontSize: 27, fontWeight: '900', letterSpacing: -0.8, color: '#111827' },
  subheading: { marginTop: 6, maxWidth: 520, fontSize: 14, lineHeight: 20, color: '#6b7280' },
  cartContent: { padding: 16, paddingBottom: 48 },
  cartHeading: { fontSize: 28, fontWeight: '900', color: '#111827', marginBottom: 6, letterSpacing: -0.8 },
  emptyCard: { marginTop: 18, borderWidth: 1, borderColor: '#e5e7eb', borderRadius: 12, padding: 22, backgroundColor: '#f9fafb' },
  emptyTitle: { fontSize: 18, fontWeight: '900', color: '#111827' },
  emptyText: { marginTop: 7, lineHeight: 20, color: '#6b7280' }
});
