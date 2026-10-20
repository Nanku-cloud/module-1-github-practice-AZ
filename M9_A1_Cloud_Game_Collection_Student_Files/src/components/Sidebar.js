import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '../styles/theme';

const items = [
  ['home-outline', 'Home'],
  ['library-outline', 'Library'],
  ['people-outline', 'Friends'],
  ['time-outline', 'Recent'],
];

export default function Sidebar({
  active = 'Home',
}) {
  return (
    <View style={styles.sidebar}>
      <View style={styles.logo}>
        <Ionicons
          name="cloud"
          size={26}
          color={colors.accent}
        />
        <Text style={styles.logoText}>
          CLOUD ARC
        </Text>
      </View>

      {items.map(([icon, label]) => {
        const selected = active === label;

        return (
          <Pressable
            key={label}
            style={[
              styles.item,
              selected && styles.itemSelected,
            ]}
          >
            <Ionicons
              name={icon}
              size={20}
              color={
                selected
                  ? colors.text
                  : colors.muted
              }
            />

            <Text
              style={[
                styles.itemText,
                selected &&
                  styles.itemTextSelected,
              ]}
            >
              {label}
            </Text>
          </Pressable>
        );
      })}

      <View style={styles.friendBlock}>
        <Text style={styles.label}>
          ONLINE NOW
        </Text>

        <View style={styles.avatars}>
          {['JD', 'KT', 'RM'].map((x) => (
            <View key={x} style={styles.avatar}>
              <Text style={styles.avatarText}>
                {x}
              </Text>
            </View>
          ))}
        </View>

        <Text style={styles.friendText}>
          3 friends online
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sidebar: {
    width: 250,
    backgroundColor: '#15171B',
    borderRightWidth: 1,
    borderRightColor: colors.border,
    padding: 20,
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 34,
  },
  logoText: {
    color: colors.text,
    fontWeight: '900',
    letterSpacing: 1.4,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 9,
    marginBottom: 4,
  },
  itemSelected: {
    backgroundColor: colors.panel2,
  },
  itemText: {
    color: colors.muted,
    fontWeight: '700',
    fontSize: 15,
  },
  itemTextSelected: {
    color: colors.text,
  },
  friendBlock: {
    marginTop: 34,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: 22,
  },
  label: {
    color: colors.muted,
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 1.1,
  },
  avatars: {
    flexDirection: 'row',
    gap: 7,
    marginTop: 12,
  },
  avatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#334155',
    borderWidth: 2,
    borderColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: colors.text,
    fontSize: 11,
    fontWeight: '900',
  },
  friendText: {
    color: colors.text,
    fontWeight: '700',
    marginTop: 10,
  },
});
