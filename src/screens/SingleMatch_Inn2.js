import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, StyleSheet,TouchableOpacity ,Text} from 'react-native';
import { Constants } from 'expo';

import MenuButton from './../components/elements/MenuButton';
import SecondInningsContainer from './../containers/SecondInnings.container';
import SecondInningsTeam1Container from './../containers/SecondInningsTeam1.container';
import ThisOver2Container from './../containers/ThisOver2.container';
import ThisOverHits2Container from './../containers/ThisOverHits2.container';
import UndoRedoButtons from './../components/elements/UndoRedoButtons';
import ToWinContainer from './../containers/ToWin.container';
import ControlPanel2Container from './../containers/ControlPanel2.container';
import HalfModal from './../components/elements/HalfModal';
import MenuListSecondInnings from './../components/MenuListSecondInnings';

export default class SingleMatch_Inn2 extends Component {
  state = {
    menuListVisible: false,
  }

  onMenuBtnPress = () => { this.setState({ menuListVisible: true }); }
  onFirstInningsPress = () => { this.closeMenu(); Actions.pop() }
  closeMenu = () => { this.setState({ menuListVisible: false }); }
  onEndMatchPress = () => {  }
  render() {
    return (
      <View style={styles.page}>
        <View style={{ flexGrow: 1, flexBasis: '15%' }}>
          <TouchableOpacity onPress={ this.onMenuBtnPress }>
            <MenuButton />
          </TouchableOpacity>
          <SecondInningsTeam1Container />
          <SecondInningsContainer />
          <ToWinContainer />
          <ThisOver2Container />
          <ThisOverHits2Container />
        </View>
        <ControlPanel2Container />

        <HalfModal show={ this.state.menuListVisible }>
          <MenuListSecondInnings
            onFirstInningsPress={ this.onFirstInningsPress } 
            onEndMatchPress={ this.onEndMatchPress }
            onClosePress={ this.closeMenu } />
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
