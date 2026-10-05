import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import ContentCard from '../../components/ContentCard';
import FeaturedHero from '../../components/FeaturedHero';
import { titles } from '../../data/titles';

export default function Home() {
  const router = useRouter();
  const featured = titles.find((i) => i.featured);

  function openTitle(item) {
    router.push({ pathname: '/title/[id]', params: { id: item.id } });
  }

  return (
    <ScrollView style={styles.screen}>
      <FeaturedHero item={featured} onOpen={() => openTitle(featured)} />
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Trending Now</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {titles.map((item) => (
            <ContentCard
              key={item.id}
              item={item}
              onPress={() => openTitle(item)}
            />
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#08090c' },
  section: { paddingHorizontal: 16, paddingTop: 22, paddingBottom: 30 },
  sectionTitle: {
    color: '#fff',
    fontSize: 21,
    fontWeight: '900',
    marginBottom: 12,
  },
});