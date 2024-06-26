import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  StyleSheet,
} from 'react-native';

const MarketPlace = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Seach anything" />
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.categoryTitle}>Seeds</Text>
        <View style={styles.categoryContainer}>
          <Image source={{uri: ''}} style={styles.itemImage} />
          <Text style={styles.detailsText}>Details</Text>
        </View>
        <Text style={styles.categoryTitle}>Equipment</Text>
        <View style={styles.categoryTitle}>
          <Image source={{uri: ''}} style={styles.itemImage} />
          <Text style={styles.detailsText}>Details</Text>
        </View>
        <Text style={styles.categoryTitle}>Plants</Text>
        <View style={styles.categoryContainer}>
          <Image source={{uri: ''}} style={styles.itemImage} />
          <Text style={styles.detailsText}>Details</Text>
        </View>
      </ScrollView>
    </View>
  );
};
