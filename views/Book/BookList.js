import React from "react";

import { View, Text,FlatList } from "react-native";

import BookItem from './BookItem';
export default class BookList extends React.Component {
  render() {
    return(
        <FlatList data={this.props.data}
        renderItem={this._renderItem}/>
    )
  }
  _renderItem(item){
    <BookItem data={item} />
  }
}
