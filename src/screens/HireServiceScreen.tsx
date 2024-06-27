//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// create a component
const HireServiceScreen =({ navigation }: { navigation: any }) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <FontAwesome name="angle-left" color="fff" size={35} />
                </TouchableOpacity>
                    <Text style={styles.headerText}>Hire Service</Text>
                    <Avatar.Icon size={40} icon="account" style={styles.avatar} />
                </View>

                <View style={styles.tabs}>
                <Button mode="contained" style={styles.tabButton} onPress={() => navigation.navigate('OnlineConsulting')}>Online Consulting</Button>
                <Button mode="contained" style={styles.tabButton} onPress={() => navigation.navigate('HireExpert')}>Hire Expert</Button>
                </View>

                <ScrollView horizontal={true}>
                <Card style={styles.card}>
                <Card.Cover source={{ uri: 'https://via.placeholder.com/150' }} />
                <Card.Content>
                    <Title style={styles.title}>Mr. Mahinda Rajapaksha</Title>
                </Card.Content>
                </Card>
                <Card style={styles.card}>
                <Card.Cover source={{ uri: 'https://via.placeholder.com/150' }} />
                <Card.Content>
                    <Title style={styles.title}>Mr. Namal Rajapaksha</Title>
                </Card.Content>
                </Card>
                <Card style={styles.card}>
                <Card.Cover source={{ uri: 'https://via.placeholder.com/150' }} />
                <Card.Content>
                    <Title style={styles.title}>Mr. Mahinda Amaraweera</Title>
                </Card.Content>
                </Card>
                <Card style={styles.card}>
                <Card.Cover source={{ uri: 'https://via.placeholder.com/150' }} />
                <Card.Content>
                    <Title style={styles.title}>Ms. Renuka Balasooriya</Title>
                </Card.Content>
                </Card>
                <Card style={styles.card}>
                <Card.Cover source={{ uri: 'https://via.placeholder.com/150' }} />
                <Card.Content>
                    <Title style={styles.title}>Ms. Fathima Nashma</Title>
                </Card.Content>
                </Card>
                </ScrollView>

                <View style={styles.ratingSection}>
                    <Title style={styles.ratingTitle}>Rating</Title>
                    
                    <ScrollView>
                    <View style={styles.ratingHeader}>
                    <Avatar.Text size={40} label="JB" />
                    <View style={styles.ratingText}>
                    <Text style={styles.ratingName}>James Bond</Text>
                    <Text style={styles.ratingTime}>2 hour ago</Text>
                    </View>
                    </View>
                    <Text style={styles.ratingTextP}>
                        Providing enough water from the time of planting until harvesting is essential. Yield potential can be drastically lowered if the corn plant's water requirements are not met during the reproductive growth phase.
                    </Text>
                    <Card style={styles.card}>
                    <Card.Cover source={{ uri: 'https://via.placeholder.com/150' }} />
                    </Card>
                    <View style={styles.ratingHeader}>
                    <Avatar.Text size={40} label="JD" />
                    <View style={styles.ratingText}>
                    <Text style={styles.ratingName}>John Doe</Text>
                    <Text style={styles.ratingTime}>8 hour ago</Text>
                    </View>
                    </View>
                    <Text style={styles.ratingTextP}>
                        Providing enough water from the time of planting until harvesting is essential. Yield potential can be drastically lowered if the corn plant's water requirements are not met during the reproductive growth phase.
                    </Text>
                    <Card style={styles.card}>
                    <Card.Cover source={{ uri: 'https://via.placeholder.com/150' }} />
                    </Card>
                    <View style={styles.ratingHeader}>
                    <Avatar.Text size={40} label="DS" />
                    <View style={styles.ratingText}>
                    <Text style={styles.ratingName}>Dulani Sirisena</Text>
                    <Text style={styles.ratingTime}>1 day ago</Text>
                    </View>
                    </View>
                    <Text style={styles.ratingTextP}>
                        Providing enough water from the time of planting until harvesting is essential. Yield potential can be drastically lowered if the corn plant's water requirements are not met during the reproductive growth phase.
                    </Text>
                    <Card style={styles.card}>
                    <Card.Cover source={{ uri: 'https://via.placeholder.com/150' }} />
                    </Card>
                    </ScrollView>
                </View>

            </ScrollView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor:'#3b7e00',
        paddingVertical: 40,
        paddingHorizontal: 20,
    },
    headerText: {
        color: '#fff',
        fontSize: 35,
        textAlign: 'center',
        flex: 1,
    },
    avatar: {
        backgroundColor: '#fff'
    },
    tabs: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 10,
    },
    tabButton: {
        flex: 1,
        margin: 5,
        backgroundColor: '#014421'
    },
    card:{
       margin: 10, 
    },
    title: {
        fontWeight: 'bold',
    },
    ratingSection: {
        padding: 20,
    },
    ratingHeader: {
       flexDirection: 'row',
        alignItems: 'center',
    },
    ratingTime: {
        marginLeft: 10,
        color: '#000',
        flexDirection: 'column',
    },
    ratingName: {
        fontSize: 18,
        fontWeight: 'bold',
        color:'#000'
    },
    ratingText: {
        marginLeft: 10,
    },
    ratingTextP: {
        color: '#000',
        marginVertical: 10,
    },
    ratingTitle: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 25,
        padding: 10,
    }
});

//make this component available to the app
export default HireServiceScreen;
