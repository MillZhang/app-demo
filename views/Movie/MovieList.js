import React from "react";

import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator
} from "react-native";

import Util from "../common/Util";
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
    return this.state.loaded ? (
      <FlatList
        numColumns={3}
        data={this.state.list}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    ) : (
      <ActivityIndicator
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      />
    );
  }

  _keyExtractor(item, index) {
    return index.toString();
  }

  _renderItem({ item }) {
    return (
      <TouchableOpacity>
        <MovieItem data={item} />
      </TouchableOpacity>
    );
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    Util.fetchData(
      `movie/search?q=movie&size=1`,
      data => {
        this.setState({
          list: data.subjects,
          loaded: true
        });
      },
      error => {}
    );
  }
}

const styles = StyleSheet.create({
  container: {
  }
});
