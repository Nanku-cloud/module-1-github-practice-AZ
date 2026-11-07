import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="index" />
      <Stack.Screen name="search" />
      <Stack.Screen name="library" />
      <Stack.Screen name="now-playing" />
    </Stack>
  );
}