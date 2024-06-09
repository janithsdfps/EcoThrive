import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignupScreen = ({ navigation }: any) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    useEffect(() => {
        if (rememberMe){
            const checkRememberedUser = async () => {
                try {
                    const rememberedUser = await AsyncStorage.getItem('rememberedUser');
                    if (rememberedUser) {
                        navigation.navigate('Tab');
                    }
                } catch (e) {
                    console.error('Failed to load remembered user', e);
                }
            };
    
            checkRememberedUser();
        }
        
    }, [navigation,rememberMe]);

    const handleSignup = async () => {
        try {
            await auth().createUserWithEmailAndPassword(email, password);
            if (rememberMe) {
                await AsyncStorage.setItem('rememberedUser', 'true');
            }
            navigation.navigate('Tab');
        } catch (e) {
            if (e instanceof Error) {
                setError(e.message);
            } else {
                setError('An unknown error occurred');
            }
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                style={styles.input}
            />
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
            />
            {error ? <Text style={styles.error}>{error}</Text> : null}
            <View style={styles.rememberMeContainer}>
                <Text>Remember Me</Text>
                <Button title={rememberMe ? "✓" : " "} onPress={() => setRememberMe(!rememberMe)} />
            </View>
            <Button title="Signup" onPress={handleSignup} />
            <Button title="Already have an account? Login" onPress={() => navigation.navigate('Login')} />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
        padding: 16,
    },
    input: {
        width: '100%',
        padding: 8,
        marginVertical: 8,
        backgroundColor: '#fff',
        borderRadius: 4,
    },
    error: {
        color: 'red',
        marginBottom: 16,
    },
    rememberMeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
    },
});

export default SignupScreen;
