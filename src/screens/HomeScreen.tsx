import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from '../compents/UserContext';
import Icon from "react-native-vector-icons/FontAwesome";
import FIcon from "react-native-vector-icons/Fontisto";
import { COLORS } from '../theme/Theme';

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const { user, logout } = useContext(UserContext);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('rememberedUser');
      logout();
  
      navigation.navigate('Login');
    } catch (e) {
      console.error('Failed to logout', e);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <Icon name="bell" size={25} color='black' style={styles.Ricon} />
        <Text style={styles.header}>Mahinda </Text>
        <FIcon name="person" size={25} color='black' style={styles.Ricon} />
      </View>

      <View style={styles.Tbuttons}>
        <TouchableOpacity onPress={() => navigation.navigate('Sighup')} style={styles.recomndatation}>
          <Text style={styles.recText}>Recommendation</Text>
        </TouchableOpacity>
      </View>
      {/* <Text style={styles.welcomeText}>Welcome, {user?.email || 'Guest'}!</Text>
      <Button title="Logout" onPress={handleLogout} /> */}
   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F0F0',
  },
  topbar:{
    margin:20,
    flexDirection:"row",
    alignItems:'center',
    justifyContent:'space-between',
  },
  Ricon:{
    
  },
  header:{
    color:COLORS.primary,
    fontFamily:"Poppins-Bold",
    fontSize:25
  },
  Tbuttons:{
  margin:15,

  },
  recomndatation:{
    backgroundColor:COLORS.primary2,
    maxWidth:'35%',
    height:37,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:20
  },
  recText:{
    color:'white',
    
  }
});

export default HomeScreen;
