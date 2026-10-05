import React from 'react';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ffffff',
        },
        headerTintColor: '#111827',
        contentStyle: {
          backgroundColor: '#f8fafc',
        },
      }}
    >
      <Stack.Screen
        name="login"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="restaurant/[id]"
        options={{
          title: 'Restaurant',
        }}
      />

      <Stack.Screen
        name="cart/index"
        options={{
          title: 'Your Cart',
        }}
      />

      <Stack.Screen
        name="order/summary"
        options={{
          title: 'Order Summary',
        }}
      />
    </Stack>
  );
}
