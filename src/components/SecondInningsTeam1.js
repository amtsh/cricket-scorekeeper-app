import React, { Component } from 'react';
import { View, Text } from 'react-native';

const SecondInningsTeam1 = (props) => {
  return (
    (
      <View
        style={{
          flexDirection: 'row',
          borderBottomWidth: 2,
          borderColor: '#d6d7da',
        }}>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              color: '#666666',
              marginTop: 10,
              marginLeft: 20,
              fontSize: 12,
            }}>
            TEAM 1
          </Text>

        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            marginRight: 12,
          }}>

          <Text
            style={{
              color: '#666666',
              marginLeft: 80,
              marginTop: 10,
              paddingBottom: 10,
              fontWeight: 'bold',
            }}>
            {props.team1_total_runs} / {props.team1_wickets_down}
          </Text>
        </View>
      </View>
    )
  );
}

export default SecondInningsTeam1;
