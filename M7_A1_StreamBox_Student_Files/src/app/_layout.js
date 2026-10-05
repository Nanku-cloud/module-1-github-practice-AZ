import React from 'react';
import { Stack } from 'expo-router';
export default function RootLayout(){return <Stack screenOptions={{headerStyle:{backgroundColor:'#08090c'},headerTintColor:'#fff',contentStyle:{backgroundColor:'#08090c'}}}><Stack.Screen name="(tabs)" options={{headerShown:false}}/><Stack.Screen name="title/[id]" options={{title:'Details'}}/></Stack>;}
