import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import AlbumCard from './AlbumCard';
import { colors } from '../styles/theme';

export default function Shelf({title, items, onPlay}) {
  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>{title}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.row}
      >
        {items.map((item) => (
          <AlbumCard key={item.id} item={item} onPlay={onPlay} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap:{ marginTop:22 },
  title:{ color:colors.text, fontSize:22, fontWeight:'900', marginBottom:12 },
  row:{ paddingRight:18 },
});