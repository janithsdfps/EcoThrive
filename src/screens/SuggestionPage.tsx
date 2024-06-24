import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';


const SuggestionsScreen = () =>{
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton}>
                    <Text style={styles.backButtonText}>Back</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Suggestions</Text>
                <Image source={require('../assets/images/profile.jpg')} style={StyleSheet.profilePic}/>
            </View>


            <ScrollView>
                <Text style={styles.sectionTitle}>Best for you</Text>
                <View style={styles.cardContainer}>
                    <View style={styles.card}>
                        <Image source={require('../assets/images/sunflower.jpg')} style={styles.cardImage}/>
                        <Text style={styles.cardText}>SunFlower</Text>
                    </View>
                    <View style={styles.card}>
                        <Image source={require('../assets/images/rose.jpg')} style={styles.cardImage}/>
                        <Text style={styles.cardText}>Rose</Text>
                    </View>
                    <View style={styles.card}>
                        <Image source ={require('../assets/images/rose.jpg')} style={styles.cardImage}/>
                        <Text style={styles.cardText}>Rose</Text>
                    </View>
                    <View styles={styles.card}>
                        <Image source={require('../assets/images/sunflower.jpg')} style={styles.cardImage}/>
                        <Text style={styles.cardText}>SunFlower</Text>
                    </View>
                </View>


                <Text style={styles.sectionTitle}>All Types</Text>
                <View style={styles.cardContainer}>
                    <View style={styles.card}>
                        <Image source=require('../assets/images/sunflower.jpg') style={styles.cardImage}/>
                        <Text style={styles.cardText}>SunFlower</Text>
                    </View>
                    <View style ={styles.card}>
                        <Image source={require('../assets/images/rose.jpg')} style={styles.cardImage}/>
                        <Text style={styles.cardText}>Rose</Text>
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

