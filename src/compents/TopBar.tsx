import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-ionicons';
import { COLORS } from '../theme/Theme';

const TopBar = ({ title }:any) => {
  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <View style={styles.iconcontainer}>
          <Icon name="chevron-back-circle" size={25} color='white' />
          <Text style={styles.screenHeader}>{title}</Text>
          <View style={styles.profilecontainer}></View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topbar: {
    width: '100%',
    height: '15%',
    backgroundColor: COLORS.primary,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignContent: 'center',
    justifyContent: 'center',
  },
  iconcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  screenHeader: {
    color: 'white',
    fontSize: 24,
  },
  profilecontainer: {
    width: 35,
    height: 35,
    borderRadius: 18,
    backgroundColor: 'white',
  },
});

export default TopBar;
