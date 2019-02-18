import React, { Component } from 'react';
import Modal from 'react-native-modal';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class HalfModal extends Component {

  render() {
    return (
      <Modal 
        style={styles.bottomModal}
        isVisible={this.props.show}>

        <View style={styles.modalContainer}>
          { this.props.children }
        </View>

      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});
