import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const SuggestionsScreen = () =>{
    return(
        <View style={StyleSheet.container}>
            <View style={StyleSheet.header}>
                <TouchableOpacity style={StyleSheet.backButton}>
                    <Text style={styles.backButtonText}>Back</Text>
                </TouchableOpacity>
                <Text style={StyleSheet.title}>Suggestions</Text>
                <Image source={require('../assets/images/profile.jpg')} style={StyleSheet.profilePic}/>
            </View>

            <ScrollView>
                <Text style={StyleSheet.sectionTitle}>Best for you</Text>
                <View style={StyleSheet.cardContainer}>
                    <View style={StyleSheet.card}>
                        <Image source={require('../assets/images/sunflower.jpg')} style={StyleSheet.cardImage}/>
                        <Text style={StyleSheet.cardText}>SunFlower</Text>
                    </View>
                    <View style={StyleSheet.card}>
                        <Image source={require('../assets/images/rose.jpg')} style={StyleSheet.cardImage}/>
                        <Text style={StyleSheet.cardText}>Rose</Text>
                    </View>
                    <View style={StyleSheet.card}>
                        <Image source ={require('../assets/images/rose.jpg')} styles={StyleSheet.cardImage}/>
                        <Text style={StyleSheet.cardText}>Rose</Text>
                    </View>
                    <View styles={StyleSheet.card}>
                        <Image source={require('../assets/images/sunflower.jpg')} syles={StyleSheet.cardImage}/>
                        <Text style={StyleSheet.cardText}>SunFlower</Text>
                    </View>
                </View>

                <Text style={StyleSheet.sectionTitle}>All Types</Text>
                <View styles={StyleSheet.cardContainer}>
                    <View styles={StyleSheet.card}>
                        <Image source =(require('../assets/images/sunflower.jpg')) style={StyleSheet.cardImage}/>
                        <Text style={StyleSheet.cardText}>SunFlower</Text>
                    </View>
                    <View styles ={StyleSheet.card}>
                        <Image source={require('../assets/images/rose.jpg')} style={StyleSheet.cardImage}/>
                        <Text style={StyleSheet.cardText}>Rose</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingTop: 10,
        backgroundColor: '#4CAF50'
    },
    backButton: {
        marginRight: 10,
    },
    backButtonText: {
        color: '#fff',
        fontSize: 18,
    },
    title: {
        flex: 1,
        textAlign: 'center',
        fontSize: 18,
        color: '#fff',
    },
    profilePic: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
        marginHorizontal: 10,
    }
});