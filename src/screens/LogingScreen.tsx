import React, { useContext, useState, useEffect } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { UserContext } from '../compents/UserContext';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from "react-native-vector-icons/FontAwesome";
import { COLORS } from '../theme/Theme';

const LoginScreen = ({ navigation }: { navigation: any }) => {
  const { login } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
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
  }, [navigation]);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    try {
      const userCredential = await auth().signInWithEmailAndPassword(email, password);
      if (userCredential.user.email) {
        login({ email: userCredential.user.email }); 
        if (rememberMe) {
          await AsyncStorage.setItem('rememberedUser', 'true');
        }
        navigation.navigate('Tab');
      } else {
        setError('User email is null');
      }
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError('An unexpected error occurred');
      }
    }
  };


  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        {/* imggoes  */}
      </View>

      <Text style={styles.header}> Welcome Back</Text>
      <Text style={styles.title}>Login to your account </Text>

      <View style={styles.inputContainer}>
        <Icon name="envelope" size={20} color='#256724' style={styles.icon}  />
        <TextInput
          placeholder="Email                                                               "
          value={email}
          onChangeText={setEmail}
          
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#256724" style={styles.icon} />
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Password                                                            "
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={toggleShowPassword} >
              <Icon name={showPassword ? "eye" : "eye-slash"} size={20} color="#256724" />
            </TouchableOpacity>
          </View>
      </View>

      {error ? <Text>{error}</Text> : null}

      <View style={styles.FRContainer}>
        <TouchableOpacity
            onPress={() => setRememberMe(!rememberMe)}
            style={[styles.rememberMeButton, rememberMe && styles.rememberMeButtonActive]}
        >
          <Text style={styles.rememberMeButtonText}>{rememberMe ? "✓" : " "}</Text>
        </TouchableOpacity>

        <View style={styles.inputWrapper}>
          <Text style={styles.rememberText}>Remember Me</Text>
          <TouchableOpacity>
            <Text style={styles.fpText}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.Loginbtn}
      onPress={handleLogin}>
        <Text style={styles.Loginbtntxt}>LOGIN</Text>
      </TouchableOpacity>
      
      <View style={styles.bottomField}>
        <Text style={styles.DNTtext}>Don’t have an account ?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Sighup')} >
        <Text style={styles.SignupText}>Signup</Text>
      </TouchableOpacity>
      </View>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#ffff'
  },

  title:{
    fontSize:15,
    color:COLORS.ash,
    marginBottom:"10%",
    alignSelf:'center'
  },


  imgContainer: {
    width: '100%',
    justifyContent:'center',
    height:'35%',
    backgroundColor:'black'
  },
  header:{
    fontSize:30,
    color:COLORS.primary,
    fontFamily:'Poppins-Bold',
    alignSelf:'center'
  },
  inputContainer: {
    alignSelf:'center',
    flexDirection: 'row',
    alignItems: 'center',
    width: 350,
    height: 50,
    borderRadius: 15,
    paddingHorizontal: 30,
    marginVertical: 10,
    backgroundColor:COLORS.secondary  
  },

  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  icon: {
    marginRight: 15,
  },

  FRContainer: {
    flexDirection: 'row',
    marginVertical: 30,
    marginHorizontal:30,
},
  rememberMeButton: {
    marginLeft: 10,
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
  fpText:{
    fontSize:12,
    color:COLORS.primary,
  },
  Loginbtn:{
    width:330,
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
  bottomField:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:"flex-start",
    alignSelf:'center'
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
})



export default LoginScreen;
