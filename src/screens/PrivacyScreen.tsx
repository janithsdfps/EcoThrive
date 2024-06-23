//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-ionicons';
import { COLORS } from '../theme/Theme';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// create a component
const PrivacyScreen = ({ navigation }: { navigation: any }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <FontAwesome name="angle-left" color="fff" size={24} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Privacy</Text>
                <FontAwesome name="user-circle-o" color="fff" size={24} />
            </View>
            <ScrollView style={styles.content}>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>1. Types data we collect</Text>
                    <Text style={styles.sectionContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    {'\n\n'}
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>2. Use of your personal data</Text>
                    <Text style={styles.sectionContent}>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    {'\n\n'}
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                    </Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>3. Disclosure of your personal data</Text>
                    <Text style={styles.sectionContent}>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                    {'\n\n'}
                    Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. 
                    </Text>
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
        alignItems: 'center',
        padding: 25,
        backgroundColor:'#4CAF50',
    },
    headerTitle: {
        flex: 1,
        fontSize: 25,
        color: '#fff',
        textAlign: 'center',
    },
   content: {
    padding: 10,
   },
   section: {
    marginBottom: 20,
   },
   sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000'
   },
   sectionContent: {
    fontSize: 15,
    color: '#333',
   },
});

//make this component available to the app
export default PrivacyScreen;
