import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../utils/theme';
export default function EmptyResults(){return <View style={styles.wrap}><Ionicons name="search-outline" size={42} color="#7b8386"/><Text style={styles.title}>No results found</Text><Text style={styles.text}>Try checking your spelling or using fewer search terms.</Text></View>}
const styles=StyleSheet.create({wrap:{alignItems:'center',paddingHorizontal:40,paddingVertical:70},title:{color:colors.text,fontSize:20,fontWeight:'800',marginTop:14},text:{color:colors.muted,fontSize:14,lineHeight:20,marginTop:7,textAlign:'center'}});
