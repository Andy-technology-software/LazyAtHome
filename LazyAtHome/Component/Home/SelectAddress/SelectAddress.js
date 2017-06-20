/**
 * Created by lingnet on 2017/6/19.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    WebView
} from 'react-native';

{/*-----引入外部组件-----*/}
import SelectAddWebView from './SelectAddWebView';

var SelectAddress = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                <SelectAddWebView
                    url="http://localhost:63342/LazyAtHome/LazyAtHome/Html/Nearby.html?_ijt=f1qa0fplfvjokqafd9ujrd23do"
                />
            </View>
        );
    },
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    }
});

module.exports = SelectAddress;