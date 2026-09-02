import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../utils/theme';

export default function SearchTools({ resultCount }) {
  return (
    <View style={styles.wrap}>
      <View>
        <Text style={styles.heading}>Results</Text>
        <Text style={styles.sub}>{resultCount} products</Text>
      </View>
      <View style={styles.actions}>
        <Pressable style={styles.tool}><Text style={styles.toolText}>Filters</Text><Ionicons name="chevron-down" size={15} /></Pressable>
        <Pressable style={styles.tool}><Text style={styles.toolText}>Sort</Text><Ionicons name="swap-vertical" size={15} /></Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({wrap:{alignItems:'center',backgroundColor:'#fff',borderBottomColor:colors.line,borderBottomWidth:1,flexDirection:'row',justifyContent:'space-between',paddingHorizontal:16,paddingVertical:13},heading:{color:colors.text,fontSize:20,fontWeight:'800'},sub:{color:colors.muted,fontSize:12,marginTop:2},actions:{flexDirection:'row',gap:8},tool:{alignItems:'center',borderColor:'#c7c7c7',borderRadius:18,borderWidth:1,flexDirection:'row',gap:4,paddingHorizontal:12,paddingVertical:7},toolText:{fontSize:13,fontWeight:'600'}});
