import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 15,
    height: 110,
    backgroundColor: 'darkslateblue',
    shadowOffset: {width: 3, height: 3},
    shadowColor: '#A3AAAF',
    shadowOpacity: 0.7,
  },
  headerText: {
    paddingTop: 40,
    paddingLeft: 20,
    fontSize: 35,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Header;
