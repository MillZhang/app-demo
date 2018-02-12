import React from "react";

import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator
} from "react-native";

import Service from "../common/Service";
import MovieItem from "./MovieItem";
export default class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      loaded: false
    };
  }
  render() {
    return this.state.loaded
      ? (<FlatList
        numColumns={3}
        data={this.state.list}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}/>)
      : (<ActivityIndicator
        color="#ea6f5a"
        size="large"
        style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}/>);
  }

  _keyExtractor(item, index) {
    return index.toString();
  }

  _renderItem({item}) {
    return (
      <TouchableOpacity>
        <MovieItem data={item}/>
      </TouchableOpacity>
    );
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    Service
      .getMovieList({q: 'movie', size: 1})
      .then(result => {
        this.setState({list: result.subjects, loaded: true});
      });
  }
}

const styles = StyleSheet.create({container: {}});
