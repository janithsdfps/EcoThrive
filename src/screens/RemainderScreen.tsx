// Import libraries
import {BlurView} from '@react-native-community/blur';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';

// Create a component
const StartScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Suggestions</Text>
      </View>

      <Text style={styles.sectionTitle}>Best for you</Text>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
         
          <Text style={styles.cardText}>SunFlower</Text>
        </View>
        <View style={styles.card}>
          
          <Text style={styles.cardText}>Rose</Text>
        </View>
        styles
        <View style={styles.card}>
         
          <Text style={styles.cardText}>Rose</Text>
        </View>
        <View style={styles.card}>
         >
          <Text style={styles.cardText}>SunFlower</Text>
        </View>
      </View>

      <View></View>
    </View>
  );
};

// Define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  BtnContent: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 40,
  },

  button: {
    width: 300,
    height: 60,
    justifyContent: 'center',
    backgroundColor: 'rgba(73,92,91,0.9)',
    borderRadius: 10,
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    fontFamily: 'Poppins-Bold',
  },
  logo: {
    width: '40%',
    height: '40%',
    marginTop: '25%',
    alignSelf: 'center',
  },
  title: {
    color: 'white',
    fontSize: 28,
    marginStart: '15%',
    marginTop: '8%',
  },
  semiTitle: {
    fontSize: 15,
    color: '#B6B6B6',
    marginStart: '15%',
    marginTop: '5%',
  },
});

// Make this component available to the app
export default StartScreen;
