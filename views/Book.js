import React, { Component } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Button,
  TextInput,
  Alert,
  TouchableNativeFeedback
} from "react-native";

import Service from "./common/Service";
import BookList from "./Book/BookList";
export default class BookScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookData: [],
      loaded: false,
      q: 'react',
      count: 20
    };
  }
  render() {
    return this.state.loaded
      ? (
        <View style={styles.container}>
          <View style={styles.searchBar}>
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="react"
              onChangeText={(text) => this.setState({ q: text })}></TextInput>
            {/* <Button style={styles.searchBtn} title="查询" onPress={this.pressButton}></Button> */}
            <TouchableNativeFeedback
              onPress={this
                ._pressButton
                .bind(this)}>
              <View style={styles.searchBtn}>
                <Text style={{
                  color: '#fff'
                }}>
                  查询
                </Text>
              </View>
            </TouchableNativeFeedback>
          </View>
          < View style={styles.list}>
            <BookList data={this.state.bookData} navigation={this.props.navigation} />
          </View>
        </View>
      )
      : (<ActivityIndicator style={styles.loading} color="#ea6f5a" size="large" />);
  }
  _pressButton() {
    this.state.q == ''
      ? 'react'
      : this.state.q;
    this.fetchData();
  }
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    Service
      .getBookList({ q: this.state.q, size: 1 })
      .then(result => {
        this.setState({ bookData: result.books, loaded: true });
      });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  list: {
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
  },
  searchBar: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: '#fff'
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#f59826',
    marginRight: 20
  },
  searchBtn: {
    width: 100,
    backgroundColor: '#f59826',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4
  }
});
