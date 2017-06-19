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
import {Navigator} from 'react-native-deprecated-custom-components';

/*************引入Main*************/
var Main = require('./Component/Main/Main');
var LaunchImage = require('./Component/Main/LaunchImage');

export default class LazyAtHome extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{name:'启动页',component:LaunchImage}}
                configureScene={()=>{
                             return Navigator.SceneConfigs.PushFromRight;
                        }}
                renderScene={(route,navigator)=>{
                           let Component = route.component;
                           return <Component {...route.passProps} navigator={navigator}/>;
                        }}
            />
        );
    }
}

AppRegistry.registerComponent('LazyAtHome', () => LazyAtHome);