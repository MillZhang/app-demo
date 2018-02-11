import React, { Component } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

import Util from "./common/Util";
import BookList from "./Book/BookList";
export default class BookScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookData: [],
      loaded: false
    };
  }
  render() {
    return this.state.loaded ? (
      <View style={styles.container}>
        <BookList data={this.state.bookData} navigation={this.props.navigation}/>
      </View>
    ) : (
      <ActivityIndicator style={styles.loading} />
    );
  }
  componentDidMount() {
    Util.fetchData(
      `/book/search?q=react&count=1`,
      data => {
        this.setState({
          bookData: data.books,
          loaded: true
        });
      },
      error => {}
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#F5FCFF"
  },
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
