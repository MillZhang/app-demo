import React, {Component} from "react";
// import {} from "react-native";

import {TabNavigator, StackNavigator} from "react-navigation";

import BookScreen from "./Book";
import MovieScreen from "./Movie";
import MineScreen from "./Mine";
const MainScreen = TabNavigator({
  书籍: {
    screen: BookScreen
  },
  电影: {
    screen: MovieScreen
  },
  我的: {
    screen: MineScreen
  }
}, {
  tabBarOptions: {
    activeTintColor: "#fc6767",
    inactiveTintColor: "#333",
    style: {
      backgroundColor: "#e5e5ef"
    }
  },
  animationEnabled: true,
  tabBarPosition: "bottom",
  swipeEnabled: false
});

import BookDetailScreen from "./Book/BookDetail";
export default StackNavigator({
  Home: {
    screen: MainScreen,
    navigationOptions: {
      header: null
    }
  },
  BookDetail: {
    screen: BookDetailScreen
  }
}, {
  navigationOptions: {
    // header: null,
    headerBackTitle: null,
    headerTintColor: '#333333',
    showIcon: true,
    swipeEnabled: false,
    animationEnabled: false
  },
  mode: 'card'
});
