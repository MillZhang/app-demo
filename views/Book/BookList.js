import React from "react";

import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";

import BookItem from "./BookItem";
export default class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.navigation = this.props.navigation;
  }
  render() {
    // console.log(this.props.navigation)
    return (
      <FlatList
        data={this.props.data}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
  _keyExtractor(item, index) {
    return index.toString();
  }
  _renderItem(item) {
    item = item.item;
    return (
      <TouchableOpacity
        onPress={() =>this._goDetail()}
      >
        <BookItem data={item} />
      </TouchableOpacity>
    );
  }

  _goDetail(){
    alert(2);
    // this.navigation.navigate("BookDetail");
  }
}
