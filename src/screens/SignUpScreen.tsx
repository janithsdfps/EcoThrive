import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLORS } from '../theme/Theme';

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
            <Text style={styles.header}> Register</Text>
            <Text style={styles.title}>Create your new account</Text>
            <View style={styles.inputContainer}>
            <TextInput
                placeholder="Full Name "
                value={username}
                onChangeText={setUsername}
                
            />
            </View>
            
            <View style={styles.inputContainer}>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                
            />
            </View>
            
            <View style={styles.inputContainer}>
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
             
            />
            </View>

            <TouchableOpacity style={styles.sighBtn}
            onPress={handleSignup}>
                <Text style={styles.Loginbtntxt}>Signup</Text>
            </TouchableOpacity>
      

            
            
            {error ? <Text style={styles.error}>{error}</Text> : null}
            
            

            <View style={styles.rememberMeContainer}>

            <TouchableOpacity
            onPress={() => setRememberMe(!rememberMe)}
            style={[styles.rememberMeButton, rememberMe && styles.rememberMeButtonActive]}
                >
                <Text style={styles.rememberMeButtonText}>{rememberMe ? "✓" : " "}</Text>
                </TouchableOpacity>
                <Text>Remember Me</Text>
                {/* <Button title={rememberMe ? "✓" : " "} onPress={() => setRememberMe(!rememberMe)} /> */}
            </View>

            
            <View style={styles.bottomField}>
            <Text style={styles.DNTtext}>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')} >
                <Text style={styles.SignupText}>Loging</Text>
                </TouchableOpacity>
            </View>
           
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    header:{
        fontSize:30,
        color:COLORS.primary,
        fontFamily:'Poppins-Bold',
        alignSelf:'center',

      },
    title:{
        fontSize:15,
        color:COLORS.ash,
        marginBottom:"10%",
        alignSelf:'center',

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
        marginVertical: 15,
    },
    inputContainer: {
        alignSelf:'center',
        flexDirection: 'row',
        alignItems: 'center',
        width: 350,
        height: 50,
        borderRadius: 15,
        paddingHorizontal: 30,
        marginVertical: 15,
        backgroundColor:COLORS.secondary  
    },
    sighBtn:{
        width:250,
        alignSelf:'center',
        height:45,
        backgroundColor:COLORS.primary,
        borderRadius:30,
        alignItems:'center',
        padding:5,
        marginVertical:30
      },
      Loginbtntxt:{
        fontFamily:'Poppins-Bold',
        fontSize:20,
        color:'white'
      },

      rememberMeButton: {
        marginHorizontal: 10,
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: COLORS.primary,
        borderRadius:10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      rememberMeButtonActive: {
        backgroundColor: COLORS.primary,
      },
      rememberMeButtonText: {
        fontSize: 10,
      },
      rememberText:{
        fontSize:12,
        marginHorizontal:10
      },
      bottomField:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:"flex-start",
        alignSelf:'center',
        marginTop:'50%'
      },
      DNTtext:{
        fontSize:15,
        color:COLORS.ash,
        margin:5
    
      },
      SignupText:{
        fontSize:15,
        color:COLORS.primary,
      },
    

});

export default SignupScreen;
