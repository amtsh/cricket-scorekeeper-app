import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

const UndoRedoButtons = ({ canUndo, canRedo, onUndo, onRedo }) => {
  
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        height: 40,
        paddingTop: 5,
        backgroundColor: '#dddddd',
      }}>

      <TouchableOpacity onPress={ onUndo } style={{
        flex: 1,
        height: 40,
        alignItems: 'flex-end',
        marginBottom: 10,
      }}>
        <View>
          <Image
            style={{ width: 40, height: 40, marginRight: 4 }}
            source={require('./../../../assets/undo.png')}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={ onRedo } style={{
        flex: 1,
        height: 40,
        marginBottom: 10,
      }}>
        <View>

          <Image
            style={{ width: 40, height: 40, marginLeft: 4 }}
            source={require('./../../../assets/redo.png')}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default UndoRedoButtons;