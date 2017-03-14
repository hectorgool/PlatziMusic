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
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import ArtistBox from './ArtistBox';
import ArtistList from './ArtistList';
import { getArtists } from './api-client';

export default class PlatziMusic extends Component {

  state = {
    artists: []
  }

  componentDidMount(){
    getArtists()
      .then(data => this.setState({ artists: data }))
  }

  render() {

    const artists = this.state.artists;
    console.warn('artists', artists)

    return (
      <View style={styles.container}>
        <ArtistList artists={artists}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 5,
  },
});

AppRegistry.registerComponent('PlatziMusic', () => PlatziMusic);
