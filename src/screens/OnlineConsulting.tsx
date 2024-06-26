// Import libraries
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground,SafeAreaView,TextInput, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Colors } from 'react-native/Libraries/NewAppScreen';

// Create a component
const consultants = [
    { id: 1, name: 'Jehan Malick', title: 'Agriculture Consultant', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Jehan Malick', title: 'Agriculture Consultant', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Jehan Malick', title: 'Agriculture Consultant', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Jehan Malick', title: 'Agriculture Consultant', image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Jehan Malick', title: 'Agriculture Consultant', image: 'https://via.placeholder.com/150' },
];

const consultantCard = ({ name, title, image, navigation }:any) => (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
      <FontAwesome name="angle-left" color="fff" size={35} />
      </TouchableOpacity>
    </View>
  );

const OnlineConsulting = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesome name="angle-left" color="fff" size={35} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Find a Consultant</Text>
        </View>
        <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search anything...."
          placeholderTextColor="#888"/>
        <TouchableOpacity style={styles.searchButton}>
        <FontAwesome name="search" color="fff" size={24} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// Define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    margin: 8,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    textShadowRadius: 8,
    shadowOpacity: 0.1,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginStart: 16,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    color: '#777777',
  },
  contactButton: {
    padding: 8,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#4CAF50',
  },
  headerTitle: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: 'white',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  searchInput: {
    flex: 1,
    padding: 8,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 8,
    marginRight: 8,
  },
  searchButton: {
    padding: 8,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
  },
});

// Make this component available to the app
export default OnlineConsulting;
