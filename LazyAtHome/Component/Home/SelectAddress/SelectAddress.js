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

{/*-----引入外部组件--webView---*/}
import SelectAddWebView from './SelectAddWebView';

{/*-----引入外部组件--导航---*/}
import TopNavView from './TopNavView';

var SelectAddress = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {/*导航*/}
                <TopNavView
                    title="地图"
                />

                {/*地图*/}
                <SelectAddWebView
                    url="http://localhost:63342/LazyAtHome/Html/Nearby.html?_ijt=956taef149ugqs49gb8cigde05"
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