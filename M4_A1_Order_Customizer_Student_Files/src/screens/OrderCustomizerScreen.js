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

  // TODO 3: Create instructionsRef with useRef() in Step 4.

  function handleDecrease() {
    // TODO 4: Prevent quantity from going below 1.
  }

  function handleIncrease() {
    // TODO 5: Increase quantity by 1.
  }

  function handleToggleAddOn(id) {
    // TODO 6: Add/remove the selected add-on ID.
  }

  const total = useMemo(() => {
    // TODO 7: Calculate the total in Step 7.
    return menuItem.basePrice;
  }, [quantity, selectedAddOns]);

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
            // TODO 8: Connect ref={instructionsRef} in Step 4.
            multiline
            onChangeText={setInstructions}
            placeholder="Add a note for the kitchen"
            placeholderTextColor={colors.muted}
            style={styles.input}
            value={instructions}
          />

          <Pressable
            // TODO 9: Focus the TextInput with useRef() in Step 4.
            onPress={() => {}}
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
