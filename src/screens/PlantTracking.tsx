//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { COLORS } from '../theme/Theme';
import Icon from "react-native-vector-icons/FontAwesome";



// create a component
const PalntTracking = ({navigation}:any) => {

let plantName = 'rose';  
const [schedule, setSchedule] = useState('');
    return (
        <View style={styles.container}>

            <View style={styles.containerinput}>
                <Icon name="chevron-circle-left" size={25} color='#588563' />
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Search plant                                                       "
                        value={schedule}
                        onChangeText={setSchedule}
                    />
                </View>
                <View style ={styles.searchIcon}>
                    <Icon name="search" size={25} color='white'/>
                </View>  
            </View>
            <ScrollView>
                <View style={styles.Tbuttons}>
                    <TouchableOpacity onPress={() => navigation.navigate('Hire')} style={styles.recomndatation}>
                        <Text style={styles.recText}>Help</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.recomndatation}>
                        <Text style={styles.recText}>Rose</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.plantImgcontainer}>
                    <Image  style={styles.img} source={require('../assets/img/btm_image.png')}/>
                </View>
                <Text style={styles.plantName}>{plantName}</Text>
            </ScrollView>
            

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
    },
    containerinput:{
        
        justifyContent:'space-between',
        flexDirection: 'row',
        alignItems:'center',
        marginVertical:20,
        margin:5
    },
   
    inputContainer: {
        flexDirection: 'row',
        width: '70%',
        height: 40,
        borderRadius: 20,
        paddingHorizontal: 20,
        backgroundColor:'white',
        borderColor:'black',
        borderWidth:1
        
    },
    searchIcon:{
        backgroundColor:COLORS.primary,
        width:50,
        height:40,
        alignItems:'center',
        padding:5,
        borderRadius:20,
    },
    Tbuttons:{
        marginVertical:30,
        marginHorizontal:30,
        justifyContent:'space-between',
        flexDirection:'row'
      
    },
        recomndatation:{
          backgroundColor:'black',
          width:'45%',
          height:37,
          alignItems:'center',
          justifyContent:'center',
          borderRadius:20,
          paddingHorizontal:10
        },
        recText:{
          color:'white',
        },
        statusBox:{
          backgroundColor:'white',
          margin:10,
          borderRadius:20,
          padding:15,
          paddingBottom:25
        },
        seeedingRow:{ 
          justifyContent:'space-between',
          flexDirection:'row',
        },
        plantImgcontainer:{
            width:181,
            height:241,
            alignSelf:'center',
            borderRadius:20,
            marginVertical:20,
            shadowColor:COLORS.ash,
            shadowOffset: {
                width:0,
                height:20,
            },
            shadowOpacity: 0.4,
            shadowRadius: 5,
            elevation:5,
        },
        img:{
            width:181,
            height:241,
        },
        plantName:{
           fontFamily:'Poppins-Bold',
           fontSize:18,
           color:'black',
           alignSelf:'center'
        }
});

//make this component available to the app
export default PalntTracking;
