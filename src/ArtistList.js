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
  TouchableOpacity,
} from 'react-native';

import ArtistBox from './ArtistBox';
import { Actions } from 'react-native-router-flux';

export default class ArtisList extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds
    }
  }

  componentDidMount(){
    this.updateDataSource(this.props.artists)
  }

  componentWillReceiveProps(newProps){
    if(newProps.artists !== this.props.artists){
      this.updateDataSource(newProps.artists)
    }
  }

  updateDataSource = (data) => {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(data)
    })
  }

  handlePress(artist){
    //console.warn('artist', artist)
    Actions.artistDetail({artist})
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          enableEmptySections={true}
          dataSource={this.state.dataSource}
          renderRow={(artist) => {
            return (
              <TouchableOpacity
                onPress={ () => this.handlePress(artist) }>
                <ArtistBox artist={artist} />
              </TouchableOpacity>
            )
          }}
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
