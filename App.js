
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import WaitScreen from './components/WaitScreen';
import HomeScreen from './components/HomeScreen';
import NavigationScreen from './components/NavigationScreen';
import TestDB from './components/TestDb';
export default class App extends Component {
  render() {
    return (
      <NavigationScreen/>
    );
  }
}
