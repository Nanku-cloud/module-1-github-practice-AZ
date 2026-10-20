import React, { useState } from 'react';
import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import GameCard from '../components/GameCard';
import Sidebar from '../components/Sidebar';
import {
  starterGames,
  genres,
} from '../data/starterGames';
import { colors } from '../styles/theme';

export default function HomeScreen() {
  const { width } = useWindowDimensions();
  const desktop = width >= 900;

  const [query, setQuery] = useState('');
  const [genre, setGenre] =
    useState('All');

  const filteredGames =
    starterGames.filter((game) => {
      const matchesGenre =
        genre === 'All' ||
        game.genre === genre;

      const matchesSearch =
        game.title
          .toLowerCase()
          .includes(query.toLowerCase());

      return (
        matchesGenre &&
        matchesSearch
      );
    });

  const cardWidth =
    desktop ? 176 : 145;

  return (
    <View style={styles.page}>
      {desktop && (
        <Sidebar active="Home" />
      )}

      <ScrollView
        style={styles.main}
        contentContainerStyle={
          styles.mainContent
        }
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.topBar}>
          {!desktop && (
            <View style={styles.mobileBrand}>
              <Ionicons
                name="cloud"
                size={24}
                color={colors.accent}
              />
              <Text
                style={styles.mobileBrandText}
              >
                CLOUD ARC
              </Text>
            </View>
          )}

          <View style={styles.search}>
            <Ionicons
              name="search"
              size={18}
              color={colors.muted}
            />

            <TextInput
              value={query}
              onChangeText={setQuery}
              placeholder="Search games..."
              placeholderTextColor={
                colors.muted
              }
              style={styles.input}
            />
          </View>
        </View>

        <View style={styles.hero}>
          <View style={styles.heroLeft}>
            <Text style={styles.heroEyebrow}>
              CLOUD COLLECTION
            </Text>

            <Text style={styles.heroTitle}>
              Your library, one place.
            </Text>

            <Text style={styles.heroText}>
              A console-style collection
              ready for Firebase, SQLite,
              real games, and real cover art.
            </Text>

            <Pressable
              style={styles.heroButton}
            >
              <Ionicons
                name="play"
                size={17}
                color="#0A0E0B"
              />
              <Text
                style={
                  styles.heroButtonText
                }
              >
                Jump Back In
              </Text>
            </Pressable>
          </View>

          <View style={styles.heroTiles}>
            {starterGames
              .slice(0, 3)
              .map((game) => (
                <View
                  key={game.id}
                  style={styles.miniTile}
                >
                  <Text
                    style={
                      styles.miniTileTitle
                    }
                  >
                    {game.title}
                  </Text>
                  <Text
                    style={
                      styles.miniTileMeta
                    }
                  >
                    {game.genre}
                  </Text>
                </View>
              ))}
          </View>
        </View>

        <Text style={styles.sectionTitle}>
          Jump back in
        </Text>

        <FlatList
          horizontal
          data={filteredGames}
          keyExtractor={(item) =>
            item.id
          }
          renderItem={({ item }) => (
            <GameCard
              game={item}
              width={cardWidth}
            />
          )}
          showsHorizontalScrollIndicator={
            false
          }
          contentContainerStyle={
            styles.rowList
          }
        />

        <Text style={styles.sectionTitle}>
          Browse by genre
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={
            false
          }
          contentContainerStyle={
            styles.genreRow
          }
        >
          {genres.map((item) => {
            const active =
              item === genre;

            return (
              <Pressable
                key={item}
                onPress={() =>
                  setGenre(item)
                }
                style={[
                  styles.genreChip,
                  active &&
                    styles.genreChipActive,
                ]}
              >
                <Text
                  style={[
                    styles.genreText,
                    active &&
                      styles.genreTextActive,
                  ]}
                >
                  {item}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>

        <View style={styles.dataPanel}>
          <View style={styles.dataIcon}>
            <Ionicons
              name="cloud-done-outline"
              size={24}
              color={colors.accent}
            />
          </View>

          <View style={styles.dataCopy}>
            <Text style={styles.dataTitle}>
              Ready for Module 9 data
            </Text>

            <Text style={styles.dataText}>
              The interface starts with demo
              data so students can learn the
              Firebase and SQLite code without
              rebuilding the entire UI.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.bg,
  },
  main: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  mainContent: {
    padding: 22,
    paddingBottom: 50,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginBottom: 18,
  },
  mobileBrand: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  mobileBrandText: {
    color: colors.text,
    fontWeight: '900',
    fontSize: 12,
    letterSpacing: 1.1,
  },
  search: {
    minHeight: 44,
    flex: 1,
    maxWidth: 520,
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 24,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
  },
  input: {
    color: colors.text,
    flex: 1,
  },
  hero: {
    minHeight: 330,
    borderRadius: 18,
    padding: 28,
    backgroundColor: '#19231C',
    borderWidth: 1,
    borderColor: '#2D4B33',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 24,
  },
  heroLeft: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  heroEyebrow: {
    color: colors.accent,
    fontWeight: '900',
    letterSpacing: 1.4,
    fontSize: 11,
  },
  heroTitle: {
    color: colors.text,
    fontSize: 34,
    lineHeight: 39,
    fontWeight: '900',
    marginTop: 6,
  },
  heroText: {
    color: '#D7DEE8',
    fontSize: 15,
    lineHeight: 22,
    maxWidth: 560,
    marginTop: 9,
  },
  heroButton: {
    alignSelf: 'flex-start',
    marginTop: 18,
    backgroundColor: colors.accent,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  heroButtonText: {
    color: '#0A0E0B',
    fontWeight: '900',
  },
  heroTiles: {
    width: 240,
    justifyContent: 'center',
    gap: 10,
  },
  miniTile: {
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: 14,
  },
  miniTileTitle: {
    color: colors.text,
    fontWeight: '900',
  },
  miniTileMeta: {
    color: colors.muted,
    marginTop: 4,
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 25,
    fontWeight: '900',
    marginTop: 28,
    marginBottom: 13,
  },
  rowList: {
    paddingRight: 10,
  },
  genreRow: {
    gap: 9,
    paddingBottom: 4,
  },
  genreChip: {
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
  },
  genreChipActive: {
    backgroundColor: colors.accent,
    borderColor: colors.accent,
  },
  genreText: {
    color: colors.text,
    fontWeight: '800',
  },
  genreTextActive: {
    color: '#0A0E0B',
  },
  dataPanel: {
    marginTop: 28,
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    padding: 18,
    flexDirection: 'row',
    gap: 13,
  },
  dataIcon: {
    width: 46,
    height: 46,
    borderRadius: 12,
    backgroundColor: '#1C3322',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dataCopy: {
    flex: 1,
  },
  dataTitle: {
    color: colors.text,
    fontWeight: '900',
    fontSize: 17,
  },
  dataText: {
    color: colors.muted,
    lineHeight: 20,
    marginTop: 4,
  },
});
