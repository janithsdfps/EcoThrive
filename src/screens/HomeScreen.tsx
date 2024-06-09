import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from '../compents/UserContext';

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const { user, logout } = useContext(UserContext);

  const handleLogout = async () => {
    try {
      // Perform logout logic here, e.g., clear authentication state
      // Clear rememberedUser flag from AsyncStorage
      await AsyncStorage.removeItem('rememberedUser');
      // Perform logout action
      logout();
      // Navigate to the login screen
      navigation.navigate('Login');
    } catch (e) {
      console.error('Failed to logout', e);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome, {user?.email || 'Guest'}!</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  welcomeText: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default HomeScreen;
