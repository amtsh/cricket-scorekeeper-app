import React, { Component } from 'react';
import { View, Text } from 'react-native';


const Scoreboard = (props) => {
  
  return (
    (
      <View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            borderBottomWidth: 2,
            borderColor: '#d6d7da',
          }}>
          <View>
            <Text
              style={{
                flex: 1,
                color: '#666666',
                marginTop: 10,
                marginLeft: 20,
                fontSize: 12,
              }}>
              {props.team} *
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'flex-end',
              marginRight: 10,
            }}>
            <Text
              style={{
                color: '#666666',
                fontSize: 58,
                fontWeight: '900',
              }}>
              {props.total_runs}/{props.wickets_down}
            </Text>
            
            <Text
              style={{
                color: '#777777',
                fontSize: 25,
                marginTop: 5,
                marginBottom: 10,
                fontWeight: 'bold'
              }}>
              (
              {props.overs_delivered}
              .
              {props.balls_delivered}
              /
              {props.total_overs}
              )
              {' '}
            </Text>
            <Text style={{ color: '#555555', marginTop: 10 }}>
              Run Rate
              {' '}{' '}
              <Text style={{ color: '#555555', fontWeight: 'bold' }}>
                {' '}{props.run_rate}
              </Text>
              {' '}{' '}
            </Text>
            <Text style={{ color: '#555555', marginTop: 2 }}>
              Extras
              {' '}
              <Text style={{ color: '#555555', fontWeight: 'bold' }}>
                {' '}NB {props.extras.no_balls}  {' '}
              </Text>
              <Text style={{ color: '#555555', fontWeight: 'bold' }}>
                {' '}WD {props.extras.wide_balls} {' '}
              </Text>
            </Text>
            <Text style={{ color: '#555555', marginTop: 2, marginBottom: 10 }}>
              Projected Score
              {' '}
              <Text style={{ color: '#555555', fontWeight: 'bold' }}>
                {' '} {props.projected_score}
              </Text>
              {' '}{' '}
            </Text>
          </View>
        </View>
      </View>
    )
  );
}

export default Scoreboard;
