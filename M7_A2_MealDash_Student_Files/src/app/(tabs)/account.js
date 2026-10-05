import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  useRouter,
} from 'expo-router';

export default function AccountScreen() {
  const router = useRouter();

  function handleLogout() {
    // TODO 5:
    // Return to the login screen using:
    // router.replace('/login')
  }

  return (
    <View style={styles.screen}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>
          MD
        </Text>
      </View>

      <Text style={styles.name}>
        MealDash Demo User
      </Text>

      <Text style={styles.note}>
        Simulated account for Module 7 navigation practice.
      </Text>

      <Pressable
        onPress={handleLogout}
        style={styles.logout}
      >
        <Text style={styles.logoutText}>
          Log Out
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    padding: 24,
    paddingTop: 60,
  },
  avatar: {
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: '#ef4444',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '900',
  },
  name: {
    color: '#111827',
    fontSize: 21,
    fontWeight: '900',
    marginTop: 14,
  },
  note: {
    color: '#6b7280',
    marginTop: 6,
    textAlign: 'center',
  },
  logout: {
    marginTop: 30,
    borderWidth: 1,
    borderColor: '#ef4444',
    borderRadius: 10,
    paddingHorizontal: 22,
    paddingVertical: 12,
  },
  logoutText: {
    color: '#ef4444',
    fontWeight: '900',
  },
});
