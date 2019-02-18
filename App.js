import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { Provider } from "react-redux";

import matchStore from "./src/store";

import HomeScreen from './src/screens/Home';
import SingleMatchInn1Screen from './src/screens/SingleMatch_Inn1';
import SingleMatchInn2Screen from './src/screens/SingleMatch_Inn2';

const App = () => {
  return (
    <Provider store={matchStore}><Router>
        <Scene key="root" hideNavBar initial>
          <Scene key="match_list" component={HomeScreen} />
          <Scene key="single_match_inn1" component={SingleMatchInn1Screen} />
          <Scene key="single_match_inn2" component={SingleMatchInn2Screen} />
        </Scene>
    </Router></Provider>
  );
}

export default App;
