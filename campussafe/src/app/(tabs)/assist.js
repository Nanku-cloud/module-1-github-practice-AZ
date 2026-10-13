import React, { useState } from 'react';
import {
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';

import { securityContact } from '../../config/security';
import { colors } from '../../styles/theme';

export default function AssistScreen() {
  const [location, setLocation] = useState(null);
  const [isLocating, setIsLocating] = useState(false);
  const [permissionStatus, setPermissionStatus] = useState('not-requested');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleGetLocation() {
    setIsLocating(true);
    setErrorMessage('');

    try {
      // TODO 1:
      // Request foreground location permission.
      // Save the returned status in permissionStatus.

      // TODO 2:
      // If permission is not granted:
      // - show a clear message
      // - stop this function with return

      // TODO 3:
      // Request the current device position.

      // TODO 4:
      // Save the returned location with setLocation().
    }
    catch (error) {
      setErrorMessage(
        'CampusSafe could not determine your location. You can try again or contact campus security without sharing location.'
      );
    }
    finally {
      setIsLocating(false);
    }
  }

  async function handleSecurityCall() {
    const supported = await Linking.canOpenURL(
      `tel:${securityContact.phoneDial}`
    );

    if (supported) {
      await Linking.openURL(`tel:${securityContact.phoneDial}`);
      return;
    }

    setErrorMessage(
      `Calling is not available here. Campus Security: ${securityContact.phoneDisplay}`
    );
  }

  const permissionLabel =
    permissionStatus === 'granted'
      ? 'Location allowed'
      : permissionStatus === 'denied'
      ? 'Location not shared'
      : 'Location not requested';

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.topRow}>
        <View>
          <Text style={styles.eyebrow}>ASSISTANCE</Text>
          <Text style={styles.title}>Get help without losing control.</Text>
        </View>
        <View style={styles.shield}>
          <Ionicons name="shield-checkmark" size={24} color={colors.paper} />
        </View>
      </View>

      <View style={styles.permissionCard}>
        <View style={styles.permissionIcon}>
          <Ionicons name="location-outline" size={24} color={colors.blue} />
        </View>

        <View style={styles.permissionCopy}>
          <Text style={styles.permissionTitle}>{permissionLabel}</Text>
          <Text style={styles.permissionText}>
            CampusSafe requests foreground location only when you choose
            to identify your current position.
          </Text>
        </View>
      </View>

      <View style={styles.locationPanel}>
        <Text style={styles.panelEyebrow}>CURRENT POSITION</Text>
        <Text style={styles.panelTitle}>
          {location
            ? 'Location available'
            : 'Your location has not been shared'}
        </Text>

        {location ? (
          <View style={styles.coordGrid}>
            <View style={styles.coordCard}>
              <Text style={styles.coordLabel}>LATITUDE</Text>
              <Text style={styles.coordValue}>
                {location.coords.latitude.toFixed(5)}
              </Text>
            </View>

            <View style={styles.coordCard}>
              <Text style={styles.coordLabel}>LONGITUDE</Text>
              <Text style={styles.coordValue}>
                {location.coords.longitude.toFixed(5)}
              </Text>
            </View>
          </View>
        ) : (
          <View style={styles.placeholder}>
            <Ionicons name="navigate-outline" size={28} color={colors.blue} />
            <Text style={styles.placeholderText}>
              Use location only when it supports the task you are performing.
            </Text>
          </View>
        )}

        {isLocating && (
          <View style={styles.stateMessage}>
            <Ionicons name="radio-outline" size={18} color={colors.blue} />
            <Text style={styles.stateText}>Finding your location...</Text>
          </View>
        )}

        {errorMessage !== '' && (
          <View style={styles.errorBox}>
            <Ionicons name="alert-circle-outline" size={19} color={colors.danger} />
            <Text style={styles.errorText}>{errorMessage}</Text>
          </View>
        )}

        <Pressable
          style={styles.primaryButton}
          onPress={handleGetLocation}
          disabled={isLocating}
        >
          <Ionicons
            name={location ? 'refresh-outline' : 'locate-outline'}
            size={19}
            color={colors.paper}
          />
          <Text style={styles.primaryButtonText}>
            {location ? 'Refresh My Location' : 'Get My Location'}
          </Text>
        </Pressable>

        {(errorMessage !== '' || permissionStatus === 'denied') && (
          <Pressable
            style={styles.retryButton}
            onPress={handleGetLocation}
          >
            <Text style={styles.retryText}>Try Again</Text>
          </Pressable>
        )}
      </View>

      <View style={styles.securityCard}>
        <View style={styles.securityHeader}>
          <View style={styles.securityIcon}>
            <Ionicons name="call-outline" size={23} color={colors.paper} />
          </View>
          <View style={styles.securityCopy}>
            <Text style={styles.securityTitle}>Campus Security</Text>
            <Text style={styles.securityNumber}>
              {securityContact.phoneDisplay}
            </Text>
          </View>
        </View>

        <Text style={styles.securityText}>
          Security assistance remains available even when you do not share
          your location.
        </Text>

        <Pressable
          style={styles.callButton}
          onPress={handleSecurityCall}
        >
          <Ionicons name="call" size={18} color={colors.ink} />
          <Text style={styles.callButtonText}>Contact Campus Security</Text>
        </Pressable>

        <Text style={styles.demoNote}>{securityContact.note}</Text>
      </View>

      <View style={styles.privacyCard}>
        <Ionicons name="lock-closed-outline" size={22} color={colors.teal} />
        <View style={styles.privacyCopy}>
          <Text style={styles.privacyTitle}>Privacy by design</Text>
          <Text style={styles.privacyText}>
            Location is requested only after a user action. The app does not
            require location to access the security contact.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.cream },
  content: { padding: 20, paddingTop: 54, paddingBottom: 40 },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 18,
  },
  eyebrow: {
    color: colors.blue,
    fontWeight: '900',
    letterSpacing: 1.6,
    fontSize: 11,
  },
  title: {
    color: colors.ink,
    fontWeight: '900',
    fontSize: 30,
    lineHeight: 35,
    marginTop: 5,
    maxWidth: 290,
  },
  shield: {
    width: 50,
    height: 50,
    borderRadius: 17,
    backgroundColor: colors.ink,
    alignItems: 'center',
    justifyContent: 'center',
  },
  permissionCard: {
    marginTop: 22,
    backgroundColor: colors.paper,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 17,
    flexDirection: 'row',
    gap: 12,
  },
  permissionIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: colors.sky,
    alignItems: 'center',
    justifyContent: 'center',
  },
  permissionCopy: { flex: 1 },
  permissionTitle: { color: colors.ink, fontWeight: '900', fontSize: 16 },
  permissionText: { color: colors.muted, lineHeight: 20, marginTop: 4 },
  locationPanel: {
    marginTop: 16,
    backgroundColor: colors.ink,
    borderRadius: 26,
    padding: 22,
  },
  panelEyebrow: {
    color: '#AFC7FF',
    fontWeight: '900',
    letterSpacing: 1.4,
    fontSize: 11,
  },
  panelTitle: {
    color: colors.paper,
    fontSize: 24,
    fontWeight: '900',
    marginTop: 5,
  },
  coordGrid: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 18,
  },
  coordCard: {
    flex: 1,
    backgroundColor: '#1D4268',
    borderRadius: 16,
    padding: 15,
  },
  coordLabel: {
    color: '#AFC7FF',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1,
  },
  coordValue: {
    color: colors.paper,
    fontSize: 18,
    fontWeight: '900',
    marginTop: 5,
  },
  placeholder: {
    backgroundColor: '#EAF1FF',
    borderRadius: 18,
    padding: 18,
    marginTop: 18,
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  placeholderText: {
    color: colors.navy,
    lineHeight: 20,
    flex: 1,
    fontWeight: '700',
  },
  stateMessage: {
    backgroundColor: '#EAF1FF',
    borderRadius: 13,
    padding: 12,
    marginTop: 14,
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  stateText: { color: colors.navy, fontWeight: '800' },
  errorBox: {
    backgroundColor: colors.dangerSoft,
    borderRadius: 13,
    padding: 12,
    marginTop: 14,
    flexDirection: 'row',
    gap: 8,
    alignItems: 'flex-start',
  },
  errorText: { color: colors.danger, flex: 1, lineHeight: 19, fontWeight: '700' },
  primaryButton: {
    backgroundColor: colors.blue,
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
    marginTop: 16,
  },
  primaryButtonText: { color: colors.paper, fontSize: 16, fontWeight: '900' },
  retryButton: {
    backgroundColor: '#274866',
    borderRadius: 13,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  retryText: { color: colors.paper, fontWeight: '900' },
  securityCard: {
    backgroundColor: colors.paper,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 20,
    marginTop: 16,
  },
  securityHeader: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  securityIcon: {
    width: 48,
    height: 48,
    borderRadius: 15,
    backgroundColor: colors.danger,
    alignItems: 'center',
    justifyContent: 'center',
  },
  securityCopy: { flex: 1 },
  securityTitle: { color: colors.ink, fontWeight: '900', fontSize: 19 },
  securityNumber: { color: colors.muted, marginTop: 2 },
  securityText: { color: colors.muted, lineHeight: 21, marginTop: 14 },
  callButton: {
    backgroundColor: colors.goldSoft,
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  callButtonText: { color: colors.ink, fontWeight: '900' },
  demoNote: {
    color: colors.muted,
    fontSize: 12,
    lineHeight: 17,
    marginTop: 11,
  },
  privacyCard: {
    marginTop: 16,
    backgroundColor: colors.cyan,
    borderRadius: 20,
    padding: 18,
    flexDirection: 'row',
    gap: 12,
  },
  privacyCopy: { flex: 1 },
  privacyTitle: { color: colors.teal, fontWeight: '900', fontSize: 16 },
  privacyText: { color: colors.muted, lineHeight: 20, marginTop: 4 },
});
