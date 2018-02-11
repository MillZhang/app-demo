import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default class BookItem extends React.Component {
  render() {
    return (
      <View style={styles.box}>
        <Image style={styles.image} source={{ uri: this.props.data.image }} />
        <View style={styles.info}>
          <View style={styles.titleBox}>
            <Text numberOfLines={1} style={styles.title}>
              标题:{this.props.data.title}
            </Text>
          </View>
          <View>
            <Text numberOfLines={1} style={styles.author}>
              作者:{this.props.data.author.join(",")}
            </Text>
            <Text style={styles.date}>出版日期:{this.props.data.pubdate}</Text>
          </View>
          <View style={styles.message}>
            <Text style={styles.messageText}>{this.props.data.binding}</Text>
            <Text style={styles.messageText}>{this.props.data.price}</Text>
            <Text style={styles.messageText}>{this.props.data.publisher}</Text>
          </View>
          <View>
            <Text numberOfLines={2}>概要:{this.props.data.summary}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1
  },
  image: {
    width: 106,
    height: 139
  },
  info: {
    flex: 1,
    height: 139,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginLeft: 20,
    paddingTop: 10,
    paddingRight: 20
  },
  title: {
    fontWeight: "bold",
    fontSize: 16
  },
  author: {
    // fontSize: 12,
    marginTop: 5
  },
  titleBox: {
    flexDirection: "row"
  },
  date: {},
  message: {
    flexDirection: "row"
  },
  messageText: {
    // flex:1,
    marginRight: 5
  },
  summary: {
    marginTop: 10
  }
});
