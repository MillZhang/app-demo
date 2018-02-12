import React from "react";

import { View, Text, FlatList, Image, TouchableNativeFeedback } from "react-native";

import BookItem from "./BookItem";
export default class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.navigation = this.props.navigation;
    this.state = {
      refreshing: false
    }
  }
  render() {
    // console.log(this.props.navigation)
    return (<FlatList
      onRefresh={this._onrefresh}
      refreshing={this.state.refreshing}
      data={this.props.data}
      keyExtractor={this._keyExtractor}
      renderItem={this
        ._renderItem
        .bind(this)} />);
  }
  _keyExtractor(item, index) {
    return index.toString();
  }
  _renderItem(item) {
    item = item.item;
    let that = this;
    return (
      <TouchableNativeFeedback
        onPress={this
          ._goDetail
          .bind(this, item)}>
        <View>
          <BookItem data={item} />
        </View>
      </TouchableNativeFeedback>
    );
  }

  _onrefresh() {

  }

  _goDetail(item) {
    return this
      .navigation
      .navigate("BookDetail", {
        alt: item.alt,
        title: item.title
      });
  }
}
