//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS } from '../theme/Theme';
import Icon from "react-native-vector-icons/FontAwesome";
import axios from 'axios';

// create a component
const Suggestion  = () => {

    const [Type, setType] = useState('');
    const [location, setLocation] = useState('');
    const [gardenType, setGardenType] = useState('');
    const [purpose, setPurpose] = useState('');
    const [preference, setPerference] = useState('');
    const [schedule, setSchedule] = useState('');
    const [time, setTime] = useState('');

    const suggectionsubmit = async () => {
        const data = {
          type: Type,
          location: location,
          gardenType: gardenType,
          purpose: purpose,
          preference: preference,
          schedule: schedule,
          time: time
        };
    
        try {
          const response = await axios.post('http://192.168.43.32:3000/submit', data, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
    
          if (response.status === 200) {
            console.log('Success:', response.data);
          } else {
            console.log('Error:', response.data);
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
    
    
    
    return (
        <View style={styles.container}>
            <View style={styles.topbar}>
                <View style={styles.iconcontainer}>
                    <Icon name="chevron-circle-left" size={25} color='white' />
                    <Text style={styles.screenHeader}>Suggestion</Text>
                    <View style={styles.profilecontainer}></View>
                </View>
            </View>

            <ScrollView>

                <View style={styles.containerinput}>
                    <Text style={styles.forumHeader}>Type</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="Type (indoor/ outdoor )         "
                            value={Type}
                            onChangeText={setType}
                        />
                    </View>
                </View>

                <View style={styles.containerinput}>
                    <Text style={styles.forumHeader}>location </Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="location          "
                            value={location}
                            onChangeText={setLocation}
                        />
                    </View>
                </View>

                <View style={styles.containerinput}>
                    <Text style={styles.forumHeader}> purpose</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="purpose(income/relaxation )                 "
                            value={purpose}
                            onChangeText={setPurpose}
                        />
                    </View>
                </View>

                <View style={styles.containerinput}>
                    <Text style={styles.forumHeader}>garden type</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="garden type(Balcany/ )                 "
                            value={gardenType}
                            onChangeText={setGardenType}
                        />
                    </View>
                </View>

                <View style={styles.containerinput}>
                    <Text style={styles.forumHeader}>perference</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="perference(fruite/ flowers)                       "
                            value={preference}
                            onChangeText={setPerference}
                        />
                    </View>
                </View>

                <View style={styles.containerinput}>
                    <Text style={styles.forumHeader}>schedule</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="schedule (busy)                                   "
                            value={schedule}
                            onChangeText={setSchedule}
                        />
                    </View>
                </View>

                <View style={styles.containerinput}>
                    <Text style={styles.forumHeader}>Time per day</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="Time per day                                        "
                            value={time}
                            onChangeText={setTime}
                        />
                    </View>
                </View>

                <TouchableOpacity style={styles.Loginbtn}
                onPress={suggectionsubmit}>
                    <Text style={styles.Loginbtntxt}>LOGIN</Text>
                </TouchableOpacity>
            </ScrollView>

            
            
        </View>
    ); 
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    inputContainer: {
        
        flexDirection: 'row',
        width: 350,
        height: 50,
        borderRadius: 20,
        paddingHorizontal: 30,
        marginVertical: 20,
        backgroundColor:COLORS.secondary  
    },
    topbar:{
        width:'100%',
        height:'15%',
        backgroundColor:COLORS.primary,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        alignContent:'center',
        top:0
    },
    iconcontainer:{
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        margin:20
    },
    screenHeader:{
        color:'white',
        fontSize:24,
    },
    profilecontainer:{
        width:35,
        height:35,
        borderRadius:18,
        backgroundColor:'white'
    },
    forumHeader:{
        fontSize:16,
        color:COLORS.primary2,
    },
    containerinput:{
        margin:10,
        alignSelf:'center',
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

});

//make this component available to the app
export default Suggestion;
