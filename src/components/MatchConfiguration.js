import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Stepper from './elements/Stepper';
import Switch from './elements/Switch';

export default class MatchConfiguration extends Component {
  state = {
    players_in_team: this.props.players_in_team,
    overs: this.props.overs,
    extrasSwitch: this.props.extras,
  };

  _toggleExtrasSwitch = (value) => {
    this.setState({extrasSwitch: value})
  }

  incrementPlayer = () => {this.setState(prevState => ({
    players_in_team: prevState.players_in_team + 1
  }))};

  decrementPlayer = () => {this.setState(prevState => ({
    players_in_team: prevState.players_in_team - 1
  }))};

  incrementOver = () => {this.setState(prevState => ({
    overs: prevState.overs + 1
  }))};

  decrementOver = () => {this.setState(prevState => ({
    overs: prevState.overs - 1
  }))};

  saveMatchConfig = () => { this.props.setMatchConfig({
    players_in_team: this.state.players_in_team,
    overs: this.state.overs,
    extras: this.state.extrasSwitch,
  })};

  _renderModalHeader = () => (
    <View style={styles.headerContainer}>
      <Text>Match Settings</Text>
      <TouchableOpacity onPress={() => {this.saveMatchConfig(); this.props.close();}}>
        <Text>Save</Text>
      </TouchableOpacity>

    </View>
  );

  _renderModalContent = () => (
    <View style={styles.modalContent}>

      <View style={styles.settingOption}>
        <Text style={{alignSelf: 'flex-end'}}>Players in each team</Text>
        <Stepper
          onIncrement={this.incrementPlayer}
          onDecrement={this.decrementPlayer}
          counterValue={ this.state.players_in_team } />
      </View>

      <View style={styles.settingOption}>
        <Text style={{alignSelf: 'flex-end'}}>Overs</Text>
        <Stepper
          onIncrement={this.incrementOver}
          onDecrement={this.decrementOver}
          counterValue={ this.state.overs } />
      </View>

      <View style={styles.settingOption}>
        <Text>Extra run for Wide and No ball</Text>
        <Switch toggleSwitch={this._toggleExtrasSwitch} switchValue={this.state.extrasSwitch} />
      </View>

    </View>
  );

  render() {
    return (
        <View>
          {this._renderModalHeader()}
          {this._renderModalContent()}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalContent: {
  },
  settingOption: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-between',
  }
});
