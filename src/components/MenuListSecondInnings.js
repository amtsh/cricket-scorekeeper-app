import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet,Text } from 'react-native';

const MenuListSecondInnings = (props) => {
  return (
    <View style={styles.modalContent}>
    
      <TouchableOpacity onPress={ props.onFirstInningsPress }>
        <Text style={styles.buttonText, styles.menuItem}>Go to first innings</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={ props.onEndMatchPress }>
        <Text style={styles.buttonText, styles.menuItem}>End match</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={ props.onClosePress }>
        <Text style={styles.buttonText, styles.menuItem}>Close this menu</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  menuItem: {
    marginBottom: 20,
  },
  buttonText: {
    
  }
});

export default MenuListSecondInnings;