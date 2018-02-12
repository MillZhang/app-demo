import React from "react";

import { View, Text, Image, StyleSheet } from "react-native";

export default class MovieItem extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: this.props.data.images.medium }}
        />
        <View style={styles.text}>
          <Text>{this.props.data.title}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 20
  },
  image: {
    width: 100,
    height: 120
  },
  text: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    width: 120
  }
});
