/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  //AppRegistry,
  StyleSheet,
  //Text,
  View,
  //Image,
  //ScrollView,
  ListView,
} from 'react-native';

//import Icon from 'react-native-vector-icons/Ionicons';

import ArtistBox from './ArtistBox';

export default class ArtisList extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      dataSource: ds.cloneWithRows(props.artists)
    };
  }

  render() {

    const artist = {
      image: 'https://static.pexels.com/photos/163429/surf-outdoor-sports-surfer-surfing-163429.jpeg',
      name: 'Surf asdf',
      likes: 200,
      comments: 140,
    }

    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(artist) => <ArtistBox artist={artist} /> }
        />
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

//AppRegistry.registerComponent('PlatziMusic', () => PlatziMusic);
