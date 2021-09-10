

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  
} from 'react-native';

import inicio from './src/ui/inicio/Inicio.js';
import principal from './src/ui/home/Principal.js';
import detalleEmpresa from './src/ui/empresa/DetalleEmpresa.js';


import {Actions, Scene, Router} from 'react-native-router-flux';




export default class App extends Component<{}>{


  render() {

    return <Router>
  <Scene key="root">
  
    <Scene key="inicio" component={inicio} hideNavBar/ >
    <Scene key="principal" component={principal} hideNavBar/ >
    <Scene key="detalleEmpresa" component={detalleEmpresa} hideNavBar/ >
       
  </Scene>
  
    </Router>
  
  }
}

