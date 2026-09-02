import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { colors } from '../utils/theme';
export default function LoadingState(){return <View style={styles.wrap}><ActivityIndicator size="large" color={colors.header}/><Text style={styles.title}>Loading products...</Text></View>}
const styles=StyleSheet.create({wrap:{alignItems:'center',flex:1,justifyContent:'center',padding:32},title:{color:colors.text,fontSize:16,fontWeight:'700',marginTop:14}});
