import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

const MenuButton = () => {
  return (
    <View>
      <View style={styles.settingsView}>
        <Text style={styles.settingsButton}>...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  settingsView: {
    alignItems: 'flex-end',
  },
  settingsButton: {
    fontSize: responsiveFontSize(5),
    marginRight: 20,
  },
});

export default MenuButton;