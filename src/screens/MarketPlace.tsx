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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  searchContainer: {
    padding: 10,
    backgroundColor: '#4CAF50',
  },
  searchInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    padding: 10,
  },
  contentContainer: {
    padding: 10,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  detailsText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#000',
  },
});

export default MarketPlace;
