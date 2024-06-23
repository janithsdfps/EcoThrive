//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { COLORS } from '../theme/Theme';
import Icon from "react-native-vector-icons/FontAwesome";
import axios from 'axios';
import Line from '../compents/line';


// create a component
const PalntTracking = ({navigation}:any) => {

    let plantName='Rose'
    const [selectedStage, setSelectedStage] = useState('');
    const [stageData, setStageData] = useState(null);
    const [loading, setLoading] = useState(false);
  
    const stages = [
      { id: 'sprout', label: 'Sprout' },
      { id: 'seeding', label: 'Seeding' },
      { id: 'vegetative', label: 'Vegetative' },
      { id: 'flower', label: 'Flower' },
      { id: 'maintains', label: 'Maintains' },
    ];
  
    const handlePress = async (stageId:any) => {
      setSelectedStage(stageId);
      setLoading(true);
  
      try {
        let response;
  
        // Fetch data based on stageId
        switch (stageId) {
          case 'sprout':
            response = await axios.get('http://your-api-endpoint/sprout-data');
            break;
          case 'seeding':
            response = await axios.get('http://your-api-endpoint/seeding-data');
            break;
          case 'vegetative':
            response = await axios.get('http://your-api-endpoint/vegetative-data');
            break;
          case 'flower':
            response = await axios.get('http://your-api-endpoint/flower-data');
            break;
          case 'maintains':
            response = await axios.get('http://your-api-endpoint/maintains-data');
            break;
          default:
            console.error('Invalid stage ID');
            return;
        }
  
        setStageData(response.data);
      } catch (error) {
        console.error(`Error fetching data for ${stageId}:`, error);
      } finally {
        setLoading(false);
      }
    };
    return (
        <View style={styles.container}>

            <View style={styles.containerinput}>
                <Icon name="chevron-circle-left" size={25} color='#588563' />
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Search plant                                                       "
                        
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

                <View style={styles.trackerContainer}>
                    {stages.map((stage) => (
                        <View style={styles.point1container} key={stage.id}>
                            <TouchableOpacity onPress={() => handlePress(stage.id)}>
                                <View
                                style={[
                                    styles.point1,
                                    selectedStage === stage.id && styles.selectedPoint,
                                ]}
                                >
                                </View>
                            </TouchableOpacity>
                            <Text>{stage.label}</Text>
                        </View>
                    ))}
                </View>

                <View style={styles.discriptionContainer}>
                    <Text>Discrption</Text>
                    <Line></Line>
                    <Text>dis</Text>
                </View>
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
        },
        trackerContainer:{
            flexDirection:'row',
            justifyContent:"space-between",
            margin:20
        },
        point1container:{
            flexDirection:'column',
            justifyContent:'space-between',
            alignItems:'center'
        },
                
        point1:{
            width:30,
            height:30,
            opacity:1,
            borderRadius:15,
            borderWidth:1,
        },
        selectedPoint: {
            backgroundColor:COLORS.primary,
          },

          discriptionContainer:{
            width:'100%',
            height:500,
            backgroundColor:COLORS.primary,
            borderRadius:50,
            padding:50
          }
});

//make this component available to the app
export default PalntTracking;
