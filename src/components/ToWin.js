import React, { Component } from 'react';
import { View, Text } from 'react-native';

const ToWin = (props) => {
  return (
    <View style={{ alignItems: 'center',borderBottomWidth:1,borderColor:"#dddddd" }}>
      <Text style={{ marginTop: 5, marginBottom: 10, fontSize: 13, fontWeight: '900', color: '#666666'
      }}>
        TO WIN { props.runs_to_win } in { props.total_remaining_balls } balls
      </Text>
    </View>
  );
}

export default ToWin;