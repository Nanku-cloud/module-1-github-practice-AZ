import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';
import { destinations } from '../data/destinations';
import { colors } from '../styles/theme';

export default function HomeScreen() {
  const [selectedCity, setSelectedCity] = useState(destinations[0]);
  const [location, setLocation] = useState(null);
  const [isLocating, setIsLocating] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  async function handleUseMyLocation() {
    setIsLocating(true);
    setErrorMessage('');

    try {
      // TODO 1: Request foreground location permission and save status.

      // TODO 2: If permission is not granted, show a clear message and return.

      // TODO 3: Request the current device location.

      // TODO 4: Save the returned location with setLocation().
    }
    catch (error) {
      setErrorMessage('StayFinder could not determine your location. Try again or choose a city below.');
    }
    finally {
      setIsLocating(false);
    }
  }

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <View style={styles.hero}>
        <Text style={styles.eyebrow}>STAYFINDER</Text>
        <Text style={styles.title}>Plan from where you are.</Text>
        <Text style={styles.subtitle}>Use your current location or choose a city manually.</Text>

        <Pressable style={styles.locationButton} onPress={handleUseMyLocation}>
          <Text style={styles.locationButtonText}>Use My Location</Text>
        </Pressable>

        {isLocating && (
          <View style={styles.notice}><Text style={styles.noticeText}>Finding your location...</Text></View>
        )}
        {errorMessage !== '' && (
          <View style={[styles.notice, styles.errorNotice]}><Text style={styles.errorText}>{errorMessage}</Text></View>
        )}
        {location !== null && (
          <View style={[styles.notice, styles.successNotice]}>
            <Text style={styles.successLabel}>CURRENT DEVICE LOCATION</Text>
            <Text style={styles.successText}>Latitude: {location.coords.latitude.toFixed(4)}</Text>
            <Text style={styles.successText}>Longitude: {location.coords.longitude.toFixed(4)}</Text>
          </View>
        )}
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Choose a destination</Text>
        <Text style={styles.sectionText}>Manual city selection remains available even when location access is denied.</Text>
      </View>

      <View style={styles.cardList}>
        {destinations.map((destination) => {
          const isSelected = selectedCity.id === destination.id;
          return (
            <Pressable key={destination.id} onPress={() => setSelectedCity(destination)}
              style={[styles.destinationCard, isSelected && styles.destinationCardSelected]}>
              <View style={styles.cityCopy}>
                <Text style={styles.cityName}>{destination.city}</Text>
                <Text style={styles.stateName}>{destination.state}</Text>
                <Text style={styles.tagline}>{destination.tagline}</Text>
              </View>
              <View style={[styles.selectDot, isSelected && styles.selectDotActive]} />
            </Pressable>
          );
        })}
      </View>

      <View style={styles.selectionPanel}>
        <Text style={styles.selectionLabel}>SELECTED DESTINATION</Text>
        <Text style={styles.selectionCity}>{selectedCity.city}, {selectedCity.state}</Text>
        <Text style={styles.selectionCoords}>{selectedCity.latitude}, {selectedCity.longitude}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen:{flex:1,backgroundColor:colors.cream}, content:{padding:20,paddingTop:56,paddingBottom:48},
  hero:{backgroundColor:colors.navy,borderRadius:24,padding:24}, eyebrow:{color:'#AFC7FF',fontSize:12,fontWeight:'900',letterSpacing:2},
  title:{color:colors.white,fontSize:34,lineHeight:39,fontWeight:'900',marginTop:8}, subtitle:{color:'#D5DFEA',fontSize:16,lineHeight:23,marginTop:12,marginBottom:22},
  locationButton:{backgroundColor:colors.white,borderRadius:12,paddingVertical:14,alignItems:'center'}, locationButtonText:{color:colors.navy,fontSize:16,fontWeight:'900'},
  notice:{backgroundColor:'#183B5C',borderRadius:12,padding:14,marginTop:14}, noticeText:{color:colors.white,fontWeight:'700'},
  errorNotice:{backgroundColor:'#FDECEC'}, errorText:{color:colors.danger,fontWeight:'700',lineHeight:20}, successNotice:{backgroundColor:'#E8F6F0'},
  successLabel:{color:colors.success,fontSize:11,fontWeight:'900',letterSpacing:1,marginBottom:6}, successText:{color:'#0F5132',fontSize:15,fontWeight:'700',marginTop:2},
  sectionHeader:{marginTop:28,marginBottom:14}, sectionTitle:{fontSize:23,color:colors.text,fontWeight:'900'}, sectionText:{color:colors.muted,lineHeight:21,marginTop:6},
  cardList:{gap:12}, destinationCard:{backgroundColor:colors.white,borderRadius:18,borderWidth:1,borderColor:colors.border,padding:18,flexDirection:'row',alignItems:'center'},
  destinationCardSelected:{borderColor:colors.blue,borderWidth:2}, cityCopy:{flex:1}, cityName:{color:colors.text,fontSize:20,fontWeight:'900'}, stateName:{color:colors.blue,fontSize:13,fontWeight:'800',marginTop:2},
  tagline:{color:colors.muted,lineHeight:20,marginTop:8}, selectDot:{width:20,height:20,borderRadius:10,borderWidth:2,borderColor:colors.border,marginLeft:12},
  selectDotActive:{borderWidth:6,borderColor:colors.blue}, selectionPanel:{marginTop:22,backgroundColor:colors.softBlue,borderRadius:18,padding:18},
  selectionLabel:{color:colors.blue,fontSize:11,fontWeight:'900',letterSpacing:1}, selectionCity:{color:colors.text,fontSize:22,fontWeight:'900',marginTop:6}, selectionCoords:{color:colors.muted,marginTop:4}
});
