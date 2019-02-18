import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class MatchOptions extends Component {
  _handleMatchPress(item) {
    Actions.single_match_inn1({ match: item });
  }

  render() {
    return (
        <FlatList
          data={[{ id: '0', title: 'SINGLE MATCH', img_url: require('./../../assets/single-match-icon.png')},
                 { id: '1', title: 'TOURNAMENT', img_url: require('./../../assets/tournament-icon.png')},
                ]}
          keyExtractor={ item => item.id }
          renderItem={({ item }) => (
            <TouchableOpacity style={{flex:2}} onPress={() => this._handleMatchPress(item)}>
              <View style={styles.flexParent}>
                <Image
                  style={{ flex: 2, width: 200, height: 100, marginRight: 2 }}
                  source={item.img_url}
                />
                <Text style={styles.matchTypeText}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
    );
  }
}

const styles = StyleSheet.create({
  matchTypeText: {
    marginTop: 30,
    fontSize: 17,
    color: '#555555',
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  flexParent: {
    alignItems: 'center',
    marginTop: 60,
  },
});
