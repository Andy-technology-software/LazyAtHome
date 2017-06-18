/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

/*引入一个通用tabbar npm i react-native-tab-navigator --save*/

/*************引入Main*************/
var Main = require('./Component/Main/Main');

export default class LazyAtHome extends Component {
    render() {
        return (
            <Main />
        );
    }
}

AppRegistry.registerComponent('LazyAtHome', () => LazyAtHome);