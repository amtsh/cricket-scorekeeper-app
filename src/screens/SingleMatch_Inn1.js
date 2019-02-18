import React, { Component } from 'react';
import { Constants } from 'expo';
import { Actions } from 'react-native-router-flux';
import { View, TouchableOpacity, StyleSheet,Text } from 'react-native';

import MenuButton from './../components/elements/MenuButton';
import FirstInningsContainer from './../containers/FirstInnings.container';
import FirstInningsTeam2 from './../components/FirstInningsTeam2';
import ThisOver1Container from './../containers/ThisOver1.container';
import ThisOverHits1Container from './../containers/ThisOverHits1.container';
import UndoRedoButtons from './../components/elements/UndoRedoButtons';
import ControlPanel1Container from './../containers/ControlPanel1.container';
import MatchConfigurationContainer from './../containers/MatchConfiguration.container';
import HalfModal from './../components/elements/HalfModal';
import MenuListFirstInnings from './../components/MenuListFirstInnings';

export default class SingleMatch_Inn1 extends Component {

  match = Actions.currentParams.match;

  state = {
    menuListVisible: false,
    matchSettingsVisible: false,
  }

  onMenuBtnPress = () => { this.setState({ menuListVisible: true }); }
  closeMenu = () => { this.setState({ menuListVisible: false }); }
  showMatchSettings = () => { this.setState({ matchSettingsVisible: true }); }
  closeMatchSettings = () => { this.setState({ matchSettingsVisible: false }); }

  onMatchSettingsPress = () => { 
    this.closeMenu();
    this.showMatchSettings();
  }

  onEndInningPress = () => {
    this.closeMenu();
    Actions.single_match_inn2();
  }


  
  render() {
    return (
      <View style={styles.page}>

        <View style={{ flexGrow: 1, flexBasis: '15%' }}>

          <TouchableOpacity onPress={this.onMenuBtnPress}>
            <MenuButton />
          </TouchableOpacity>

          <FirstInningsContainer />
          <FirstInningsTeam2 displayTeam2Score={'Yet to bat'} />
          <ThisOver1Container />
          <ThisOverHits1Container />
        </View>

        <ControlPanel1Container />

        
        <HalfModal show={ this.state.menuListVisible }>
          <MenuListFirstInnings
            onEndInningPress={ this.onEndInningPress } 
            onMatchSettingsPress={ this.onMatchSettingsPress } 
            onClosePress={ this.closeMenu } />
        </HalfModal>

        <HalfModal show={ this.state.matchSettingsVisible }>
          <MatchConfigurationContainer close={this.closeMatchSettings}/>
        </HalfModal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
    height: '100%',
  },
});
