import React from 'react';
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export function LoadingState() {
  return (
    <View style={styles.center}>
      <ActivityIndicator size="large" />
      <Text style={styles.title}>
        Loading destination data...
      </Text>
    </View>
  );
}

export function ErrorState({
  message,
  onRetry,
}) {
  return (
    <View style={styles.center}>
      <Text style={styles.errorTitle}>
        Destination data unavailable
      </Text>
      <Text style={styles.text}>
        {message}
      </Text>
      <Pressable
        onPress={onRetry}
        style={styles.button}
      >
        <Text style={styles.buttonText}>
          Try Again
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 28,
    backgroundColor: '#ffffff',
  },
  title: {
    marginTop: 12,
    color: '#111827',
    fontSize: 18,
    fontWeight: '900',
  },
  errorTitle: {
    color: '#9f1239',
    fontSize: 18,
    fontWeight: '900',
  },
  text: {
    marginTop: 8,
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 20,
  },
  button: {
    marginTop: 16,
    backgroundColor: '#003b95',
    borderRadius: 6,
    paddingHorizontal: 18,
    paddingVertical: 11,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '900',
  },
});
