import React, { Component } from 'react'
import {
   View,
   Switch,
} 
from 'react-native'

const SwitchComponent = (props) => {
   return (
   <Switch
      onValueChange = {props.toggleSwitch}
      value = {props.switchValue}/>
   )
}

export default SwitchComponent;