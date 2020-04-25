import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

import Colors from '../constants/colors';
import TitleText from '../components/TitleText';

const Header = (props) => {
  return(
    <View style={{
      ...styles.headerBase,
      ...Platform.select({
        ios: styles.headeriOS,
        android: styles.headerAndroid
      })
    }}>
      <TitleText style={styles.headerTitle}>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBase: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerAndroid: {
    backgroundColor: Colors.primary,
    borderBottomColor: Colors.second,
    borderBottomWidth: 1
  },
  headeriOS: {
    backgroundColor: 'green',
    borderBottomColor: 'red',
    borderBottomWidth: 3
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'open-sans-bold',
  }
});

export default Header;