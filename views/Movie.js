import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import MovieList from "./Movie/MovieList";
export default class MovieScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MovieList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
