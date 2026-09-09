import React, { useMemo, useRef, useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import OrderHeader from '../components/OrderHeader';
import MenuItemHero from '../components/MenuItemHero';
import QuantityControl from '../components/QuantityControl';
import AddOnModal from '../components/AddOnModal';
import OrderSummary from '../components/OrderSummary';
import menuItem from '../data/menuItem';
import { colors } from '../utils/theme';

export default function OrderCustomizerScreen() {
  const [quantity, setQuantity] = useState(1);
  const [instructions, setInstructions] = useState('');
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [orderAdded, setOrderAdded] = useState(false);

  const instructionsRef = useRef(null);
  function handleDecrease() {
    setQuantity((current) => Math.max(1, current - 1));
  }

  function handleIncrease() {
    setQuantity((current) => current + 1);
  }

  function handleToggleAddOn(id) {
    setSelectedAddOns((current) =>
  current.includes(id)
    ? current.filter((itemId) => itemId !== id)
    : [...current, id]
);
  }

  const addOnTotal = menuItem.addOns
  .filter((item) => selectedAddOns.includes(item.id))
  .reduce((sum, item) => sum + item.price, 0);

return (menuItem.basePrice + addOnTotal) * quantity;

  function handleAddOrder() {
    setOrderAdded(true);
  }

  return (
    <SafeAreaView style={styles.screen}>
      <OrderHeader />

      <ScrollView contentContainerStyle={styles.content}>
        <MenuItemHero {...menuItem} price={menuItem.basePrice} />

        <QuantityControl
          quantity={quantity}
          onDecrease={handleDecrease}
          onIncrease={handleIncrease}
        />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Special instructions</Text>

          <TextInput
            ref={instructionsRef}
            multiline
            onChangeText={setInstructions}
            placeholder="Add a note for the kitchen"
            placeholderTextColor={colors.muted}
            style={styles.input}
            value={instructions}
          />

          <Pressable
            // TODO 9: Focus the TextInput with useRef() in Step 4.
            onPress={() => instructionsRef.current?.focus()}
          >
            <Text style={styles.focusLink}>Tap to focus instructions</Text>
          </Pressable>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Add-ons</Text>
          <Text style={styles.helper}>
            Choose extras without overcrowding the main screen.
          </Text>

          <Pressable
            onPress={() => setModalVisible(true)}
            style={styles.secondaryButton}
          >
            <Text style={styles.secondaryText}>Choose add-ons</Text>
          </Pressable>
        </View>

        <OrderSummary
          quantity={quantity}
          selectedCount={selectedAddOns.length}
          total={total}
        />

        {orderAdded ? (
          <Text style={styles.success}>Order added to cart.</Text>
        ) : null}

        <Pressable onPress={handleAddOrder} style={styles.primaryButton}>
          <Text style={styles.primaryText}>Add to Cart · ${total.toFixed(2)}</Text>
        </Pressable>
      </ScrollView>

      <AddOnModal
        visible={modalVisible}
        addOns={menuItem.addOns}
        selectedIds={selectedAddOns}
        onToggle={handleToggleAddOn}
        onClose={() => setModalVisible(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { backgroundColor: colors.background, flex: 1 },
  content: { paddingBottom: 30 },
  section: {
    borderTopColor: colors.line,
    borderTopWidth: 1,
    marginTop: 20,
    paddingHorizontal: 18,
    paddingTop: 18,
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '800',
  },
  helper: {
    color: colors.muted,
    fontSize: 14,
    lineHeight: 20,
    marginTop: 5,
  },
  input: {
    borderColor: colors.line,
    borderRadius: 12,
    borderWidth: 1,
    color: colors.text,
    fontSize: 15,
    marginTop: 12,
    minHeight: 96,
    padding: 14,
    textAlignVertical: 'top',
  },
  focusLink: {
    color: colors.accent,
    fontSize: 13,
    fontWeight: '700',
    marginTop: 8,
  },
  secondaryButton: {
    alignItems: 'center',
    borderColor: colors.text,
    borderRadius: 22,
    borderWidth: 1,
    marginTop: 14,
    paddingVertical: 12,
  },
  secondaryText: { color: colors.text, fontSize: 15, fontWeight: '700' },
  primaryButton: {
    alignItems: 'center',
    backgroundColor: colors.accent,
    borderRadius: 24,
    marginHorizontal: 18,
    marginTop: 20,
    paddingVertical: 15,
  },
  primaryText: { color: '#fff', fontSize: 16, fontWeight: '800' },
  success: {
    color: colors.success,
    fontSize: 14,
    fontWeight: '700',
    marginHorizontal: 18,
    marginTop: 16,
    textAlign: 'center',
  },
});
