/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ListView,
  Platform,
} from 'react-native';

import {Scene, Router} from 'react-native-router-flux';

import HomeView from './HomeView';
import ArtistDetailView from './ArtistDetailView';

class PlatziMusic extends React.Component {
  render() {

    //const isAndroid = Platform.OS === 'android'

    return <Router>
      <Scene key="root">
      <Scene key="home" component={HomeView} hideNavBar={true} />
      <Scene key="artistDetail" component={ArtistDetailView} hideNavBar={false} />
      </Scene>
    </Router>
  }
}

AppRegistry.registerComponent('PlatziMusic', () => PlatziMusic);
