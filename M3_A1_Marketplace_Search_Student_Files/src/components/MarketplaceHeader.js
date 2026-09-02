import React from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../utils/theme';

export default function MarketplaceHeader({ query, setQuery, cartCount }) {
  return (
    <View>
      <View style={styles.topBar}>
        <View>
          <Text style={styles.deliverLabel}>Deliver to</Text>
          <Text style={styles.location}>Houston 77089</Text>
        </View>
        <View style={styles.topActions}>
          <Ionicons name="person-outline" size={24} color="#fff" />
          <View style={styles.cartWrap}>
            <Ionicons name="cart-outline" size={27} color="#fff" />
            <Text style={styles.cartCount}>{cartCount}</Text>
          </View>
        </View>
      </View>

      <View style={styles.searchArea}>
        <View style={styles.searchBox}>
          <Ionicons name="search" size={20} color="#303333" />
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="Search products"
            placeholderTextColor="#6b7275"
            style={styles.input}
          />
          <Ionicons name="camera-outline" size={21} color="#4a5255" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topBar:{alignItems:'center',backgroundColor:colors.header,flexDirection:'row',justifyContent:'space-between',paddingHorizontal:16,paddingTop:14,paddingBottom:11},
  deliverLabel:{color:'#c7d0d4',fontSize:11}, location:{color:'#fff',fontSize:14,fontWeight:'700'}, topActions:{alignItems:'center',flexDirection:'row',gap:20}, cartWrap:{position:'relative'}, cartCount:{color:'#ffb400',fontSize:12,fontWeight:'900',position:'absolute',right:-5,top:-9},
  searchArea:{backgroundColor:colors.headerAlt,paddingHorizontal:12,paddingBottom:12}, searchBox:{alignItems:'center',backgroundColor:'#fff',borderRadius:8,flexDirection:'row',height:46,paddingHorizontal:12}, input:{flex:1,fontSize:15,paddingHorizontal:9},
});
