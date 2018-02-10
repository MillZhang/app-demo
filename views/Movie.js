import React, { Component } from "react";
import { View, Text } from "react-native";

export default class MovieScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text>Movie List</Text>
      </View>
    );
  }
}
