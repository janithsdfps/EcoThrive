
// MyComponent.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { COLORS } from '../theme/Theme';

const Line = () => {
  return (
    <View style={styles.container}>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width:'90%',
    height:1,
    alignSelf:'center',
    margin:'5%',
    backgroundColor:COLORS.ash

  }
});

export default Line;
