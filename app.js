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
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import ArtistBox from './ArtistBox';

export default class PlatziMusic extends Component {
  render() {

    const artist = {
      image: 'https://static.pexels.com/photos/163429/surf-outdoor-sports-surfer-surfing-163429.jpeg',
      name: 'Surf asdf',
      likes: 200,
      comments: 140,
    }

    /*
    const image = 'https://static.pexels.com/photos/163429/surf-outdoor-sports-surfer-surfing-163429.jpeg'
    const name = 'Surf'
    const likes = 200
    const comments = 140
    */

    return (
      <View style={styles.container}>

        <ScrollView style={styles.imageBox}>

          {
            Array(500).fill(artist).map(artist => {
              return <ArtistBox artist={artist} />
            })
          }

        </ScrollView>

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
