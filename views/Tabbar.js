import React, { Component } from "react";
// import {} from "react-native";

import { TabNavigator } from "react-navigation";

import BookScreen from "./Book";
import MovieScreen from "./Movie";
import MineScreen from "./Mine";
export default TabNavigator(
  {
    书籍: {
      screen: BookScreen
    },
    电影: {
      screen: MovieScreen
    },
    我的: {
      screen: MineScreen
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "#fc6767",
      inactiveTintColor:'#333',
      style: {
        backgroundColor: "#e5e5ef"
      }
    },
    animationEnabled: true,
    tabBarPosition: "bottom"
  }
);
