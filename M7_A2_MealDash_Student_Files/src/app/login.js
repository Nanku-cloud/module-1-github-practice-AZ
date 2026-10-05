import React, {
  useState,
} from 'react';

import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import {
  useRouter,
} from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();

  const [email, setEmail] =
    useState('');

  const [password, setPassword] =
    useState('');

  const [errorMessage, setErrorMessage] =
    useState('');

  function handleContinue() {
    // TODO 1:
    // If email or password is blank,
    // show:
    // "Enter your email and password."
    //
    // Otherwise:
    // 1. clear the error
    // 2. use router.replace('/(tabs)')
  }

  return (
    <View style={styles.screen}>
      <View style={styles.logo}>
        <Text style={styles.logoText}>
          MD
        </Text>
      </View>

      <Text style={styles.title}>
        Welcome to MealDash
      </Text>

      <Text style={styles.subtitle}>
        Sign in to browse nearby restaurants.
      </Text>

      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email address"
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />

      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
        style={styles.input}
      />

      {errorMessage !== '' && (
        <Text style={styles.error}>
          {errorMessage}
        </Text>
      )}

      <Pressable
        onPress={handleContinue}
        style={styles.button}
      >
        <Text style={styles.buttonText}>
          Continue
        </Text>
      </Pressable>

      <Text style={styles.note}>
        Module 7 uses a simulated login only.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    padding: 24,
  },
  logo: {
    width: 66,
    height: 66,
    borderRadius: 18,
    backgroundColor: '#ef4444',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 22,
  },
  logoText: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '900',
  },
  title: {
    color: '#111827',
    fontSize: 30,
    fontWeight: '900',
  },
  subtitle: {
    color: '#6b7280',
    marginTop: 7,
    marginBottom: 24,
    fontSize: 15,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 10,
    paddingHorizontal: 14,
    marginBottom: 12,
    backgroundColor: '#ffffff',
  },
  error: {
    color: '#b91c1c',
    marginBottom: 12,
    fontWeight: '700',
  },
  button: {
    backgroundColor: '#ef4444',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '900',
  },
  note: {
    color: '#9ca3af',
    marginTop: 18,
    textAlign: 'center',
    fontSize: 12,
  },
});
