import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
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
      <ScrollView style={styles.mainscrollView}>
        <View style={styles.Tbuttons}>
          <TouchableOpacity onPress={() => navigation.navigate('suggestion')} style={styles.recomndatation}>
            <Text style={styles.recText}>Suggestion</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('PlantTracking')} style={styles.recomndatation}>
            <Text style={styles.recText}>Plant</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.statusBox}>

          <View style={styles.seeedingRow}>
            <Text style={styles.seedTopic}>Days after seeding</Text>
            <Text style={styles.seedTopic}>Phase</Text>
          </View>
          <View style={styles.seeedingRow}>
            <Text style={styles.seedTopicvalue}>26 Days</Text>
            <Text style={styles.seedTopicvalue}>Vegitative</Text>
          </View>

          <View style={styles.wethercontainer}>
            <View style={styles.wether}>
              <Text style={styles.seedTopic}>Temperatuer</Text>
              <Text style={styles.seedTopic}>Humadity</Text>
              <Text style={styles.seedTopic}>Wind</Text>
            </View>
            <View style={styles.wether}>
              <Text style={styles.seedTopicvalue}>30</Text>
              <Text style={styles.seedTopicvalue}>53%</Text>
              <Text style={styles.seedTopicvalue}>24m/S</Text>
            </View>
          </View>
         
          <Text style={styles.status}>15 Days to Flowering Phase</Text>
          <View style={styles.progressBar}></View>
        </View>

        <View style={styles.hrzntlView}>
            <Text style={styles.forecast}>Forecast</Text>
            <ScrollView horizontal={true}>

              <View style={styles.card}>
                <Text>card 1</Text>
              </View>
              <View style={styles.card}>
                <Text>card 1</Text>
              </View>
              <View style={styles.card}>
                <Text>card 1</Text>
              </View>
              <View style={styles.card}>
                <Text>card 1</Text>
              </View>
              <View style={styles.card}>
                <Text>card 1</Text>
              </View>

            </ScrollView>
                      
        </View>


        <View style={styles.hrzntlView2}>
            <Text style={styles.products}>products</Text>
            <ScrollView horizontal={true}>

              <View style={styles.prdctcard}>
                <Text>card 1</Text>
                <View style={styles.dataisview}>
                  <Text style={styles.details}>Details</Text>
                </View>
              </View>

              <View style={styles.prdctcard}>
                <Text>card 1</Text>
                <View style={styles.dataisview}>
                  <Text style={styles.details}>Details</Text>
                </View>
              </View>

              <View style={styles.prdctcard}>
                <Text>card 1</Text>
                <View style={styles.dataisview}>
                  <Text style={styles.details}>Details</Text>
                </View>
              </View>

              <View style={styles.prdctcard}>
                <Text>card 1</Text>
                <View style={styles.dataisview}>
                  <Text style={styles.details}>Details</Text>
                </View>
              </View>
           

            </ScrollView>
                      
        </View>
       
      </ScrollView>
      
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
  mainscrollView:{
    margin:0
  },
  Tbuttons:{
  marginVertical:5,
  marginHorizontal:30,
  justifyContent:'space-between',
  flexDirection:'row'

  },
  recomndatation:{
    backgroundColor:COLORS.primary,
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
  seedTopic:{
    color:COLORS.ash,
    fontSize:11
  },

  seedTopicvalue:{
    fontSize:13,
    color:'black'
  },
  wethercontainer:{
    marginVertical:15
  },
  wether:{
    justifyContent:'space-between',
    flexDirection:'row',
  },
  status:{
    color:'black',
    fontSize:15,
    marginTop:10
  },
  progressBar:{
    height:20,
    backgroundColor:COLORS.primary2,
    marginTop:5
  },
  hrzntlView:{
    backgroundColor:COLORS.primary,
    borderRadius:8,
    padding:10,
    shadowColor:'black',
    shadowOffset:{
      width:5,
      height:5
    },
    marginVertical:10
  },
  forecast:{
    color:'white',
    fontFamily:"Poppins-Bold",
    fontSize:17
  },
  card:{
    backgroundColor:'white',
    shadowOffset:{
      width:10,
      height:10
    },
    shadowColor:'black',
    width:110,
    height:136,
    margin:10,
    padding:5,
    borderRadius:8,
    alignContent:'center',
    alignItems:'center'
  },
  
  hrzntlView2:{
    backgroundColor:'white',
    borderRadius:8,
    padding:10,
    shadowColor:'black',
    shadowOffset:{
      width:5,
      height:5
    },
    marginVertical:10
  },

  products:{
    color:'black',
    fontFamily:"Poppins-Bold",
    fontSize:17
  },

  prdctcard:{
    backgroundColor:'white',
    shadowOffset:{
      width:10,
      height:10
    },
    shadowColor:'black',
    width:190,
    height:130,
    margin:10,
    padding:5,
    borderRadius:10,
    alignContent:'center',
    alignItems:'center',
    borderColor:'black',
    borderWidth:1
  },

  dataisview:{
    width:190,
    height:40,
    backgroundColor:'black',
    opacity:0.3,
    alignItems:'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginTop:64
  },
  details:{
    color:'white'
  },



});

export default HomeScreen;
