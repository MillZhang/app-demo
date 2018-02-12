import React from "react";

import {View, Text, StyleSheet, WebView, ActivityIndicator} from "react-native";

import Header from '../common/Header';
export default class BookDetailScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({title: `${navigation.state.params.title}-书籍详情`});

  render() {
    return (
      <View style={styles.container}>
        {/* <Header title={headerTitle} navigation={this.props.navigation}></Header> */}
        <WebView
          renderLoading={this._renderLoading}
          startInLoadingState={true}
          source={{
          uri: this.props.navigation.state.params.alt
        }}/>
      </View>
    )
  }

  _renderLoading() {
    return <ActivityIndicator style={styles.loading} color="#ea6f5a" size="large"/>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc'
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
})