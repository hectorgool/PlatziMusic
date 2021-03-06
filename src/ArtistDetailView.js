/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import ArtistBox from './ArtistBox';
import ArtistBoxDetail from './ArtistBoxDetail';
import ArtistList from './ArtistList';
import { getArtists } from './api-client';

export default class ArtistDetailView extends Component {

  render() {

    const artist = this.props.artist;

    return (
      <View style={styles.container}>
        <ArtistBoxDetail artist={artist}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 60,
  },
});
