// Import libraries
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground,SafeAreaView,TextInput, ScrollView, FlatList } from 'react-native';
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Colors } from 'react-native/Libraries/NewAppScreen';

// Create a component
const consultants = [
    { id: '1', name: 'Jehan Malick', title: 'Agriculture Consultant', image: 'https://via.placeholder.com/150' },
    { id: '2', name: 'Jehan Malick', title: 'Agriculture Consultant', image: 'https://via.placeholder.com/150' },
    { id: '3', name: 'Jehan Malick', title: 'Agriculture Consultant', image: 'https://via.placeholder.com/150' },
    { id: '4', name: 'Jehan Malick', title: 'Agriculture Consultant', image: 'https://via.placeholder.com/150' },
    { id: '5', name: 'Jehan Malick', title: 'Agriculture Consultant', image: 'https://via.placeholder.com/150' },
    { id: '6', name: 'Jehan Malick', title: 'Agriculture Consultant', image: 'https://via.placeholder.com/150' },
    { id: '7', name: 'Jehan Malick', title: 'Agriculture Consultant', image: 'https://via.placeholder.com/150' },
    { id: '8', name: 'Jehan Malick', title: 'Agriculture Consultant', image: 'https://via.placeholder.com/150' },
    { id: '9', name: 'Jehan Malick', title: 'Agriculture Consultant', image: 'https://via.placeholder.com/150' },
    { id: '10', name: 'Jehan Malick', title: 'Agriculture Consultant', image: 'https://via.placeholder.com/150' },
];

const ConsultantCard = ({ name, title, image, navigation }:any) => (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Contact</Text>
      </TouchableOpacity>
    </View>
  );

const OnlineConsulting = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
        <View>
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
        <FlatList data={consultants}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
            <ConsultantCard name={item.name} title={item.title} image={item.image} />
        )}
        contentContainerStyle={styles.list}
        />
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
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    textShadowRadius: 8,
    shadowOpacity: 0.1,
    justifyContent: 'space-between',
    shadowRadius: 2,
    elevation: 2,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 25,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
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
  list: {
    paddingHorizontal: 20,
  },
  buttonText:{
    color: '#fff',
    fontSize: 14,
  },
  button: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

// Make this component available to the app
export default OnlineConsulting;
