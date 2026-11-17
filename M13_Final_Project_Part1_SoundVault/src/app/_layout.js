import { Stack } from 'expo-router';
import { AppProvider } from '../context/AppContext';

export default function RootLayout() {
    return (
        <AppProvider>
            <Stack
                screenOptions={{
                    headerStyle: { backgroundColor: '#121212' },
                    headerTintColor: '#fff',
                    headerTitleStyle: { fontWeight: 'bold' },
                }}
            >
                <Stack.Screen name="index" options={{ title: 'SoundVault Home' }} />
                <Stack.Screen name="search" options={{ title: 'Search Tracks' }} />
                <Stack.Screen name="details" options={{ title: 'Track Details' }} />
                <Stack.Screen name="library" options={{ title: 'My Library' }} />
                <Stack.Screen name="profile" options={{ title: 'User Profile' }} />
            </Stack>
        </AppProvider>
    );
}