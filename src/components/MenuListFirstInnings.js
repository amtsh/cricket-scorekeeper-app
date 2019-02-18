import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet,Text } from 'react-native';

const MenuListFirstInnings = (props) => {
  return (
    <View style={styles.modalContent}>
    
      <TouchableOpacity onPress={ props.onMatchSettingsPress }>
        <Text style={styles.buttonText, styles.menuItem}>Match settings</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={ props.onEndInningPress }>
        <Text style={styles.buttonText, styles.menuItem}>End and start second innings</Text>
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

export default MenuListFirstInnings;