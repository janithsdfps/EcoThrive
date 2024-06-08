// Import libraries
import { BlurView } from '@react-native-community/blur';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';

// Create a component
const StartScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/img/appbg.jpg')}
        style={styles.image} 
      >
        <Image
          style={styles.logo}
          source={require('../assets/img/ecotrivelogo.png')}
        />
        <Text style={styles.title}>Cultivate {'\n'}For Tomorrow</Text>
        <Text style={styles.semiTitle}>Bring the nature to your home {'\n'}one seed at a time</Text>

        <View style={styles.BtnContent}>
          {/* Apply BlurView only to the button */}
          
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Tab')}
            >
           <Text style={styles.buttonText}>Plant A Tree</Text>
            </TouchableOpacity>
        
        </View>
      </ImageBackground>
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
    resizeMode:"cover",
    justifyContent:'center'
    
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
    borderRadius:10,
    alignItems: 'center',
    borderColor:'white',
    borderWidth:1
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
    marginStart:'15%',
    marginTop:'8%'
  },
  semiTitle:{
    fontSize:15,
    color:'#B6B6B6',
    marginStart:'15%',
    marginTop:'5%'
  }
});

// Make this component available to the app
export default StartScreen;
