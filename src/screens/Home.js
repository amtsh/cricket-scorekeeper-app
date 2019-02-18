import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Constants } from 'expo';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

import MenuButton from './../components/elements/MenuButton';
import MatchOptions from './../components/MatchOptions';
import HalfModal from './../components/elements/HalfModal';

import { Actions } from 'react-native-router-flux';

export default class Home extends Component {
  _handleMatchPress(item) {
    Actions.single_match_inn1({ match: item });
  }

  render() {
    return (
      <View style={styles.page}>
        <MenuButton />

        <View style={styles.parent}>
          <View style={styles.headerContainer}>
            <Text style={styles.textStyle}>START GAME</Text>
          </View>
          
          <TouchableOpacity style={styles.item} onPress={() => this._handleMatchPress({})}>
            <View>
                <Image
                  style={styles.img}
                  source={require('./../../assets/single-match-icon.png')}
                />
                <Text style={styles.matchTypeText}>SINGLE MATCH</Text>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.item} onPress={() => this._handleMatchPress({})}>
            <View>
                <Image
                  style={styles.img}
                  source={require('./../../assets/tournament-icon.png')}
                />
                <Text style={styles.matchTypeText}>TOURNAMENT</Text>
            </View>
          </TouchableOpacity>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    height: '100%',
    paddingTop: Constants.statusBarHeight,
  },
  parent: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  item: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: responsiveFontSize(2),
    color: '#888888',
  },
  matchTypeText: {
    marginTop: 30,
    fontSize: responsiveFontSize(2),
    color: '#555555',
    fontWeight: 'bold',
    letterSpacing: 2,
    alignSelf: 'center'
  },
  img: {
    marginTop: 1,
    marginRight: 2,
    width: responsiveWidth(60),
    height: responsiveHeight(17),
  }
});
