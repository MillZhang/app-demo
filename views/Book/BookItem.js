import React from "react";
import { View, Text, Image } from "react-native";

export default class BookItem extends React.Component {
  render() {
    <View>
      <View>
        <Image source={{ uri: this.props.data.image }} />
      </View>
      <View>
        <View>
          <Text>标题:{this.props.data.title}</Text>
        </View>
        <View>
          <Text>作者:{this.props.data.author.join(",")}</Text>
        </View>
      </View>
    </View>;
  }
}
