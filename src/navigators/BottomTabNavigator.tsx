import React, { Component } from "react";
import { View, Text, StyleSheet } from 'react-native';
import HomeScreen from "../screens/HomeScreen";
import HireServiceScreen from "../screens/HireServiceScreen";
import RemainderScreen from "../screens/RemainderScreen";
import MarketScreen from "../screens/MarketScreen"
import { COLORS } from "../theme/Theme";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome"


const Tab = createBottomTabNavigator(); 


interface CustomTabBarIconProps {
    name: string;
    focused: boolean;
    label: string;
  }
  
  const CustomTabBarIcon: React.FC<CustomTabBarIconProps> = ({ name, focused, label }) => (
    <View style={{ alignItems: 'center' }}>
      <Icon name={name} size={25} color={focused ? 'blue' : 'black'} />
      {focused && <Text style={{ color: 'blue', fontSize: 10 }}>{label}</Text>}
    </View>
  );
  

const TabNavigator = () => {

    return(
        <Tab.Navigator screenOptions={{
            tabBarInactiveTintColor:'black',
            tabBarHideOnKeyboard:true,
            headerShown:false,
            tabBarStyle:{
                backgroundColor:'white'
            }
        }}>
            <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          tabBarShowLabel: false, 
          tabBarIcon: ({ focused }) => (
            <CustomTabBarIcon name="home" focused={focused} label="Home" />
          ),
        }} 
      />
      <Tab.Screen 
        name="Remainder" 
        component={RemainderScreen} 
        options={{
          tabBarShowLabel: false, 
          tabBarIcon: ({ focused }) => (
            <CustomTabBarIcon name="bell" focused={focused} label="Remainder" />
          ),
        }} 
      />
      <Tab.Screen 
        name="Hire" 
        component={HireServiceScreen} 
        options={{
          tabBarShowLabel: false, 
          tabBarIcon: ({ focused }) => (
            <CustomTabBarIcon name="briefcase" focused={focused} label="Hire" />
          ),
        }} 
      />
      <Tab.Screen 
        name="Market" 
        component={MarketScreen} 
        options={{
          tabBarShowLabel: false, 
          tabBarIcon: ({ focused }) => (
            <CustomTabBarIcon name="shopping-cart" focused={focused} label="Market" />
          ),
        }}  
      />
        </Tab.Navigator>
    );
};
export default TabNavigator;