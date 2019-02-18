import React, { Component } from 'react';
import { View, Text } from 'react-native';

const ThisOver = (props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
      }}>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            color: '#666666',
            marginTop: 20,
            marginLeft: 20,
            fontSize: 16,
            fontWeight: '900'
          }}>
          THIS OVER
        </Text>
      </View>
      <View style={{ flex: 1, alignItems: 'flex-end' }}>
        <Text
          style={{
            color: '#666666',
            marginTop: 20,
            fontWeight: 'bold',
          }}>
          { props.runs }
          {' '}
          runs (
          { props.balls_remaining }
          {' '}
          balls left)
          {' '}
        </Text>
      </View>
    </View>
  )
}

export default ThisOver;