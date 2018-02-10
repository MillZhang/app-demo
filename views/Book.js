import React, { Component } from "react";
import { View, Text,ActivityIndicator } from "react-native";

import Util from "./common/Util";
import BookList from "./Book/BookList";
export default class BookScreen extends Component {
  constructor(props){
      super(props);
      this.state={
        bookData:[],
        loaded:false
      }
  }
  render() {
    return (
      this.state.loaded ?
      <View style={{ flex: 1, alignItems: "center" }}>
        <BookList data={this.state.bookData} />
      </View> : <ActivityIndicator />
    );
  }
  componentDidMount() {
    Util.fetchData(
      `/book/search?q=react`,
      data => {
        this.setState({
          bookData: data.books,
          loaded:true
        });
      },
      error => {}
    );
  }
}
