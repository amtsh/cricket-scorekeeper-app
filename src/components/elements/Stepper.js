import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


const Stepper = (props) => {
  
  return (
    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline'}}>
      <TouchableOpacity
        onPress={ props.onDecrement }
        style={[styles.roundButton, {
          borderWidth: 1,
        }]}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>

      <View>
        <Text style={styles.counterText}>{ props.counterValue }</Text>
      </View>

      <TouchableOpacity
        onPress={ props.onIncrement }
        style={[styles.roundButton, {
          borderWidth: 1,
        }]}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  roundButton: {
    width: 40,
    height: 40,
    borderColor: '#777777',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#777777',
  },
  counterText: {
    fontSize: 25,
    color: '#777777',
    paddingLeft: 10,
    paddingRight: 10,
    alignSelf: 'center'
  }
});

export default Stepper;
